import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Lock, User, AlertCircle } from "lucide-react";

interface AuthModalProps {
  children: React.ReactNode;
}

export function AuthModal({ children }: AuthModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAuth = (type: 'signin' | 'signup') => {
    // Placeholder - actual auth requires Supabase
    console.log(`${type} attempted - Supabase integration required`);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent">
            Welcome to TicketEase
          </DialogTitle>
        </DialogHeader>

        <div className="bg-orange/10 border border-orange/20 rounded-lg p-3 mb-4">
          <div className="flex items-center space-x-2 text-orange">
            <AlertCircle className="h-4 w-4" />
            <span className="text-sm">Connect Supabase to enable authentication</span>
          </div>
        </div>

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="signin" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="signin-email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="signin-email" type="email" placeholder="Enter your email" className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="signin-password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="signin-password" type="password" placeholder="Enter your password" className="pl-10" />
              </div>
            </div>
            <Button 
              onClick={() => handleAuth('signin')} 
              className="w-full bg-gradient-to-r from-primary to-orange"
            >
              Sign In
            </Button>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="signup-name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="signup-name" placeholder="Enter your full name" className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="signup-email" type="email" placeholder="Enter your email" className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="signup-password" type="password" placeholder="Create a password" className="pl-10" />
              </div>
            </div>
            <Button 
              onClick={() => handleAuth('signup')} 
              className="w-full bg-gradient-to-r from-orange to-accent"
            >
              Create Account
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}