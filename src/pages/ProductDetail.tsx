
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Heart, Share2, Shield, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";

const sampleProducts = [
  {
    id: "1",
    title: "Vintage Cartier Tank Watch",
    price: "$8,750",
    originalPrice: "$12,500",
    image: "/placeholder.svg",
    brand: "Cartier",
    category: "watches",
    isSale: true,
    seller: "LuxuryTimepieces",
    rating: 4.9,
    reviewCount: 127,
    description: "A stunning vintage Cartier Tank watch in excellent condition. Features original leather strap and has been authenticated by our expert team.",
    authenticity: "Verified Authentic",
    condition: "Excellent"
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  
  const product = sampleProducts.find(p => p.id === id) || sampleProducts[0];

  const handlePayment = () => {
    navigate('/payment');
  };

  const handleMessage = () => {
    navigate('/messages');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
            />
            <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-600">
              <Shield className="w-3 h-3 mr-1" />
              {product.authenticity}
            </Badge>
            {product.isSale && (
              <Badge className="absolute top-4 right-4 bg-red-500 hover:bg-red-600">
                SALE
              </Badge>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">{product.brand}</p>
              <h1 className="text-3xl font-bold text-gray-900 mt-1">{product.title}</h1>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1 font-medium">{product.rating}</span>
                <span className="text-gray-500 ml-1">({product.reviewCount} reviews)</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
                )}
              </div>
              <p className="text-sm text-gray-600">Condition: {product.condition}</p>
            </div>

            <div className="space-y-3">
              <Button onClick={handlePayment} className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3">
                Buy Now
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  onClick={() => setIsLiked(!isLiked)}
                  className="flex items-center justify-center"
                >
                  <Heart className={`w-4 h-4 mr-2 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                  {isLiked ? 'Saved' : 'Save'}
                </Button>
                
                <Button variant="outline" onClick={handleMessage}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message Seller
                </Button>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold text-gray-900 mb-2">Seller Information</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{product.seller}</p>
                  <div className="flex items-center mt-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm">{product.rating} seller rating</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Follow
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MobileNavigation />
    </div>
  );
};

export default ProductDetail;
