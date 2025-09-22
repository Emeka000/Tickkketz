import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  QrCode,
  Shield,
  BarChart3,
  Users,
  Calendar,
  Star,
  CheckCircle,
  Zap,
  Clock,
  Globe,
  TrendingUp
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroLanding from "@/assets/hero-landing.jpg";
import cinemaExperience from "@/assets/cinema-experience.jpg";
import eventsFestival from "@/assets/events-festival-new.jpg";
import qrTicketPhone from "@/assets/qr-ticket-phone.jpg";
import analyticsDashboard from "@/assets/analytics-dashboard.jpg";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: QrCode,
      title: "QR Code Magic",
      description: "Lightning-fast check-ins with secure QR codes. No more long queues!",
      image: qrTicketPhone,
      stats: "90% faster entry"
    },
    {
      icon: Sparkles,
      title: "AI Recommendations",
      description: "Smart suggestions based on your preferences and location in Nigeria.",
      image: eventsFestival,
      stats: "95% accuracy"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track your event performance with detailed insights and reports.",
      image: analyticsDashboard,
      stats: "Live updates"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Bank-grade security for all transactions. Your money is safe with us.",
      image: cinemaExperience,
      stats: "99.9% uptime"
    }
  ];

  const benefits = [
    { icon: Users, title: "50K+ Active Users", description: "Join Nigeria's fastest-growing ticketing community" },
    { icon: Calendar, title: "1000+ Events Monthly", description: "From concerts to cinema, we've got it all" },
    { icon: Globe, title: "All 36 States", description: "Nationwide coverage across Nigeria" },
    { icon: TrendingUp, title: "3.5% Commission", description: "Lowest rates in the industry" }
  ];

  const testimonials = [
    {
      name: "Adebayo Johnson",
      role: "Event Organizer, Lagos",
      comment: "Ticket Ease transformed my event business. The analytics are incredible!",
      rating: 5
    },
    {
      name: "Fatima Al-Hassan",
      role: "Cinema Enthusiast, Abuja",
      comment: "I love how easy it is to find and book cinema tickets. The QR codes work perfectly!",
      rating: 5
    },
    {
      name: "Chinedu Okafor",
      role: "Music Festival Organizer",
      comment: "The real-time analytics helped me understand my audience better. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroLanding})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-orange/70 to-accent/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-primary-glow animate-pulse" />
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
              AI-Powered Platform
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            <span className="block">The Future of</span>
            <span className="block bg-gradient-to-r from-white via-primary-glow to-accent-glow bg-clip-text text-transparent">
              Event Ticketing
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl mt-4">in Nigeria</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join <span className="text-primary-glow font-bold">50,000+ users</span> who trust Ticket Ease 
            for seamless cinema bookings, event tickets, and QR code check-ins across all 36 states.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button 
              size="lg" 
              className="text-xl px-12 py-6 bg-gradient-to-r from-white to-primary-glow text-primary hover:scale-105 transition-transform"
              onClick={() => navigate("/onboarding")}
            >
              Start Your Journey
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-xl px-12 py-6 text-white border-2 border-white/30 hover:bg-white/10"
              onClick={() => navigate("/events")}
            >
              <MapPin className="w-6 h-6 mr-2" />
              Explore Events
            </Button>
          </div>
          
          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <benefit.icon className="w-8 h-8 mx-auto mb-3 text-primary-glow" />
                  <div className="text-2xl font-bold text-white mb-1">{benefit.title}</div>
                  <div className="text-white/80 text-sm">{benefit.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-orange/20 rounded-full floating" />
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-accent/20 rounded-full floating" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-primary/10 rounded-full floating" style={{ animationDelay: "2s" }} />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">
              <Zap className="w-4 h-4 mr-2" />
              Powerful Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need for
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Perfect Events
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From AI-powered recommendations to seamless QR check-ins, 
              we've built the most comprehensive ticketing platform in Nigeria.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="relative">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {feature.stats}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Loved by <span className="text-primary">Thousands</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our users say about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-lg italic">
                    "{testimonial.comment}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform
            <span className="block">Your Events?</span>
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join Nigeria's leading ticketing platform and start creating unforgettable experiences today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-xl px-12 py-6 bg-white text-primary hover:bg-white/90"
              onClick={() => navigate("/onboarding")}
            >
              Get Started Free
              <CheckCircle className="w-6 h-6 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-xl px-12 py-6 border-2 border-white text-white hover:bg-white/10"
              onClick={() => navigate("/dashboard")}
            >
              <Clock className="w-6 h-6 mr-2" />
              Quick Demo
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-lg opacity-75">
              🎉 <strong>Limited Time:</strong> Get your first 100 tickets commission-free!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;