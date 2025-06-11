
import ProductCard from "./ProductCard";

const trendingProducts = [
  {
    id: "1",
    title: "Éléphant Doré Ornamental",
    price: "€18,750",
    originalPrice: "€22,500",
    image: "/lovable-uploads/2f3e1085-5cb1-482d-9308-54f9ad5cc770.png",
    brand: "Collection Royale",
    category: "objets d'art",
    isSale: true
  },
  {
    id: "2",
    title: "Collier Œuf Fabergé Jade",
    price: "€45,200",
    image: "/lovable-uploads/91669e87-6bbf-47b2-8c58-ffb7ebb2eb39.png",
    brand: "Fabergé Heritage",
    category: "haute joaillerie",
    isNew: true
  },
  {
    id: "3",
    title: "Bague Diamants Émeraude Éternité",
    price: "€124,000",
    image: "/lovable-uploads/0433921a-bb41-436c-b04b-cffb33c3e8d8.png",
    brand: "Maison Cartier",
    category: "haute joaillerie",
  },
  {
    id: "4",
    title: "Pendentif Étoile Émeraude Impériale",
    price: "€67,800",
    originalPrice: "€75,000",
    image: "/lovable-uploads/306f0abe-020e-48bc-b209-454edd7bb09a.png",
    brand: "Joaillerie Royale",
    category: "haute joaillerie",
    isSale: true
  },
  {
    id: "5",
    title: "Tiare Diamants Belle Époque",
    price: "€89,500",
    image: "/lovable-uploads/b9264ecc-dc30-4f4b-82a3-d2b19728f1c2.png",
    brand: "Chaumet Paris",
    category: "haute joaillerie",
    isNew: true
  },
  {
    id: "6",
    title: "Montre Piaget Altiplano Skeleton",
    price: "€156,000",
    image: "/lovable-uploads/e982cb05-4aaf-41d3-bb46-c6b79781f83d.png",
    brand: "Piaget Manufacture",
    category: "horlogerie d'exception",
  },
  {
    id: "7",
    title: "Bracelet Émeraudes & Diamants",
    price: "€198,750",
    originalPrice: "€225,000",
    image: "/lovable-uploads/2719d621-567b-4987-9d14-6b6f6a4d5f9d.png",
    brand: "Van Cleef & Arpels",
    category: "haute joaillerie",
    isSale: true
  },
  {
    id: "8",
    title: "Coffre Louis Vuitton Malle Voyage",
    price: "€28,500",
    image: "/lovable-uploads/6bb89a4f-0aca-465e-a73a-9af83281019d.png",
    brand: "Louis Vuitton Malletier",
    category: "maroquinerie de luxe",
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
            Collections Impériales
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Découvrez nos pièces de collection les plus convoitées, sélectionnées par nos maîtres experts 
            pour leur authenticité et leur provenance royale exceptionnelle
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
            <span className="relative z-10 font-playfair tracking-wide">Voir Toute la Collection Royale</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
