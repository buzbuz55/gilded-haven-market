
import { ChevronRight } from "lucide-react";

const categories = [
  {
    name: "FURNITURE",
    icon: "🪑",
    description: "Curated designer pieces",
    itemCount: "2,847 items"
  },
  {
    name: "ART",
    icon: "🎨",
    description: "Fine art & collectibles",
    itemCount: "1,923 items"
  },
  {
    name: "JEWELRY & WATCHES",
    icon: "💎",
    description: "Luxury timepieces & jewelry",
    itemCount: "3,156 items"
  },
  {
    name: "FASHION",
    icon: "👜",
    description: "Designer accessories",
    itemCount: "4,287 items"
  },
  {
    name: "SALE",
    icon: "🏷️",
    description: "Exceptional offers",
    itemCount: "892 items"
  }
];

const CategoryGrid = () => {
  const handleCategoryClick = (categoryName: string) => {
    console.log(`Navigating to ${categoryName} category`);
    // Navigation logic will be implemented here
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category.name)}
              className="group cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-between p-6 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="text-3xl">{category.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm tracking-wide mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-1">
                      {category.description}
                    </p>
                    <p className="text-xs text-gray-400">
                      {category.itemCount}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
