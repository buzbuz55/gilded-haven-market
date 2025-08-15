import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Gavel, Heart } from "lucide-react";
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";

const auctionItems = [
  {
    id: "1",
    title: "Imperial Napoleon III Tiara",
    description: "Tiara adorned with 847 diamonds, Royal Family provenance",
    currentBid: "€1,250,000",
    nextBid: "€1,300,000",
    bidders: 47,
    timeLeft: "2h 34m",
    image: "/lovable-uploads/9a8751b4-4830-4888-bda4-c0cf33464e90.png",
    status: "LIVE",
    category: "Royal Jewelry"
  },
  {
    id: "2", 
    title: "Cartier Art Deco Bracelet 1925",
    description: "Unique piece from Duchess of Windsor private collection",
    currentBid: "€450,000",
    nextBid: "€475,000",
    bidders: 23,
    timeLeft: "5h 12m",
    image: "/lovable-uploads/6bb89a4f-0aca-465e-a73a-9af83281019d.png",
    status: "ACTIVE",
    category: "Vintage Jewelry"
  },
  {
    id: "3",
    title: "Richard Mille Unique Edition Watch",
    description: "Exclusive prototype, one of a kind in the world",
    currentBid: "€890,000",
    nextBid: "€920,000", 
    bidders: 31,
    timeLeft: "1d 8h",
    image: "/lovable-uploads/77038f8b-5074-4572-b223-6a03541a7e00.png",
    status: "PREVIEW",
    category: "Luxury Watches"
  }
];

const Auctions = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("ALL");

  const filteredItems = auctionItems.filter(item => 
    filter === "ALL" || item.status === filter
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Luxury Auctions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participate in the world's most prestigious auctions. Unique pieces from the greatest private collections.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            {["ALL", "LIVE", "ACTIVE", "PREVIEW"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  filter === status
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Auction Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <Badge 
                  className={`absolute top-4 left-4 ${
                    item.status === "LIVE" ? "bg-red-500" : 
                    item.status === "ACTIVE" ? "bg-green-500" : "bg-blue-500"
                  }`}
                >
                  {item.status}
                </Badge>
                <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              
              <CardHeader>
                <CardTitle className="font-playfair text-lg">{item.title}</CardTitle>
                <p className="text-sm text-gray-600">{item.description}</p>
                <Badge variant="outline" className="w-fit">{item.category}</Badge>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500">Current Bid</p>
                    <p className="font-bold text-xl text-green-600">{item.currentBid}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Next Bid</p>
                    <p className="font-semibold">{item.nextBid}</p>
                  </div>
                </div>
                
                <div className="flex justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {item.bidders} bidders
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.timeLeft}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold"
                  onClick={() => navigate(`/auction/${item.id}`)}
                >
                  <Gavel className="w-4 h-4 mr-2" />
                  BID NOW
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 text-white">
          <h2 className="font-playfair text-3xl font-bold mb-4">
            Join the Elite of Collectors
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Access private sales and the most exclusive auctions reserved for our prestigious clientele.
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black"
            onClick={() => navigate("/signup")}
          >
            JOIN EXCLUSIVE AUCTIONS
          </Button>
        </div>
      </main>

      <MobileNavigation />
    </div>
  );
};

export default Auctions;