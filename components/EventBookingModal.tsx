import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, MapPin, Users, Ticket, QrCode } from "lucide-react";
import QRCode from "qrcode";

interface Event {
  id: string;
  title: string;
  description: string;
  date_time: string;
  location: string;
  max_attendees: number;
  price: number;
  category: string;
}

interface EventBookingModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

const EventBookingModal = ({ event, isOpen, onClose }: EventBookingModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    attendee_name: "",
    attendee_email: "",
    attendee_phone: "",
    ticket_count: 1
  });
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [bookingReference, setBookingReference] = useState<string>("");
  const { toast } = useToast();

  const generateBookingReference = () => {
    return `EVT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`.toUpperCase();
  };

  const generateQRCode = async (data: string) => {
    try {
      const qrCodeDataURL = await QRCode.toDataURL(data, {
        width: 256,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      return qrCodeDataURL;
    } catch (error) {
      console.error('Error generating QR code:', error);
      return "";
    }
  };

  const handleBooking = async () => {
    if (!event) return;

    setIsLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Authentication Required",
          description: "Please sign in to book this event.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      const reference = generateBookingReference();
      const qrData = JSON.stringify({
        booking_reference: reference,
        event_id: event.id,
        attendee_name: formData.attendee_name,
        attendee_email: formData.attendee_email,
        ticket_count: formData.ticket_count
      });

      const { data: booking, error } = await supabase
        .from('event_bookings')
        .insert({
          event_id: event.id,
          user_id: user.id,
          booking_reference: reference,
          qr_code_data: qrData,
          attendee_name: formData.attendee_name,
          attendee_email: formData.attendee_email,
          attendee_phone: formData.attendee_phone,
          ticket_count: formData.ticket_count,
          total_amount: event.price * formData.ticket_count
        })
        .select()
        .single();

      if (error) {
        throw error;
      }

      const qrCodeUrl = await generateQRCode(qrData);
      setQrCodeUrl(qrCodeUrl);
      setBookingReference(reference);

      toast({
        title: "Booking Confirmed!",
        description: "Your QR code has been generated. Save it for quick check-in.",
      });

    } catch (error: any) {
      toast({
        title: "Booking Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({ attendee_name: "", attendee_email: "", attendee_phone: "", ticket_count: 1 });
    setQrCodeUrl("");
    setBookingReference("");
    onClose();
  };

  if (!event) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Ticket className="w-5 h-5 text-orange" />
            Book Event Ticket
          </DialogTitle>
        </DialogHeader>

        {!qrCodeUrl ? (
          <div className="space-y-6">
            {/* Event Details */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg">{event.title}</h3>
                    <Badge variant="secondary" className="bg-orange/10 text-orange">
                      {event.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-orange" />
                      {new Date(event.date_time).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-orange" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-orange" />
                      Max {event.max_attendees} attendees
                    </div>
                    <div className="text-lg font-semibold text-orange">
                      ₦{event.price.toLocaleString()}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Form */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="attendee_name">Full Name *</Label>
                  <Input
                    id="attendee_name"
                    value={formData.attendee_name}
                    onChange={(e) => setFormData(prev => ({ ...prev, attendee_name: e.target.value }))}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="attendee_email">Email *</Label>
                  <Input
                    id="attendee_email"
                    type="email"
                    value={formData.attendee_email}
                    onChange={(e) => setFormData(prev => ({ ...prev, attendee_email: e.target.value }))}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="attendee_phone">Phone Number</Label>
                  <Input
                    id="attendee_phone"
                    value={formData.attendee_phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, attendee_phone: e.target.value }))}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="ticket_count">Number of Tickets</Label>
                  <Input
                    id="ticket_count"
                    type="number"
                    min="1"
                    max="10"
                    value={formData.ticket_count}
                    onChange={(e) => setFormData(prev => ({ ...prev, ticket_count: parseInt(e.target.value) || 1 }))}
                  />
                </div>
              </div>
            </div>

            {/* Total */}
            <div className="bg-secondary/20 p-4 rounded-lg">
              <div className="flex justify-between items-center font-semibold">
                <span>Total Amount:</span>
                <span className="text-orange text-lg">
                  ₦{(event.price * formData.ticket_count).toLocaleString()}
                </span>
              </div>
            </div>

            <Button 
              onClick={handleBooking}
              disabled={isLoading || !formData.attendee_name || !formData.attendee_email}
              className="w-full bg-gradient-to-r from-orange to-accent"
            >
              {isLoading ? "Processing..." : "Confirm Booking"}
            </Button>
          </div>
        ) : (
          /* QR Code Display */
          <div className="space-y-6 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-green-600">
                <QrCode className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Booking Confirmed!</h3>
              </div>
              <p className="text-muted-foreground">
                Your ticket has been booked successfully. Save this QR code for quick check-in.
              </p>
            </div>

            <Card className="p-6 bg-white">
              <div className="space-y-4">
                <div className="mx-auto w-64 h-64 flex items-center justify-center">
                  <img src={qrCodeUrl} alt="QR Code" className="max-w-full max-h-full" />
                </div>
                <div className="space-y-2">
                  <p className="font-mono text-sm bg-secondary/20 p-2 rounded">
                    Booking Reference: {bookingReference}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Present this QR code at the event entrance for quick check-in
                  </p>
                </div>
              </div>
            </Card>

            <div className="flex gap-3">
              <Button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.download = `ticket-${bookingReference}.png`;
                  link.href = qrCodeUrl;
                  link.click();
                }}
                variant="outline" 
                className="flex-1"
              >
                Download QR Code
              </Button>
              <Button onClick={handleClose} className="flex-1 bg-gradient-to-r from-orange to-accent">
                Close
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EventBookingModal;