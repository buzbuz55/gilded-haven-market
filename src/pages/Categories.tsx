
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";
import SubCategory from "@/components/SubCategory";

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

// Subcategories data
const subcategoriesData = {
  "FURNITURE": [
    { name: "Seating", image: "/placeholder.svg" },
    { name: "Lighting", image: "/placeholder.svg" },
    { name: "Tables", image: "/placeholder.svg" },
    { name: "Decorative Objects", image: "/placeholder.svg" },
    { name: "Case Pieces and Storage", image: "/placeholder.svg" },
    { name: "Mirrors", image: "/placeholder.svg" },
    { name: "Rugs and Carpets", image: "/placeholder.svg" },
    { name: "Folk Art", image: "/placeholder.svg" },
    { name: "Serveware, Ceramics, Silver and Glass", image: "/placeholder.svg" },
    { name: "Wall Decorations", image: "/placeholder.svg" },
    { name: "Building and Garden Elements", image: "/placeholder.svg" },
    { name: "Asian Art and Furniture", image: "/placeholder.svg" }
  ],
  "ART": [
    { name: "Paintings", image: "/placeholder.svg" },
    { name: "Sculptures", image: "/placeholder.svg" },
    { name: "Photography", image: "/placeholder.svg" },
    { name: "Prints and Multiples", image: "/placeholder.svg" },
    { name: "Drawings and Watercolor Paintings", image: "/placeholder.svg" },
    { name: "Mixed Media", image: "/placeholder.svg" },
    { name: "Art on Sale", image: "/placeholder.svg" }
  ],
  "JEWELRY & WATCHES": [
    { name: "Watches", image: "/placeholder.svg" },
    { name: "Rings", image: "/placeholder.svg" },
    { name: "Earrings", image: "/placeholder.svg" },
    { name: "Necklaces", image: "/placeholder.svg" },
    { name: "Bracelets", image: "/placeholder.svg" },
    { name: "Cufflinks", image: "/placeholder.svg" },
    { name: "Brooches", image: "/placeholder.svg" },
    { name: "Objects d'Art and Vertu", image: "/placeholder.svg" },
    { name: "Silver, Flatware and Silverplate", image: "/placeholder.svg" },
    { name: "Fashion Jewelry", image: "/placeholder.svg" },
    { name: "Jewelry & Watches on Sale", image: "/placeholder.svg" }
  ],
  "FASHION": [
    { name: "Clothing", image: "/placeholder.svg" },
    { name: "Handbags", image: "/placeholder.svg" },
    { name: "Accessories", image: "/placeholder.svg" },
    { name: "Ephemera", image: "/placeholder.svg" },
    { name: "Fashion on Sale", image: "/placeholder.svg" }
  ],
  "CREATORS": [
    { name: "Furniture Creators", image: "/placeholder.svg" },
    { name: "Artists", image: "/placeholder.svg" },
    { name: "Jewelry & Watches Creators", image: "/placeholder.svg" },
    { name: "Designers", image: "/placeholder.svg" }
  ]
};

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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    console.log(`Navigating to ${categoryName} category`);
    setSelectedCategory(categoryName);
  };

  const handleSubCategoryClick = (subcategoryName: string) => {
    console.log(`Navigating to ${subcategoryName} subcategory`);
    // Navigate to specific subcategory or filter logic here
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // If a category is selected, show subcategories
  if (selectedCategory && subcategoriesData[selectedCategory as keyof typeof subcategoriesData]) {
    return (
      <>
        <SubCategory
          categoryName={selectedCategory}
          subcategories={subcategoriesData[selectedCategory as keyof typeof subcategoriesData]}
          onBack={handleBackToCategories}
          onSubCategoryClick={handleSubCategoryClick}
        />
        <MobileNavigation />
      </>
    );
  }

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
