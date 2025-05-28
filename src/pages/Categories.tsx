
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";

const categories = [
  { 
    name: "FURNITURE", 
    icon: "🪑",
    description: "Curated designer pieces"
  },
  { 
    name: "ART", 
    icon: "🎨",
    description: "Fine art & collectibles"
  },
  { 
    name: "JEWELRY & WATCHES", 
    icon: "💎",
    description: "Luxury timepieces & jewelry"
  },
  { 
    name: "FASHION", 
    icon: "👗",
    description: "Designer accessories"
  },
  { 
    name: "SALE", 
    icon: "🏷️",
    description: "Exceptional offers"
  },
  { 
    name: "CREATORS", 
    icon: "🎭",
    description: "Artist collaborations"
  },
  { 
    name: "ICONIC DESIGNS", 
    icon: "⭐",
    description: "Timeless classics"
  }
];

// Sample recently viewed products
const recentlyViewedProducts = [
  {
    id: "1",
    image: "/placeholder.svg",
    title: "Vintage Gold Watch"
  },
  {
    id: "2", 
    image: "/placeholder.svg",
    title: "Designer Bracelet"
  },
  {
    id: "3",
    image: "/placeholder.svg", 
    title: "Classic Timepiece"
  }
];

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    console.log(`Navigating to ${categoryName} category`);
    // Navigate to specific category or filter logic here
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-md mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-12 pr-4 bg-gray-100 border-0 rounded-xl font-inter text-gray-900 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200"
          />
        </div>

        {/* Categories List */}
        <div className="space-y-1 mb-12">
          {filteredCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category.name)}
              className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <div className="text-left">
                  <h3 className="font-inter text-lg font-medium text-gray-900 tracking-wide">
                    {category.name}
                  </h3>
                  <p className="font-inter text-sm text-gray-500">
                    {category.description}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </button>
          ))}
        </div>

        {/* Recently Viewed Section */}
        <div className="mb-8">
          <h2 className="font-inter text-sm font-medium text-gray-500 tracking-[0.1em] uppercase mb-4 px-1">
            RECENTLY VIEWED
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {recentlyViewedProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="aspect-square bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Bottom spacing for mobile navigation */}
        <div className="h-20"></div>
      </main>

      <MobileNavigation />
    </div>
  );
};

export default Categories;
