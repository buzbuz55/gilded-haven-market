
const recentlyViewed = [
  {
    id: 1,
    name: "Gold Vintage Watch",
    price: "$4,200",
    image: "⌚"
  },
  {
    id: 2,
    name: "Designer Bracelet",
    price: "$2,800",
    image: "💍"
  },
  {
    id: 3,
    name: "Classic Timepiece",
    price: "$6,500",
    image: "⏱️"
  }
];

const RecentlyViewedSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center tracking-tight">
          RECENTLY VIEWED
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {recentlyViewed.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
            >
              <div className="aspect-square bg-white rounded-2xl p-6 mb-4 hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-100">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-medium text-gray-900 mb-1 text-sm">{item.name}</h3>
                <p className="font-semibold text-gray-900 text-sm">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewedSection;
