import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AuthModal } from "@/components/AuthModal";
import { Menu, User, Calendar, Ticket } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary to-orange p-2 rounded-lg">
              <Ticket className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent">
              TicketEase
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="hover:text-orange" onClick={() => navigate('/events')}>
              Events
            </Button>
            <Button variant="ghost" className="hover:text-orange" onClick={() => navigate('/cinema')}>
              Cinema
            </Button>
            <Button variant="ghost" className="hover:text-orange" onClick={() => navigate('/about')}>
              About
            </Button>
          </div>

          {/* Auth & Theme Toggle */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <AuthModal>
              <Button variant="outline" className="hidden md:flex hover:bg-orange/10 hover:border-orange/40">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </AuthModal>
            <Button 
              className="hidden md:flex bg-gradient-to-r from-orange to-accent hover:shadow-lg hover:shadow-orange/25"
              onClick={() => window.location.href = '/dashboard'}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Create Event
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border/50">
            <Button variant="ghost" className="w-full justify-start hover:text-orange" onClick={() => navigate('/events')}>
              Events
            </Button>
            <Button variant="ghost" className="w-full justify-start hover:text-orange" onClick={() => navigate('/cinema')}>
              Cinema
            </Button>
            <Button variant="ghost" className="w-full justify-start hover:text-orange" onClick={() => navigate('/about')}>
              About
            </Button>
            <div className="pt-2 space-y-2">
              <AuthModal>
                <Button variant="outline" className="w-full hover:bg-orange/10">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </AuthModal>
              <Button 
                className="w-full bg-gradient-to-r from-orange to-accent"
                onClick={() => window.location.href = '/dashboard'}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Create Event
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}