
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Background Image Placeholder */}
          <div className="aspect-[16/9] md:aspect-[21/9] rounded-3xl bg-gradient-to-r from-amber-50 via-gray-100 to-blue-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Hero Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                  Consign Your Treasures
                </h1>
                <h2 className="text-3xl md:text-5xl font-light mb-6">
                  À La Maison Royale
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Join the most prestigious luxury consignment house. Where extraordinary pieces find their destined collectors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-black hover:bg-gray-100 font-medium px-8 py-3 text-lg"
                  >
                    CONSIGN WITH LUXE
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg" 
                    className="border-white text-white hover:bg-white/10 font-medium px-8 py-3 text-lg"
                  >
                    DISCOVER RARITIES
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
