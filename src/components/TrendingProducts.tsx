
import ProductCard from "./ProductCard";

const trendingProducts = [
  {
    id: "1",
    title: "Montre Cartier Tank Vintage",
    price: "€8,750",
    originalPrice: "€12,500",
    image: "/placeholder.svg",
    brand: "Cartier",
    category: "horlogerie",
    isSale: true
  },
  {
    id: "2",
    title: "Peinture Abstraite Contemporaine",
    price: "€15,200",
    image: "/placeholder.svg",
    brand: "Collection Galerie",
    category: "art",
    isNew: true
  },
  {
    id: "3",
    title: "Sac Hermès Birkin 35cm",
    price: "€24,000",
    image: "/placeholder.svg",
    brand: "Hermès",
    category: "maroquinerie",
  },
  {
    id: "4",
    title: "Fauteuil Mid-Century Moderne",
    price: "€3,450",
    originalPrice: "€4,200",
    image: "/placeholder.svg",
    brand: "Icônes Design",
    category: "mobilier",
    isSale: true
  }
];

const TrendingProducts = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50/50 via-white to-amber-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-4"></div>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Tendances Royales
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Découvrez les pièces les plus convoitées de notre collection aristocratique, 
            sélectionnées par nos maîtres experts pour leur rareté exceptionnelle
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trendingProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
        
        <div className="text-center">
          <button className="group bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white px-12 py-4 rounded-full font-medium hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
            <span className="relative z-10 font-playfair tracking-wide">Voir Toutes les Tendances Royales</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
