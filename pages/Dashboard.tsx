import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, MapPin, Clock, Users, Plus, BarChart3, AlertCircle } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-orange/5 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent mb-2">
            Event Dashboard
          </h1>
          <p className="text-muted-foreground">Create and manage your events with ease</p>
        </div>

        {/* Supabase Warning */}
        <div className="bg-orange/10 border border-orange/20 rounded-lg p-4 mb-8">
          <div className="flex items-center space-x-3">
            <AlertCircle className="h-5 w-5 text-orange flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-orange">Connect Supabase Required</h3>
              <p className="text-sm text-muted-foreground mt-1">
                To save events, manage attendees, and enable full functionality, please connect your Lovable project to Supabase.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Create Event Form */}
          <div className="lg:col-span-2">
            <Card className="border-orange/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="h-5 w-5 text-orange" />
                  <span>Create New Event</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="event-name">Event Name</Label>
                    <Input id="event-name" placeholder="Amazing Concert Night" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-category">Category</Label>
                    <Input id="event-category" placeholder="Music, Sports, Comedy..." />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event-description">Description</Label>
                  <Textarea 
                    id="event-description" 
                    placeholder="Describe your event, what makes it special..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="event-date">Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="event-date" type="date" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-time">Time</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="event-time" type="time" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-capacity">Capacity</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="event-capacity" type="number" placeholder="100" className="pl-10" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event-location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="event-location" placeholder="Lagos, Nigeria" className="pl-10" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ticket-price">Ticket Price (₦)</Label>
                    <Input id="ticket-price" type="number" placeholder="5000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="early-bird">Early Bird Price (₦)</Label>
                    <Input id="early-bird" type="number" placeholder="3500" />
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-orange to-accent hover:shadow-lg hover:shadow-orange/25 transition-all duration-300">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Event
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats & Actions */}
          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>Quick Stats</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-orange/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">0</div>
                  <div className="text-sm text-muted-foreground">Total Events</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-orange/10 to-accent/10 rounded-lg">
                  <div className="text-2xl font-bold text-orange">₦0</div>
                  <div className="text-sm text-muted-foreground">Revenue</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-accent">0</div>
                  <div className="text-sm text-muted-foreground">Attendees</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange/20">
              <CardHeader>
                <CardTitle className="text-orange">Recent Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No events created yet</p>
                  <p className="text-sm">Create your first event above</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}