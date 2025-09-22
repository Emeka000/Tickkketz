import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QrCode, TrendingUp, Zap, Shield, Users, CreditCard, ArrowRight } from "lucide-react";
import qrFeature from "@/assets/qr-feature.jpg";
import analyticsFeature from "@/assets/analytics-feature.jpg";
import paymentsFeature from "@/assets/payments-security.jpg";
import multiChannelFeature from "@/assets/multi-channel.jpg";

const features = [
  {
    icon: QrCode,
    title: "QR Code Integration",
    description: "Unique QR codes for each event and seamless check-in system for attendees.",
    image: qrFeature,
    badge: "Seamless Entry"
  },
  {
    icon: TrendingUp,
    title: "Real-time Analytics",
    description: "Track sales, monitor check-ins, and get instant insights with our dashboard.",
    image: analyticsFeature,
    badge: "Live Data"
  },
  {
    icon: Zap,
    title: "Instant Payments",
    description: "Fast, secure payment processing with immediate settlement for organizers.",
    image: paymentsFeature,
    badge: "3.5% Fee Only"
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Bank-grade security ensuring safe transactions for all users.",
    badge: "100% Secure"
  },
  {
    icon: Users,
    title: "Multi-Channel Sales",
    description: "Sell tickets online, offline, and onsite with no additional costs.",
    image: multiChannelFeature,
    badge: "All Channels"
  },
  {
    icon: CreditCard,
    title: "Flexible Pricing",
    description: "No upfront costs, just 3.5% on successful sales. Best rates in Nigeria.",
    badge: "Best Rates"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="text-primary font-semibold mb-4">
            Why Choose Ticket Ease
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            All-in-One Platform for Modern Ticketing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From cinema bookings to event management, we provide everything you need 
            in one powerful, easy-to-use platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm overflow-hidden cursor-pointer hover:border-orange/20 ${
                  index === 0 ? 'lg:col-span-1 lg:row-span-2' : ''
                }`}
                onClick={() => alert(`${feature.title} feature details coming soon!`)}
              >
                {feature.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <Badge 
                      variant="secondary" 
                      className="absolute top-4 right-4 bg-primary/90 text-primary-foreground border-0"
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className={feature.image ? "pb-3" : "pb-4"}>
                  {!feature.image && (
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-primary">
                        {feature.badge}
                      </Badge>
                    </div>
                  )}
                  
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Platform Stats */}
        <div className="mt-20">
          <div className="glass rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Trusted by Event Organizers Across Nigeria
              </h3>
              <p className="text-muted-foreground">
                Join thousands of successful events powered by Ticket Ease
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">250K+</div>
                <div className="text-sm text-muted-foreground">Tickets Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5K+</div>
                <div className="text-sm text-muted-foreground">Events Hosted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">36</div>
                <div className="text-sm text-muted-foreground">States Covered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange to-accent hover:shadow-lg hover:shadow-orange/25"
            onClick={() => window.location.href = '/dashboard'}
          >
            Start Selling Tickets
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;