import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChatModal } from "./ChatModal";
import { MessageCircle, Calendar, Headphones, Bot, Zap, Clock } from "lucide-react";

const assistants = [
  {
    id: 'customer_support',
    title: '24/7 Customer Support',
    description: 'Get instant help with bookings, refunds, and platform queries',
    icon: Headphones,
    features: [
      'Booking assistance',
      'Refund & cancellation help',
      'Account support',
      'Platform guidance'
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'event_planning',
    title: 'Event Planning Assistant',
    description: 'AI-powered suggestions for creating successful events',
    icon: Calendar,
    features: [
      'Venue recommendations',
      'Optimal timing suggestions',
      'Pricing strategies',
      'Marketing tips'
    ],
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'booking_assistant',
    title: 'Smart Booking Assistant',
    description: 'Conversational booking experience with personalized recommendations',
    icon: MessageCircle,
    features: [
      'Natural conversation',
      'Personalized suggestions',
      'Step-by-step guidance',
      'Payment assistance'
    ],
    color: 'from-purple-500 to-purple-600'
  }
];

export function AIAssistants() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Bot className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent">
              AI-Powered Assistants
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get instant help from our specialized AI assistants available 24/7 to make your ticketing experience seamless
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {assistants.map((assistant) => {
            const IconComponent = assistant.icon;
            return (
              <Card key={assistant.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="text-center">
                  <div className={`mx-auto mb-4 h-16 w-16 rounded-2xl bg-gradient-to-r ${assistant.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{assistant.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {assistant.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {assistant.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>24/7 Available</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Zap className="h-3 w-3" />
                      <span>Instant Response</span>
                    </div>
                  </div>

                  <ChatModal 
                    assistantType={assistant.id as 'customer_support' | 'event_planning' | 'booking_assistant'}
                    title={assistant.title}
                  >
                    <Button className={`w-full bg-gradient-to-r ${assistant.color} hover:opacity-90 transition-opacity`}>
                      Start Chat
                    </Button>
                  </ChatModal>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-muted/50 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Bot className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Powered by Advanced AI</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Our AI assistants are trained specifically for the Nigerian ticketing market, 
              understanding local preferences, venues, and cultural events to provide the most relevant help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}