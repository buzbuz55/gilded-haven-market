
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, DollarSign, Clock, Users, Star } from "lucide-react";

const sellingPoints = [
  {
    icon: DollarSign,
    title: "Maximum Returns",
    description: "Get up to 90% of your item's market value with our premium seller program",
    highlight: "Up to 90% payout"
  },
  {
    icon: Shield,
    title: "Secure & Protected",
    description: "Full insurance coverage and authentication guarantee for all transactions",
    highlight: "100% Protected"
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "From listing to payment in as little as 48 hours with our expedited service",
    highlight: "48hr Processing"
  },
  {
    icon: Users,
    title: "Global Reach",
    description: "Access to over 500K+ verified luxury buyers worldwide",
    highlight: "500K+ Buyers"
  },
  {
    icon: TrendingUp,
    title: "Market Expertise",
    description: "Professional pricing guidance and market insights to maximize your sale",
    highlight: "Expert Pricing"
  },
  {
    icon: Star,
    title: "White Glove Service",
    description: "Personal concierge support throughout your entire selling journey",
    highlight: "VIP Treatment"
  }
];

const SellersSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Turn Your Luxury into Profit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join thousands of sellers who trust LUXE to sell their luxury items. 
            From authentication to payment, we handle everything so you can focus on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium"
            >
              START SELLING TODAY
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-400 hover:border-gray-600 px-8 py-4 text-lg font-medium"
            >
              GET FREE VALUATION
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
              Success Stories
            </h3>
            <p className="text-gray-600 text-lg">Real sellers, real results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$47,500</div>
              <p className="text-gray-600 mb-4">Sold Hermès Birkin in 24 hours</p>
              <div className="flex justify-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$23,800</div>
              <p className="text-gray-600 mb-4">Vintage Rolex collection</p>
              <div className="flex justify-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$15,200</div>
              <p className="text-gray-600 mb-4">Contemporary art piece</p>
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
