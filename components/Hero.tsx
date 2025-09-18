import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { AuthModal } from "@/components/AuthModal";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-orange/70 to-accent/80" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-primary-glow animate-pulse" />
          <span className="text-primary-glow font-medium">AI-Powered Recommendations</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">Welcome to</span>
          <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
            Ticket Ease
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          More than just an event ticketing platform - your all-in-one solution for 
          <span className="text-primary-glow font-semibold"> cinema and event tickets</span> 
          {" "}with AI recommendations tailored for Nigeria.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <AuthModal>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-orange to-accent">
              Find Cinema Near You
              <MapPin className="w-5 h-5" />
            </Button>
          </AuthModal>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 hover:bg-orange/10 hover:border-orange/40"
            onClick={() => window.location.href = '/dashboard'}
          >
            Explore Events
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="glass rounded-xl p-4">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">3.5%</div>
            <div className="text-white/80 text-sm">Commission Rate</div>
          </div>
          <div className="glass rounded-xl p-4">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">All-in-One</div>
            <div className="text-white/80 text-sm">Platform</div>
          </div>
          <div className="glass rounded-xl p-4">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">Real-time</div>
            <div className="text-white/80 text-sm">Analytics</div>
          </div>
          <div className="glass rounded-xl p-4">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">QR Code</div>
            <div className="text-white/80 text-sm">Integration</div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange/20 rounded-full floating" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/20 rounded-full floating" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-orange/10 rounded-full floating" style={{ animationDelay: "2s" }} />
    </section>
  );
};

export default Hero;