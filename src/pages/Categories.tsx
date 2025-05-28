
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import MobileNavigation from "@/components/MobileNavigation";

const categories = [
  { name: "Art", count: 1250, icon: "🎨" },
  { name: "Jewelry & Watches", count: 890, icon: "💎" },
  { name: "Furniture", count: 567, icon: "🪑" },
  { name: "Fashion", count: 432, icon: "👗" },
  { name: "Collectibles", count: 234, icon: "🏺" },
  { name: "Antiques", count: 123, icon: "🕰️" }
];

const sampleProducts = [
  {
    id: "1",
    title: "Contemporary Abstract Canvas",
    price: "$2,850",
    image: "/placeholder.svg",
    brand: "Gallery Modern",
    category: "art",
    isNew: true
  },
  {
    id: "2",
    title: "Diamond Tennis Bracelet",
    price: "$15,400",
    image: "/placeholder.svg",
    brand: "Luxury Jewels",
    category: "jewelry"
  },
  {
    id: "3",
    title: "Vintage Leather Armchair",
    price: "$4,200",
    originalPrice: "$5,800",
    image: "/placeholder.svg",
    brand: "Classic Furniture",
    category: "furniture",
    isSale: true
  }
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const filteredProducts = selectedCategory === "all" 
    ? sampleProducts 
    : sampleProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Categories</h1>
          <p className="text-gray-600">Discover luxury items across our curated categories</p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card 
            className={`cursor-pointer transition-all ${selectedCategory === "all" ? "ring-2 ring-gray-900" : ""}`}
            onClick={() => setSelectedCategory("all")}
          >
            <CardContent className="p-4 text-center">
              <div className="text-2xl mb-2">🔍</div>
              <h3 className="font-medium text-sm">All Items</h3>
              <Badge variant="secondary" className="mt-1">
                {sampleProducts.length}
              </Badge>
            </CardContent>
          </Card>
          
          {categories.map((category) => (
            <Card 
              key={category.name}
              className={`cursor-pointer transition-all ${selectedCategory === category.name.toLowerCase() ? "ring-2 ring-gray-900" : ""}`}
              onClick={() => setSelectedCategory(category.name.toLowerCase())}
            >
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{category.icon}</div>
                <h3 className="font-medium text-sm">{category.name}</h3>
                <Badge variant="secondary" className="mt-1">
                  {category.count}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {selectedCategory === "all" ? "All Products" : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Products`}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No products found in this category.</p>
          </div>
        )}
      </main>

      <MobileNavigation />
    </div>
  );
};

export default Categories;
