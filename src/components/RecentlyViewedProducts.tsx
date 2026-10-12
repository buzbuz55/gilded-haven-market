
import ProductCard from "./ProductCard";

const recentlyViewedProducts = [
  {
    id: "5",
    title: "Rolex Submariner Steel",
    price: "$13,500",
    image: "/lovable-uploads/47af9bc4-5eea-4731-9e23-75531c9e81e4.png",
    brand: "Rolex",
    category: "watches"
  },
  {
    id: "6",
    title: "Vintage Bvlgari Serpenti Bracelet",
    price: "$7,200",
    image: "/lovable-uploads/0433921a-bb41-436c-b04b-cffb33c3e8d8.png",
    brand: "Bvlgari",
    category: "jewelry"
  },
  {
    id: "7",
    title: "Cartier Love Bracelet Gold",
    price: "$8,100",
    image: "/lovable-uploads/2719d621-567b-4987-9d14-6b6f6a4d5f9d.png",
    brand: "Cartier",
    category: "jewelry"
  }
];

const RecentlyViewedProducts = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Recently Viewed</h2>
          <button className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
            Clear History
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentlyViewedProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewedProducts;
