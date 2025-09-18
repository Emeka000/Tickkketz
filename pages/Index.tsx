import Hero from "@/components/Hero";
import CinemaRecommendations from "@/components/CinemaRecommendations";
import Features from "@/components/Features";
import TicketCategories from "@/components/TicketCategories";
import { AIAssistants } from "@/components/AIAssistants";

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      <Hero />
      <CinemaRecommendations />
      <TicketCategories />
      <AIAssistants />
      <Features />
    </div>
  );
};

export default Index;
