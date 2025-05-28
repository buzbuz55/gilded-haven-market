
const editorsPicks = [
  {
    id: 1,
    name: "Vintage Handbag",
    price: "$3,200",
    image: "🛍️",
    category: "Fashion"
  },
  {
    id: 2,
    name: "Abstract Sculpture",
    price: "$8,500",
    image: "🗿",
    category: "Art"
  },
  {
    id: 3,
    name: "Designer Lamp",
    price: "$1,850",
    image: "💡",
    category: "Furniture"
  },
  {
    id: 4,
    name: "Ceramic Vase",
    price: "$950",
    image: "🏺",
    category: "Art"
  }
];

const EditorsPicksSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            EDITORS' PICKS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Carefully curated selections from our expert team
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {editorsPicks.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
            >
              <div className="aspect-square bg-white rounded-2xl p-8 mb-4 hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-100">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-medium text-gray-900 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                <p className="font-semibold text-gray-900">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorsPicksSection;
