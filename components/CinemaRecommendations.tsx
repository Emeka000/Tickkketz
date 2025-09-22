import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock, Sparkles, Navigation } from "lucide-react";
import cinemaLuxury from "@/assets/cinema-luxury.jpg";

const nigerianCities = [
  "Lagos", "Abuja", "Kano", "Ibadan", "Port Harcourt", "Benin City", 
  "Kaduna", "Enugu", "Warri", "Jos", "Calabar", "Akure"
];

const cinemaData = {
  Lagos: [
    {
      name: "Silverbird Cinemas Victoria Island",
      rating: 4.5,
      distance: "2.3 km",
      shows: ["Black Panther", "Avatar 2", "Top Gun Maverick"],
      nextShow: "7:30 PM",
      aiScore: 95,
      features: ["IMAX", "Premium Seating", "Dolby Atmos"]
    },
    {
      name: "Genesis Deluxe Cinemas Lekki",
      rating: 4.3,
      distance: "5.1 km", 
      shows: ["Wakanda Forever", "The Woman King", "Beast"],
      nextShow: "8:00 PM",
      aiScore: 88,
      features: ["Luxury Recliner", "VIP Lounge", "Premium Sound"]
    },
    {
      name: "Filmhouse Cinemas Surulere",
      rating: 4.2,
      distance: "3.7 km",
      shows: ["John Wick 4", "Scream VI", "Fast X"],
      nextShow: "6:45 PM",
      aiScore: 82,
      features: ["Standard Screen", "Comfortable Seating", "Great Location"]
    }
  ],
  Abuja: [
    {
      name: "Silverbird Cinemas Abuja",
      rating: 4.4,
      distance: "1.8 km",
      shows: ["Spider-Man", "Doctor Strange", "Thor"],
      nextShow: "7:15 PM", 
      aiScore: 91,
      features: ["IMAX", "Premium Experience", "Central Location"]
    },
    {
      name: "Genesis Deluxe Cinemas Wuse",
      rating: 4.1,
      distance: "3.2 km",
      shows: ["Black Adam", "The Batman", "Aquaman"],
      nextShow: "8:30 PM",
      aiScore: 85,
      features: ["Luxury Seating", "Advanced Audio", "VIP Service"]
    }
  ]
};

const CinemaRecommendations = () => {
  const [selectedCity, setSelectedCity] = useState("Lagos");
  const [userLocation, setUserLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getCurrentLocation = () => {
    setIsLoading(true);
    // Simulate AI location detection
    setTimeout(() => {
      setUserLocation("Detected: Lagos Island, Lagos State");
      setSelectedCity("Lagos");
      setIsLoading(false);
    }, 1500);
  };

  const cinemas = cinemaData[selectedCity as keyof typeof cinemaData] || cinemaData.Lagos;

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <Badge variant="secondary" className="text-primary font-semibold">
              AI-Powered Cinema Discovery
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find the Perfect Cinema Near You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI analyzes your preferences, location, and real-time data to recommend 
            the best cinema experiences across Nigeria.
          </p>
        </div>

        {/* Location Detection */}
        <div className="mb-12 text-center">
          <div className="glass rounded-xl p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Navigation className="w-5 h-5 text-primary" />
              <span className="font-medium">Smart Location Detection</span>
            </div>
            {userLocation ? (
              <div className="text-sm text-muted-foreground mb-3">{userLocation}</div>
            ) : (
              <div className="text-sm text-muted-foreground mb-3">
                Enable location for personalized recommendations
              </div>
            )}
            <Button 
              onClick={getCurrentLocation} 
              disabled={isLoading}
              variant="glow"
              size="sm"
            >
              {isLoading ? "Detecting..." : "Detect My Location"}
            </Button>
          </div>
        </div>

        {/* City Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-center">Or Choose Your City</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {nigerianCities.map((city) => (
              <Button
                key={city}
                variant={selectedCity === city ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCity(city)}
                className="transition-all duration-300"
              >
                {city}
              </Button>
            ))}
          </div>
        </div>

        {/* Cinema Recommendations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cinemas.map((cinema, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
              {/* Cinema Image */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={cinemaLuxury} 
                  alt={cinema.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                <Badge 
                  variant="secondary" 
                  className="absolute top-3 right-3 bg-primary/90 text-primary-foreground border-0"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  {cinema.aiScore}% Match
                </Badge>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                      {cinema.name}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{cinema.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{cinema.distance}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Now Showing</h4>
                  <div className="flex flex-wrap gap-1">
                    {cinema.shows.slice(0, 2).map((show, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {show}
                      </Badge>
                    ))}
                    {cinema.shows.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{cinema.shows.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Next show:</span>
                  <span className="font-medium text-primary">{cinema.nextShow}</span>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-sm">Features</h4>
                  <div className="flex flex-wrap gap-1">
                    {cinema.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  className="w-full mt-4 bg-gradient-to-r from-orange to-accent hover:shadow-lg hover:shadow-orange/25" 
                  onClick={() => alert('Cinema booking coming soon! Connect Supabase for full functionality.')}
                >
                  Book Tickets
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Insights */}
        <div className="mt-16 text-center">
          <div className="glass rounded-xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">12ms</div>
                <div className="text-sm text-muted-foreground">Average AI Response Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">94%</div>
                <div className="text-sm text-muted-foreground">Recommendation Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Cinema-goers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinemaRecommendations;