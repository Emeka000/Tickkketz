import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AuthModal } from "@/components/AuthModal";
import { Film, Calendar, ArrowRight, Clock } from "lucide-react";
import cinemaLuxury from "@/assets/cinema-luxury.jpg";
import eventsFestival from "@/assets/events-festival.jpg";

const categories = [
  {
    icon: Film,
    title: "Cinema Tickets",
    description: "Latest movies, premium theaters, and exclusive screenings",
    features: ["AI Movie Recommendations", "IMAX & 4D Options", "Group Bookings", "Premium Seating"],
    color: "from-blue-500 to-purple-600",
    image: cinemaLuxury,
    stats: { venues: "120+ Cinemas", cities: "20+ Cities" },
    trending: ["Black Panther 2", "Avatar: The Way of Water", "Top Gun: Maverick"]
  },
  {
    icon: Calendar,
    title: "Event Tickets",
    description: "Concerts, conferences, festivals, and exclusive experiences", 
    features: ["Live Events", "VIP Packages", "Early Bird Discounts", "Meet & Greet"],
    color: "from-green-500 to-teal-600",
    image: eventsFestival,
    stats: { events: "1K+ Events", categories: "15+ Types" },
    trending: ["Lagos Music Festival", "Tech Conference 2024", "Comedy Night Live"]
  }
];

const TicketCategories = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="text-primary font-semibold mb-4">
            One Platform, All Experiences
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Book Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cinema and events - all at your fingertips with smart recommendations 
            and the best prices in Nigeria.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-card/60 backdrop-blur-sm overflow-hidden relative"
              >
                {/* Category Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                  <Badge 
                    variant="outline" 
                    className="absolute top-4 right-4 bg-white/90 text-foreground border-0"
                  >
                    Popular
                  </Badge>
                </div>
                
                {/* Gradient Background */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6 relative z-10">
                  {/* Features */}
                  <div>
                    <h4 className="font-medium text-sm mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {category.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(category.stats).map(([key, value], i) => (
                      <div key={i} className="text-center p-3 rounded-lg bg-secondary/30">
                        <div className="font-semibold text-sm text-foreground">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Trending */}
                  <div>
                    <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      Trending Now
                    </h4>
                    <div className="space-y-1">
                      {category.trending.map((item, i) => (
                        <Badge key={i} variant="secondary" className="text-xs mr-1 mb-1">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full group-hover:shadow-lg transition-all duration-300 hover:bg-orange/10 hover:border-orange/40 hover:text-orange" 
                    variant="outline"
                    onClick={() => alert(`${category.title} coming soon! Connect Supabase for full functionality.`)}
                  >
                    Browse {category.title}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Experience the Future of Ticketing?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Ticket Ease for all their entertainment 
              needs across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <AuthModal>
                <Button variant="hero" size="lg" className="px-8 bg-gradient-to-r from-orange to-accent">
                  Start Booking Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </AuthModal>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 hover:bg-orange/10 hover:border-orange/40"
                onClick={() => window.location.href = '/dashboard'}
              >
                For Event Organizers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketCategories;