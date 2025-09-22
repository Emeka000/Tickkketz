import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Star } from "lucide-react";
import blackPantherPoster from "@/assets/black-panther-poster.jpg";
import kingOfThievesPoster from "@/assets/king-of-thieves-poster.jpg";
import avatarPoster from "@/assets/avatar-way-of-water-poster.jpg";

const Cinema = () => {
  const movies = [
    {
      id: 1,
      title: "The Black Panther: Wakanda Forever",
      description: "The epic continuation of the Wakanda saga",
      duration: "2h 41m",
      rating: 8.2,
      genre: "Action",
      showTimes: ["2:00 PM", "5:30 PM", "8:45 PM"],
      cinema: "Silverbird Cinemas Victoria Island",
      price: "₦3,500",
      poster: blackPantherPoster
    },
    {
      id: 2,
      title: "King of Thieves",
      description: "A thrilling Nollywood heist movie",
      duration: "1h 58m",
      rating: 7.8,
      genre: "Thriller",
      showTimes: ["1:15 PM", "4:00 PM", "7:20 PM"],
      cinema: "FilmHouse Lekki",
      price: "₦2,800",
      poster: kingOfThievesPoster
    },
    {
      id: 3,
      title: "Avatar: The Way of Water",
      description: "Return to the world of Pandora",
      duration: "3h 12m",
      rating: 9.1,
      genre: "Sci-Fi",
      showTimes: ["12:30 PM", "4:15 PM", "8:00 PM"],
      cinema: "Genesis Deluxe Cinemas",
      price: "₦4,200",
      poster: avatarPoster
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-8 bg-gradient-to-br from-background via-background to-orange/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent mb-4">
            Cinema Tickets
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book your favorite movies at the best cinemas across Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <Card key={movie.id} className="group hover:shadow-lg hover:shadow-orange/10 transition-all duration-300 border-border/50 hover:border-orange/30 overflow-hidden">
              {/* Movie Poster */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={movie.poster} 
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-orange/90 text-white border-0">
                    {movie.genre}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-md px-2 py-1">
                  <Star className="h-4 w-4 fill-orange text-orange" />
                  <span className="text-sm font-medium text-white">{movie.rating}</span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="group-hover:text-orange transition-colors">
                  {movie.title}
                </CardTitle>
                <CardDescription>{movie.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-orange" />
                  {movie.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-orange" />
                  {movie.cinema}
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Show Times:</p>
                  <div className="flex gap-2 flex-wrap">
                    {movie.showTimes.map((time, index) => (
                      <Badge key={index} variant="outline" className="border-orange/30 text-orange">
                        {time}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange">{movie.price}</span>
                  <Button className="bg-gradient-to-r from-orange to-accent hover:shadow-lg hover:shadow-orange/25">
                    Book Seats
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cinema;