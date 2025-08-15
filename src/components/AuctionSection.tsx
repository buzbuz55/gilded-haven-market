
import { Clock, Gavel, Crown, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const auctionItems = [
  {
    id: "auction-1",
    title: "Tiare Impériale Napoléon III",
    description: "Tiare ornée de 847 diamants, provenance Famille Royale",
    currentBid: "€1,250,000",
    estimatedValue: "€1,800,000 - €2,200,000",
    image: "/lovable-uploads/b9264ecc-dc30-4f4b-82a3-d2b19728f1c2.png",
    timeRemaining: "2d 14h 32m",
    bidders: 23,
    category: "Joyaux de la Couronne"
  },
  {
    id: "auction-2", 
    title: "Bracelet Art Déco Cartier 1925",
    description: "Pièce unique de la collection privée de la Duchesse de Windsor",
    currentBid: "€890,000",
    estimatedValue: "€1,200,000 - €1,500,000",
    image: "/lovable-uploads/e5021bfe-7f3a-4390-8d80-778b82752be3.png",
    timeRemaining: "5d 8h 45m",
    bidders: 31,
    category: "Joaillerie d'Exception"
  },
  {
    id: "auction-3",
    title: "Montre Richard Mille Édition Unique",
    description: "Prototype exclusif, une seule pièce au monde",
    currentBid: "€450,000",
    estimatedValue: "€600,000 - €800,000", 
    image: "/lovable-uploads/9a9595a3-3ce6-4d96-b8cf-4550a653c825.png",
    timeRemaining: "1d 6h 12m",
    bidders: 18,
    category: "Horlogerie Unique"
  }
];

const AuctionSection = () => {
  const [timeLeft, setTimeLeft] = useState<{[key: string]: string}>({});

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft: {[key: string]: string} = {};
      auctionItems.forEach(item => {
        newTimeLeft[item.id] = item.timeRemaining;
      });
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Luxury Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(255,191,0,0.05)_50%,_transparent_100%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400"></div>
              <Gavel className="w-8 h-8 text-amber-400" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
          </div>
          
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Luxury Auctions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 text-4xl md:text-5xl">
              Exclusives
            </span>
          </h2>
          
          <p className="text-amber-100 text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Participate in the world's most prestigious auctions. 
            Unique pieces from the greatest private collections.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {auctionItems.map((item) => (
            <div 
              key={item.id}
              className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-amber-400/20 hover:border-amber-400/40 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Live Auction Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 bg-red-600/90 backdrop-blur-md px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white text-xs font-medium">LIVE AUCTION</span>
                  </div>
                </div>

                {/* Time Remaining */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md rounded-full px-4 py-2">
                  <div className="flex items-center space-x-2 text-amber-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium font-mono">{item.timeRemaining}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <p className="text-amber-400 text-xs uppercase tracking-[0.2em] font-medium mb-2">
                    {item.category}
                  </p>
                  <h3 className="font-playfair font-bold text-white text-xl mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-xs mb-1">Current Bid</p>
                      <p className="text-white font-playfair text-2xl font-bold">{item.currentBid}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-xs mb-1">Bidders</p>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 font-semibold">{item.bidders}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-400 text-xs mb-1">Estimation</p>
                    <p className="text-amber-200 text-sm font-medium">{item.estimatedValue}</p>
                  </div>

                  <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 font-playfair tracking-wide">
                    BID NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-xl rounded-2xl p-8 border border-amber-400/20">
            <Crown className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h3 className="font-playfair text-2xl font-bold text-white mb-4">
              Join the Elite of Collectors
            </h3>
            <p className="text-amber-100 mb-6 max-w-md mx-auto">
              Access private sales and the most exclusive auctions reserved for our prestigious clientele.
            </p>
            <button className="bg-gradient-to-r from-gray-800 to-black text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 border border-amber-400/30 hover:border-amber-400">
              <span className="font-playfair tracking-wide">DEVENIR MEMBRE VIP</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuctionSection;
