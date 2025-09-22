import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, QrCode, Scan } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import EventBookingModal from "@/components/EventBookingModal";
import QRScanner from "@/components/QRScanner";

interface Event {
  id: string;
  title: string;
  description: string | null;
  date_time: string;
  location: string;
  max_attendees: number | null;
  price: number | null;
  category: string | null;
  created_at: string;
  updated_at: string;
  organizer_id: string | null;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date_time', { ascending: true });

      if (error) {
        console.error('Error fetching events:', error);
      } else {
        setEvents(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookEvent = (event: Event) => {
    setSelectedEvent(event);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen pt-20 pb-8 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center gap-4 mb-6">
            <Button
              onClick={() => setIsScannerOpen(true)}
              variant="outline"
              className="flex items-center gap-2 hover:bg-orange/10 hover:border-orange/40"
            >
              <Scan className="w-4 h-4" />
              Check-in Scanner
            </Button>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent mb-4">
            Discover Amazing Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find and book tickets for the hottest events happening across Nigeria. 
            Get your QR code for instant check-in!
          </p>
        </div>

        {isLoading ? (
          <div className="text-center">
            <p className="text-muted-foreground">Loading events...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="group hover:shadow-lg hover:shadow-orange/10 transition-all duration-300 border-border/50 hover:border-orange/30">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-orange/10 text-orange border-orange/20">
                      {event.category}
                    </Badge>
                    <span className="text-2xl font-bold text-orange">
                      ₦{event.price.toLocaleString()}
                    </span>
                  </div>
                  <CardTitle className="group-hover:text-orange transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-orange" />
                    {new Date(event.date_time).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-orange" />
                    {new Date(event.date_time).toLocaleTimeString()}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-orange" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-orange" />
                    Max {event.max_attendees} attendees
                  </div>
                  <Button 
                    onClick={() => handleBookEvent(event)}
                    className="w-full bg-gradient-to-r from-orange to-accent hover:shadow-lg hover:shadow-orange/25 flex items-center justify-center gap-2"
                  >
                    <QrCode className="w-4 h-4" />
                    Book Now & Get QR
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <EventBookingModal
          event={selectedEvent}
          isOpen={isBookingModalOpen}
          onClose={() => {
            setIsBookingModalOpen(false);
            setSelectedEvent(null);
          }}
        />

        <QRScanner
          isOpen={isScannerOpen}
          onClose={() => setIsScannerOpen(false)}
        />
      </div>
    </div>
  );
};

export default Events;