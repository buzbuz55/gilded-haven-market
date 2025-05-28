
import { Button } from "@/components/ui/button";

const stats = [
  { number: "500K+", label: "Items Sold" },
  { number: "$2.5B", label: "Total Sales" },
  { number: "98%", label: "Seller Satisfaction" },
  { number: "24/7", label: "Expert Support" }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Why Sellers Choose LUXE
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just a marketplace - we're your luxury selling partner
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <p className="text-gray-400 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Submit Item</h3>
            <p className="text-gray-400">Upload photos and details of your luxury item</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Expert Review</h3>
            <p className="text-gray-400">Our specialists authenticate and price your item</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Global Listing</h3>
            <p className="text-gray-400">Your item reaches our worldwide buyer network</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Get Paid</h3>
            <p className="text-gray-400">Secure payment within 48 hours of sale</p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-medium"
          >
            START YOUR SELLING JOURNEY
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
