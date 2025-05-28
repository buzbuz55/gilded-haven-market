
const trendingWatches = [
  {
    id: 1,
    name: "Vintage Chronograph",
    price: "$12,500",
    brand: "Swiss Heritage",
    image: "⌚"
  },
  {
    id: 2,
    name: "Art Deco Timepiece",
    price: "$8,900",
    brand: "Classic Collection",
    image: "⏰"
  },
  {
    id: 3,
    name: "Modern Luxury Watch",
    price: "$15,200",
    brand: "Contemporary Design",
    image: "⌚"
  },
  {
    id: 4,
    name: "Diamond Bracelet Watch",
    price: "$28,000",
    brand: "Jewelry Collection",
    image: "💎"
  }
];

const TrendingSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
            TRENDING ON LUXE
          </h2>
          <h3 className="text-xl text-gray-600 mb-8">
            Wrist Watches
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {trendingWatches.map((watch) => (
            <div
              key={watch.id}
              className="group cursor-pointer"
            >
              <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-4 hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-200">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {watch.image}
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-medium text-gray-900 mb-1">{watch.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{watch.brand}</p>
                <p className="font-semibold text-gray-900">{watch.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="text-gray-600 hover:text-gray-900 font-medium border-b border-gray-300 hover:border-gray-600 transition-colors">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
