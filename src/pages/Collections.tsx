import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Gem, Watch, ShoppingBag, Heart, Eye } from "lucide-react";
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";
import { 
  hauteJoaillerieProducts,
  horlogerieProducts, 
  maroquinerieProducts,
  objetsArtProducts,
  mobilierProducts 
} from "@/data/trendingProductsData";

const collections = [
  {
    id: "haute-joaillerie",
    title: "Haute Joaillerie",
    description: "Exceptional diamond and precious stone pieces",
    icon: Gem,
    itemCount: "127 pieces",
    gradient: "from-amber-400 to-orange-500",
    products: hauteJoaillerieProducts.slice(0, 6)
  },
  {
    id: "horlogerie",
    title: "Exceptional Watchmaking", 
    description: "Luxury watches and horological complications",
    icon: Watch,
    itemCount: "89 pieces",
    gradient: "from-blue-400 to-indigo-500",
    products: horlogerieProducts.slice(0, 6)
  },
  {
    id: "maroquinerie",
    title: "Luxury Leather Goods",
    description: "Bags and accessories from the greatest fashion houses",
    icon: ShoppingBag,
    itemCount: "156 pieces",
    gradient: "from-emerald-400 to-green-500",
    products: maroquinerieProducts.slice(0, 6)
  },
  {
    id: "objets-art",
    title: "Art Objects",
    description: "Artistic creations and collectible pieces",
    icon: Crown,
    itemCount: "73 pieces", 
    gradient: "from-purple-400 to-pink-500",
    products: objetsArtProducts.slice(0, 6)
  }
];

const Collections = () => {
  const navigate = useNavigate();
  const [selectedCollection, setSelectedCollection] = useState(collections[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50/30 via-white to-amber-50/20">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Exceptional Collections
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our luxury universes carefully selected by our experts for their authenticity and exceptional provenance.
          </p>
        </div>

        {/* Collection Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {collections.map((collection) => {
            const IconComponent = collection.icon;
            const isSelected = selectedCollection.id === collection.id;
            
            return (
              <div
                key={collection.id}
                onClick={() => setSelectedCollection(collection)}
                className={`group cursor-pointer bg-white rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-2 border relative overflow-hidden ${
                  isSelected ? 'border-amber-400 shadow-xl' : 'border-gray-100/50 hover:shadow-xl'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${isSelected ? 'opacity-5' : ''}`}></div>
                
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
              </div>
            );
          })}
        </div>

        {/* Selected Collection Products */}
        <div className="mb-12">
          <div className="flex items-center mb-8">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${selectedCollection.gradient} flex items-center justify-center mr-4`}>
              <selectedCollection.icon className="w-4 h-4 text-white" />
            </div>
            <h2 className="font-playfair text-3xl font-bold text-gray-900">
              {selectedCollection.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedCollection.products.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => navigate(`/product/${product.id}`)}>
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isNew && (
                    <Badge className="absolute top-4 left-4 bg-green-500">NEW</Badge>
                  )}
                  {product.isSale && (
                    <Badge className="absolute top-4 left-4 bg-red-500">SALE</Badge>
                  )}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.brand}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-xl text-gray-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              variant="outline"
              size="lg"
              onClick={() => navigate("/categories")}
              className="px-8"
            >
              VIEW ALL {selectedCollection.title.toUpperCase()}
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 text-white">
          <h2 className="font-playfair text-3xl font-bold mb-4">
            Discover Unique Pieces
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            The rarest treasures from our partner workshops, reserved for the most discerning collectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold px-8"
              onClick={() => navigate("/categories")}
            >
              EXPLORE ALL COLLECTIONS
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8"
              onClick={() => navigate("/consignment")}
            >
              CONSIGN YOUR TREASURES
            </Button>
          </div>
        </div>
      </main>

      <MobileNavigation />
    </div>
  );
};

export default Collections;