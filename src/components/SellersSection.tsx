
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { TrendingUp, Shield, DollarSign, Clock, Users, Star } from "lucide-react";

const sellingPoints = [
  {
    icon: DollarSign,
    title: "Exceptional Valuations",
    description: "Receive up to 90% of market value through our exclusive Maison Royale consignment program",
    highlight: "Up to 90%"
  },
  {
    icon: Shield,
    title: "Château-Level Security",
    description: "Complete provenance documentation and white-glove insurance for every precious artifact",
    highlight: "Total Security"
  },
  {
    icon: Clock,
    title: "Swift Nobility",
    description: "From consignment to payment within 48 hours via our expedited royal courier service",
    highlight: "48h Royale"
  },
  {
    icon: Users,
    title: "Global Aristocracy",
    description: "Exclusive access to 500K+ verified collectors and connoisseurs worldwide",
    highlight: "500K+ Nobles"
  },
  {
    icon: TrendingUp,
    title: "Maître d'Expertise",
    description: "Certified appraisers and market specialists ensure your treasures achieve their true worth",
    highlight: "Expert Maîtres"
  },
  {
    icon: Star,
    title: "Imperial Service",
    description: "Personal concierge accompanies you through every step of your royal consignment journey",
    highlight: "Concierge VIP"
  }
];

const SellersSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Treasures into Fortune
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join the most prestigious luxury consignment maison, where extraordinary pieces meet their destined collectors. 
            From authentication royale to swift payment, we orchestrate every detail with imperial precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium"
              onClick={() => navigate("/consignment")}
            >
              CONSIGN WITH LUXE
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-400 hover:border-gray-600 px-8 py-4 text-lg font-medium"
              onClick={() => navigate("/consignment")}
            >
              FREE ESTIMATION
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sellingPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                  <point.icon className="w-6 h-6 text-white" />
                </div>
                <div className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  {point.highlight}
                </div>
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-3">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
              Royal Success Stories
            </h3>
            <p className="text-gray-600 text-lg">Real consigners, extraordinary results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">€47,500</div>
              <p className="text-gray-600 mb-4">Hermès Birkin sold in 24 hours</p>
              <div className="flex justify-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">€23,800</div>
              <p className="text-gray-600 mb-4">Vintage Rolex collection</p>
              <div className="flex justify-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">€15,200</div>
              <p className="text-gray-600 mb-4">Contemporary artwork</p>
              <div className="flex justify-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellersSection;
