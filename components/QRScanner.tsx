import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import QrScanner from "qr-scanner";
import { Camera, CheckCircle, XCircle, User, Calendar, MapPin } from "lucide-react";

interface QRScannerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface BookingData {
  booking_reference: string;
  event_id: string;
  attendee_name: string;
  attendee_email: string;
  ticket_count: number;
}

interface BookingDetails {
  id: string;
  booking_reference: string;
  attendee_name: string;
  attendee_email: string;
  ticket_count: number;
  status: string;
  checked_in_at: string | null;
  event: {
    title: string;
    date_time: string;
    location: string;
  };
}

const QRScanner = ({ isOpen, onClose }: QRScannerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scanner, setScanner] = useState<QrScanner | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && videoRef.current) {
      startScanner();
    }
    return () => {
      stopScanner();
    };
  }, [isOpen]);

  const startScanner = async () => {
    if (!videoRef.current) return;

    try {
      const qrScanner = new QrScanner(
        videoRef.current,
        (result) => handleScanResult(result.data),
        {
          highlightScanRegion: true,
          highlightCodeOutline: true,
        }
      );

      await qrScanner.start();
      setScanner(qrScanner);
      setIsScanning(true);
    } catch (error) {
      console.error("Error starting scanner:", error);
      toast({
        title: "Camera Error",
        description: "Unable to access camera. Please check permissions.",
        variant: "destructive",
      });
    }
  };

  const stopScanner = () => {
    if (scanner) {
      scanner.stop();
      scanner.destroy();
      setScanner(null);
    }
    setIsScanning(false);
  };

  const handleScanResult = async (data: string) => {
    if (isProcessing) return;
    
    setIsProcessing(true);
    stopScanner();

    try {
      const bookingData: BookingData = JSON.parse(data);
      
      // Fetch booking details from database
      const { data: booking, error } = await supabase
        .from('event_bookings')
        .select(`
          id,
          booking_reference,
          attendee_name,
          attendee_email,
          ticket_count,
          status,
          checked_in_at,
          events:event_id (
            title,
            date_time,
            location
          )
        `)
        .eq('booking_reference', bookingData.booking_reference)
        .single();

      if (error || !booking) {
        throw new Error("Booking not found");
      }

      setBookingDetails(booking as any);

    } catch (error) {
      console.error("Error processing QR code:", error);
      toast({
        title: "Invalid QR Code",
        description: "This QR code is not valid for event check-in.",
        variant: "destructive",
      });
      // Restart scanner after a short delay
      setTimeout(() => {
        setIsProcessing(false);
        startScanner();
      }, 2000);
    }
  };

  const handleCheckIn = async () => {
    if (!bookingDetails) return;

    setIsProcessing(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error("Authentication required");
      }

      // Update booking status to checked_in
      const { error: updateError } = await supabase
        .from('event_bookings')
        .update({
          status: 'checked_in',
          checked_in_at: new Date().toISOString()
        })
        .eq('id', bookingDetails.id);

      if (updateError) {
        throw updateError;
      }

      // Create check-in log
      const { error: logError } = await supabase
        .from('event_check_ins')
        .insert({
          booking_id: bookingDetails.id,
          checked_in_by: user.id,
          check_in_location: "Event Entrance"
        });

      if (logError) {
        console.error("Error creating check-in log:", logError);
      }

      toast({
        title: "Check-in Successful!",
        description: `${bookingDetails.attendee_name} has been checked in.`,
      });

      // Update local state
      setBookingDetails(prev => prev ? {
        ...prev,
        status: 'checked_in',
        checked_in_at: new Date().toISOString()
      } : null);

    } catch (error: any) {
      toast({
        title: "Check-in Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClose = () => {
    stopScanner();
    setBookingDetails(null);
    setIsProcessing(false);
    onClose();
  };

  const restartScanning = () => {
    setBookingDetails(null);
    setIsProcessing(false);
    startScanner();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-orange" />
            Event Check-in Scanner
          </DialogTitle>
        </DialogHeader>

        {!bookingDetails ? (
          <div className="space-y-4">
            <div className="relative aspect-square bg-black rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                playsInline
                muted
              />
              {!isScanning && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="text-white text-center">
                    <Camera className="w-12 h-12 mx-auto mb-2" />
                    <p>Initializing camera...</p>
                  </div>
                </div>
              )}
            </div>
            <p className="text-center text-muted-foreground">
              Point the camera at the QR code on the attendee's ticket
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Booking Details */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{bookingDetails.event.title}</h3>
                    <Badge 
                      variant={bookingDetails.status === 'checked_in' ? "default" : "secondary"}
                      className={bookingDetails.status === 'checked_in' ? "bg-green-100 text-green-800" : ""}
                    >
                      {bookingDetails.status === 'checked_in' ? (
                        <><CheckCircle className="w-4 h-4 mr-1" /> Checked In</>
                      ) : (
                        <><XCircle className="w-4 h-4 mr-1" /> Not Checked In</>
                      )}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-orange" />
                      <div>
                        <p className="font-medium">{bookingDetails.attendee_name}</p>
                        <p className="text-muted-foreground">{bookingDetails.attendee_email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-orange" />
                      <div>
                        <p className="font-medium">
                          {new Date(bookingDetails.event.date_time).toLocaleDateString()}
                        </p>
                        <p className="text-muted-foreground">
                          {new Date(bookingDetails.event.date_time).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-orange" />
                      <p className="text-sm">{bookingDetails.event.location}</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">Tickets: {bookingDetails.ticket_count}</p>
                      <p className="text-muted-foreground">Ref: {bookingDetails.booking_reference}</p>
                    </div>
                  </div>

                  {bookingDetails.checked_in_at && (
                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-sm text-green-800">
                        ✅ Checked in on {new Date(bookingDetails.checked_in_at).toLocaleString()}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button 
                onClick={restartScanning}
                variant="outline" 
                className="flex-1"
              >
                Scan Another
              </Button>
              {bookingDetails.status !== 'checked_in' ? (
                <Button 
                  onClick={handleCheckIn}
                  disabled={isProcessing}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  {isProcessing ? "Processing..." : "Check In"}
                </Button>
              ) : (
                <Button 
                  onClick={handleClose}
                  className="flex-1 bg-gradient-to-r from-orange to-accent"
                >
                  Close
                </Button>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QRScanner;