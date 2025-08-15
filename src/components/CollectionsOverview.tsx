
import { Crown, Gem, Watch, ShoppingBag } from "lucide-react";

const collections = [
  {
    id: "haute-joaillerie",
    title: "Haute Joaillerie",
    description: "Exceptional diamond and precious stone pieces",
    icon: Gem,
    itemCount: "127 pieces",
    gradient: "from-amber-400 to-orange-500"
  },
  {
    id: "horlogerie",
    title: "Exceptional Watchmaking",
    description: "Luxury watches and horological complications",
    icon: Watch,
    itemCount: "89 pieces",
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    id: "maroquinerie",
    title: "Luxury Leather Goods",
    description: "Bags and accessories from the greatest fashion houses",
    icon: ShoppingBag,
    itemCount: "156 pieces",
    gradient: "from-emerald-400 to-green-500"
  },
  {
    id: "objets-art",
    title: "Art Objects",
    description: "Artistic creations and collectible pieces",
    icon: Crown,
    itemCount: "73 pieces",
    gradient: "from-purple-400 to-pink-500"
  }
];

const CollectionsOverview = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50/30 via-white to-amber-50/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-4"></div>
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Exceptional Collections
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Explore our luxury universes carefully selected by our experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => {
            const IconComponent = collection.icon;
            return (
              <div
                key={collection.id}
                className="group cursor-pointer bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100/50 relative overflow-hidden"
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${collection.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-playfair font-semibold text-gray-900 text-lg mb-2 group-hover:text-gray-800">
                    {collection.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {collection.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium">
                      {collection.itemCount}
                    </span>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${collection.gradient} group-hover:scale-125 transition-transform duration-300`}></div>
                  </div>
                </div>
                
                {/* Elegant corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <div className={`w-full h-full bg-gradient-to-bl ${collection.gradient} rounded-bl-full`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CollectionsOverview;
