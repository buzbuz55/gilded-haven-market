
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
    icon: "👜",
    description: "Designer accessories"
  },
  {
    name: "SALE",
    icon: "🏷️",
    description: "Exceptional offers"
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 p-6 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl">{category.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm tracking-wide">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
