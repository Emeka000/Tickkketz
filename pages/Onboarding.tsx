import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Users, 
  Calendar,
  Film,
  QrCode,
  Shield,
  Trophy,
  Zap
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userType, setUserType] = useState<"attendee" | "organizer" | null>(null);
  const navigate = useNavigate();

  const features = [
    { icon: QrCode, title: "QR Code Check-in", desc: "Lightning-fast event entry" },
    { icon: Shield, title: "Secure Payments", desc: "Bank-grade security" },
    { icon: Sparkles, title: "AI Recommendations", desc: "Personalized suggestions" },
    { icon: Trophy, title: "Loyalty Rewards", desc: "Earn points & discounts" }
  ];

  const steps = [
    {
      title: "Choose Your Experience",
      subtitle: "How will you use Ticket Ease?",
      content: (
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card 
            className={`relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${
              userType === "attendee" ? "ring-2 ring-primary bg-gradient-to-br from-card to-primary/5" : ""
            }`}
            onClick={() => setUserType("attendee")}
          >
            <div className="absolute top-4 right-4">
              {userType === "attendee" && <CheckCircle className="w-6 h-6 text-primary" />}
            </div>
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">Event Attendee</CardTitle>
              <CardDescription>Find and book amazing events & cinema tickets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm">Discover local events</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm">AI-powered recommendations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm">QR code tickets</span>
              </div>
            </CardContent>
          </Card>

          <Card 
            className={`relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${
              userType === "organizer" ? "ring-2 ring-primary bg-gradient-to-br from-card to-primary/5" : ""
            }`}
            onClick={() => setUserType("organizer")}
          >
            <div className="absolute top-4 right-4">
              {userType === "organizer" && <CheckCircle className="w-6 h-6 text-primary" />}
            </div>
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-orange flex items-center justify-center">
                <Calendar className="w-8 h-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-xl">Event Organizer</CardTitle>
              <CardDescription>Create and manage events with powerful tools</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm">Create unlimited events</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm">Real-time analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm">Only 3.5% commission</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: "Create Your Account",
      subtitle: "Join thousands of satisfied users",
      content: (
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <CardTitle>Welcome to Ticket Ease!</CardTitle>
            <CardDescription>Fill in your details to get started</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="Enter your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+234 000 000 0000" />
            </div>
            {userType === "organizer" && (
              <div className="space-y-2">
                <Label htmlFor="organization">Organization (Optional)</Label>
                <Input id="organization" placeholder="Your company/organization" />
              </div>
            )}
          </CardContent>
        </Card>
      )
    },
    {
      title: "You're All Set!",
      subtitle: "Welcome to the future of event ticketing",
      content: (
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-success to-primary flex items-center justify-center">
            <Trophy className="w-10 h-10 text-success-foreground" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Account Created Successfully!</h3>
          <p className="text-muted-foreground mb-8">
            You're now part of Nigeria's most innovative ticketing platform. 
            {userType === "attendee" 
              ? " Start discovering amazing events and cinema shows near you!"
              : " Begin creating and managing your events with our powerful tools!"
            }
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-4 text-center">
                <feature.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                <p className="text-xs text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>

          <Badge variant="secondary" className="mb-4">
            <Zap className="w-3 h-3 mr-1" />
            You've earned 100 bonus points!
          </Badge>
        </div>
      )
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate(userType === "organizer" ? "/dashboard" : "/");
    }
  };

  const canProceed = currentStep === 0 ? userType !== null : true;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            {steps.map((_, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                    index <= currentStep 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {index < currentStep ? <CheckCircle className="w-5 h-5" /> : index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div 
                    className={`w-16 h-1 mx-2 transition-all duration-300 ${
                      index < currentStep ? "bg-primary" : "bg-muted"
                    }`} 
                  />
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Step {currentStep + 1} of {steps.length}
          </p>
        </div>

        {/* Content */}
        <Card className="glass border-0 shadow-2xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {steps[currentStep].title}
            </CardTitle>
            <CardDescription className="text-lg mt-2">
              {steps[currentStep].subtitle}
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-8">
            <div className="animate-fade-in">
              {steps[currentStep].content}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button 
            variant="outline" 
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="min-w-[100px]"
          >
            Back
          </Button>
          
          <Button 
            onClick={nextStep}
            disabled={!canProceed}
            className="min-w-[100px] bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-primary"
          >
            {currentStep === steps.length - 1 ? "Get Started" : "Continue"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Skip option for first step */}
        {currentStep === 0 && (
          <p className="text-center mt-4">
            <button 
              onClick={() => navigate("/")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Skip for now and explore
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default OnboardingPage;