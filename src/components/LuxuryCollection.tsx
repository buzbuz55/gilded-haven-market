
import ProductCard from "./ProductCard";

const luxuryCollectionItems = [
  {
    id: "9",
    title: "Collier Impérial Émeraude & Diamants",
    price: "€450,000",
    image: "/lovable-uploads/47af9bc4-5eea-4731-9e23-75531c9e81e4.png",
    brand: "Bulgari High Jewelry",
    category: "haute joaillerie impériale",
    isNew: true
  },
  {
    id: "10",
    title: "Bracelet Manchette Or Matelassé",
    price: "€34,500",
    originalPrice: "€38,000",
    image: "/lovable-uploads/3f8770ed-979c-46f0-8f66-0d89da0b0a51.png",
    brand: "Chanel Fine Jewelry",
    category: "joaillerie contemporaine",
    isSale: true
  },
  {
    id: "16",
    title: "Montre Richard Mille RM 011 Édition Limitée",
    price: "€320,000",
    image: "/lovable-uploads/9a9595a3-3ce6-4d96-b8cf-4550a653c825.png",
    brand: "Richard Mille Manufacture",
    category: "horlogerie d'exception",
    isNew: true
  },
  {
    id: "17",
    title: "Sac Hermès Birkin So Black Crocodile",
    price: "€180,000",
    image: "/lovable-uploads/75ec24fb-e9e2-43a3-88a8-f0a300352421.png",
    brand: "Hermès Collection Privée",
    category: "maroquinerie exceptionnelle",
  }
];

const LuxuryCollection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-4"></div>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Pièces d'Exception
          </h2>
          <p className="text-amber-100 text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Les trésors les plus rares de nos ateliers partenaires, 
            réservés aux collectionneurs les plus exigeants de la noblesse mondiale
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {luxuryCollectionItems.map((item) => (
            <div key={item.id} className="group relative">
              <ProductCard {...item} />
              {/* Luxury overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="group bg-gradient-to-r from-amber-500 to-orange-500 text-black px-12 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
            <span className="relative z-10 font-playfair tracking-wide">Découvrir les Pièces Uniques</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LuxuryCollection;
