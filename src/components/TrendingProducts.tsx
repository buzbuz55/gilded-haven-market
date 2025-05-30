
import ProductCard from "./ProductCard";

const trendingProducts = [
  {
    id: "1",
    title: "Montre Cartier Tank Vintage",
    price: "€8,750",
    originalPrice: "€12,500",
    image: "/placeholder.svg",
    brand: "Cartier",
    category: "watches",
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
    category: "fashion"
  },
  {
    id: "4",
    title: "Fauteuil Mid-Century Moderne",
    price: "€3,450",
    originalPrice: "€4,200",
    image: "/placeholder.svg",
    brand: "Icônes Design",
    category: "furniture",
    isSale: true
  }
];

const TrendingProducts = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">En Vogue Maintenant</h2>
          <p className="text-gray-600 text-lg">Découvrez les pièces les plus convoitées de notre collection royale</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Voir Toutes les Tendances
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
