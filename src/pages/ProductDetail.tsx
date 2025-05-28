
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Heart, Share2, ArrowLeft, ChevronRight, Star, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const sampleProducts = [
  {
    id: "1",
    title: "Hermès Paris Spur Shaped Silver Money Clip Gaetan De Percin Horse Texas",
    price: 1394.59,
    originalPrice: null,
    image: "/placeholder.svg",
    brand: "Hermès",
    category: "accessories",
    isSale: false,
    seller: "1stDibs seller since 2015",
    sellerLocation: "Located in Pays de La Loire",
    responseTime: "Typical response time: <1 hour",
    sellerType: "PLATINUM",
    isVerified: true,
    rating: 5.0,
    reviewCount: 124,
    description: "Rare Authentic Hermès Money Clip\n\nIn shape of a spur...",
    authenticity: "The 1stDibs Promise: Authenticity Guarantee, Money-Back Guarantee, 24-Hour Cancellation",
    condition: "Excellent",
    shippingInfo: "Global shipping available",
    returnPolicy: "Returns accepted within 2 day(s).",
    pricingNote: "Based on our pricing data, this item is above the recommended price.",
    recommendedPrice: 957.07
  }
];

const relatedProducts = [
  {
    id: "2",
    title: "Christian Lacroix...",
    price: 929,
    image: "/placeholder.svg"
  },
  {
    id: "3", 
    title: "Peacock Feathers F...",
    price: 180,
    image: "/placeholder.svg"
  }
];

const recentlyViewed = [
  {
    id: "4",
    image: "/placeholder.svg"
  },
  {
    id: "5", 
    image: "/placeholder.svg"
  },
  {
    id: "6",
    image: "/placeholder.svg"
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  const product = sampleProducts.find(p => p.id === id) || sampleProducts[0];

  const handleBack = () => {
    navigate(-1);
  };

  const formatPrice = (price: number) => `$${price.toLocaleString()}`;

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <Share2 className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-cover"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {[0, 1, 2, 3, 4].map((dot, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-gray-800' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        <div className="px-4 py-6">
          {/* Product Title and Price */}
          <div className="mb-6">
            <h1 className="font-playfair text-xl leading-tight text-gray-900 mb-4">
              {product.title}
            </h1>
            <div className="text-2xl font-semibold text-gray-900 mb-6">
              {formatPrice(product.price)}
            </div>

            {/* Purchase Button */}
            <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 text-base font-medium mb-4">
              PURCHASE
            </Button>

            {/* Shipping and Returns */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    📦
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Shipping</p>
                    <p className="text-sm text-gray-600">{product.shippingInfo}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>

              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    ↩️
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Worry-Free Returns</p>
                    <p className="text-sm text-gray-600">{product.returnPolicy}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Request More Info */}
            <Button variant="outline" className="w-full mt-4 py-3 text-base font-medium">
              REQUEST MORE INFO
            </Button>
          </div>

          {/* Authenticity Promise */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700 font-medium">
              {product.authenticity}
            </p>
          </div>

          {/* About Section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">ABOUT</h2>
            <p className="text-gray-700 leading-relaxed">
              {product.description.split('\n')[0]}
            </p>
            <p className="text-gray-700 mt-2">
              {product.description.split('\n')[2]}
            </p>
            {!showFullDescription && (
              <button
                onClick={() => setShowFullDescription(true)}
                className="text-yellow-600 font-medium mt-2"
              >
                CONTINUE READING
              </button>
            )}
          </div>

          {/* Expandable Sections */}
          <div className="space-y-4 mb-6">
            <div className="border-t border-gray-200 pt-4">
              <button
                onClick={() => toggleSection('details')}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="text-lg font-semibold text-gray-900">DETAILS</span>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${expandedSection === 'details' ? 'rotate-90' : ''}`} />
              </button>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <button
                onClick={() => toggleSection('shipping')}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="text-lg font-semibold text-gray-900">SHIPPING & RETURNS</span>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${expandedSection === 'shipping' ? 'rotate-90' : ''}`} />
              </button>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <button
                onClick={() => toggleSection('pricing')}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="text-lg font-semibold text-gray-900">PRICING GUIDANCE</span>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${expandedSection === 'pricing' ? 'rotate-180' : ''}`} />
              </button>
              
              {expandedSection === 'pricing' && (
                <div className="mt-4 space-y-4">
                  <div className="flex items-start space-x-2">
                    <Info className="w-5 h-5 text-gray-400 mt-0.5" />
                    <p className="text-gray-700">{product.pricingNote}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">This item</span>
                      <span className="font-semibold">{formatPrice(product.price)}</span>
                    </div>
                    
                    <div className="relative mb-4">
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-gray-800 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <div className="absolute right-0 top-0 w-3 h-3 bg-white border-2 border-gray-800 rounded-full transform -translate-y-0.5"></div>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Low</span>
                      <div className="text-center">
                        <div className="text-gray-600">Recommended</div>
                        <div className="font-semibold">{formatPrice(product.recommendedPrice)}</div>
                      </div>
                      <span className="text-gray-600">High</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* About the Seller */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">ABOUT THE SELLER</h2>
            
            <div className="flex justify-center space-x-8 mb-4">
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2">💎</div>
                <p className="text-sm font-semibold text-gray-900">{product.sellerType}</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2">✓</div>
                <p className="text-sm font-semibold text-gray-900">VETTED</p>
              </div>
            </div>

            <div className="text-center space-y-1 mb-4">
              <p className="text-gray-700">{product.seller}</p>
              <p className="text-gray-700">{product.sellerLocation}</p>
              <p className="text-gray-700">{product.responseTime}</p>
            </div>

            <Button variant="outline" className="w-full py-3 text-base font-medium mb-6">
              CONTACT SELLER
            </Button>

            {/* Reviews */}
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">REVIEWS ({product.reviewCount})</h3>
              <button className="text-gray-600 flex items-center">
                VIEW ALL <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-lg">{product.rating}</span>
            </div>
          </div>

          {/* More From This Seller */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">MORE FROM THIS SELLER</h3>
              <button className="text-gray-600 flex items-center">
                VIEW ALL <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            
            <div className="flex space-x-4 overflow-x-auto">
              {relatedProducts.map((item) => (
                <div key={item.id} className="flex-shrink-0 w-24">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg mb-2"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* You May Also Like */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">YOU MAY ALSO LIKE</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              {relatedProducts.map((item) => (
                <div key={item.id} className="text-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm text-gray-900 truncate">{item.title}</p>
                  <p className="text-sm font-semibold">{formatPrice(item.price)}</p>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full py-3 text-base font-medium">
              SEE MORE
            </Button>
          </div>

          {/* Still Looking */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">STILL LOOKING?</h3>
            <div className="flex items-center justify-between">
              <p className="text-gray-700">
                Get weekly alerts when there are new arrivals for 'Hermès Ephemera'.
              </p>
              <Heart className="w-6 h-6 text-gray-400 flex-shrink-0 ml-2" />
            </div>
          </div>

          {/* Recently Viewed */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">RECENTLY VIEWED</h3>
            
            <div className="flex space-x-4 overflow-x-auto">
              {recentlyViewed.map((item) => (
                <div key={item.id} className="flex-shrink-0 w-24">
                  <img
                    src={item.image}
                    alt="Recently viewed item"
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom spacing for mobile navigation */}
          <div className="h-20"></div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
