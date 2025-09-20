import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Globe, Zap, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "All-in-One Platform",
      description: "Book cinema tickets and event tickets all in one place."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Payments",
      description: "Real-time payment processing with instant confirmation and QR codes."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Reliable",
      description: "Your transactions are protected with enterprise-grade security."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "For Everyone",
      description: "Built for both event organizers and attendees across Nigeria."
    }
  ];

  const stats = [
    { number: "500K+", label: "Tickets Sold" },
    { number: "10K+", label: "Events Hosted" },
    { number: "200+", label: "Partner Venues" },
    { number: "3.5%", label: "Commission Rate" }
  ];

  return (
    <div className="min-h-screen pt-20 pb-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-orange text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About TicketEase
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-primary-foreground/90">
            More than just an event ticketing platform; we're a full-stack solution for event organizers and attendees alike. 
            Sell tickets online, offline, and onsite, all at no prior cost to your business.
          </p>
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-6 py-2">
            That's a game changer.
          </Badge>
        </div>
      </div>

      {/* Why TicketEase Section */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent mb-4">
              Why TicketEase Leads the Pack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-border/50 hover:border-orange/30 transition-colors">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gradient-to-r from-orange to-accent rounded-lg flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="py-20 bg-gradient-to-br from-background to-orange/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">All-in-One Experience</h3>
                  <p className="text-muted-foreground">TicketEase allows users to find and book cinema and event tickets all in one place. No need to jump between multiple apps.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Better Pricing for Businesses</h3>
                  <p className="text-muted-foreground">We offer better pricing (just 3.5% on total sales) and smarter distribution. You can sell tickets online, offline, and onsite, with no additional cost.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Instant Payments & Real-time Dashboard</h3>
                  <p className="text-muted-foreground">Organizers can track sales, check-in attendees, and receive real-time analytics with instant payment processing.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">QR Code Integration</h3>
                  <p className="text-muted-foreground">TicketEase provides unique QR codes for each event, enabling attendees to purchase tickets by simply scanning the code. Additionally, a separate QR code system is available for event check-ins, streamlining the entry process.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-primary to-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            With everything in one place, TicketEase ensures your event has maximum visibility, control, and revenue – at lower costs than the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Start Selling Tickets
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Browse Events
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;