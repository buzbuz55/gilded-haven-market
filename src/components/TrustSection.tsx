
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const trustFeatures = [
  "Authenticity Guarantee",
  "Money-Back Guarantee", 
  "Free Cancellation within 24 Hours",
  "Vetted Professional Sellers",
  "Price-Match Guarantee",
  "Trusted Global Delivery"
];

const TrustSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          The LUXE Promise
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          We're committed to your satisfaction and peace of mind with every purchase
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {trustFeatures.map((feature, index) => (
            <div key={index} className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>

        <Button 
          variant="outline" 
          size="lg"
          className="border-gray-300 hover:border-gray-400 font-medium px-8"
          onClick={() => navigate("/about")}
        >
          LEARN MORE
        </Button>
      </div>
    </section>
  );
};

export default TrustSection;
