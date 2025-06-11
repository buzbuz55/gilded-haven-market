
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Background with Luxury Gradient */}
          <div className="aspect-[16/9] md:aspect-[21/9] rounded-[2rem] bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden shadow-2xl">
            {/* Elegant Pattern Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-blue-500/10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]"></div>
            
            {/* Luxury Accent Lines */}
            <div className="absolute top-8 left-8 w-16 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
            <div className="absolute top-8 right-8 w-16 h-px bg-gradient-to-l from-amber-400 to-transparent"></div>
            <div className="absolute bottom-8 left-8 w-16 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
            <div className="absolute bottom-8 right-8 w-16 h-px bg-gradient-to-l from-amber-400 to-transparent"></div>
            
            {/* Hero Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-6 max-w-4xl">
                <div className="mb-6">
                  <div className="inline-block p-3 bg-white/10 backdrop-blur-md rounded-full mb-4">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  </div>
                </div>
                
                <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-4 tracking-tight leading-none">
                  Consignez Vos
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                    Trésors Royaux
                  </span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-light mb-8 text-amber-100 tracking-wide">
                  À La Maison Royale de Luxe
                </h2>
                
                <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto opacity-90 font-light leading-relaxed">
                  Rejoignez la maison de consignation de luxe la plus prestigieuse. 
                  Où les pièces extraordinaires rencontrent leurs collectionneurs destinés.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-semibold px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    CONSIGNER AVEC LUXE
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg" 
                    className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md font-semibold px-10 py-4 text-lg rounded-full transition-all duration-300 hover:border-amber-400"
                  >
                    DÉCOUVRIR LES RARETÉS
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Elegant Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 shadow-lg"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors cursor-pointer"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
