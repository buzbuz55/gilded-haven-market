
import { Heart, ShoppingBag, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useState, useCallback, memo } from "react";

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  brand?: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = memo(({ 
  id,
  title, 
  price, 
  originalPrice, 
  image, 
  brand, 
  category, 
  isNew, 
  isSale 
}: ProductCardProps) => {
  const navigate = useNavigate();
  const [isFavorited, setIsFavorited] = useState(false);
  const [showOfferChat, setShowOfferChat] = useState(false);

  const handleClick = useCallback(() => {
    navigate(`/product/${id}`);
  }, [navigate, id]);

  const handleFavoriteClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorited(prev => !prev);
  }, []);

  const handleAddToBag = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Added to shopping bag");
  }, []);

  const handleOfferClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setShowOfferChat(prev => !prev);
  }, []);

  return (
    <div 
      className="group cursor-pointer bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border border-gray-100/50 relative glass-luxury"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-[4/5] bg-gradient-to-br from-gray-50 to-gray-100">
          <img 
            src={image} 
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
          />
        </div>
        
        {/* Luxury Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
          <button 
            className={`p-3 bg-white/95 backdrop-blur-md rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl z-10 ${
              isFavorited ? 'text-red-500' : 'text-gray-600'
            }`}
            onClick={handleFavoriteClick}
          >
            <Heart className={`w-5 h-5 transition-colors ${isFavorited ? 'fill-current' : ''}`} />
          </button>
          
          <button 
            className="p-3 bg-amber-500/90 backdrop-blur-md rounded-full hover:bg-amber-500 hover:scale-110 transition-all duration-300 shadow-xl z-10 text-white"
            onClick={handleOfferClick}
          >
            <MessageCircle className="w-5 h-5" />
          </button>
          
          <button 
            className="p-3 bg-black/80 backdrop-blur-md rounded-full hover:bg-black hover:scale-110 transition-all duration-300 shadow-xl z-10 text-white"
            onClick={handleAddToBag}
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
        
        {isNew && (
          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium px-4 py-2 shadow-xl serif-luxury">
            NOUVEAU
          </Badge>
        )}
        {isSale && (
          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white font-medium px-4 py-2 shadow-xl serif-luxury">
            SOLDE ROYALE
          </Badge>
        )}

        {/* Offer Chat Popup */}
        {showOfferChat && (
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-amber-200/50 z-20 animate-fade-in">
            <p className="offer-chat text-gray-800 mb-3 sexy-text-shadow">
              "Make us an offer worthy of this exceptional piece..."
            </p>
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Votre offre..." 
                className="flex-1 px-3 py-2 rounded-lg border border-amber-200 focus:border-amber-400 focus:outline-none text-sm font-cormorant"
                onClick={(e) => e.stopPropagation()}
              />
              <button 
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold"
                onClick={(e) => e.stopPropagation()}
              >
                Envoyer
              </button>
            </div>
          </div>
        )}

        {/* Quick Shop Button - appears on hover */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <button 
            className="w-full bg-white/95 backdrop-blur-md text-gray-900 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 shadow-xl serif-luxury tracking-wide"
            onClick={handleAddToBag}
          >
            <span className="sexy-text-shadow">AJOUTER AU PANIER</span>
          </button>
        </div>
      </div>
      
      <div className="p-6">
        {brand && (
          <p className="text-xs text-amber-600 mb-3 uppercase tracking-[0.3em] font-medium serif-luxury">{brand}</p>
        )}
        <h3 className="font-playfair font-semibold text-gray-900 text-lg mb-3 line-clamp-2 leading-tight sexy-text-shadow">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mb-4 capitalize font-light tracking-wide serif-luxury">{category}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold text-gray-900 font-playfair sexy-text-shadow">{price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through font-light">{originalPrice}</span>
            )}
          </div>
          {isSale && originalPrice && (
            <div className="text-xs text-red-600 font-medium bg-red-50 px-3 py-1 rounded-full serif-luxury">
              -{Math.round((1 - parseFloat(price.replace(/[€$,]/g, '')) / parseFloat(originalPrice.replace(/[€$,]/g, ''))) * 100)}%
            </div>
          )}
        </div>
        
        {/* Authentication & Trust Indicators */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center serif-luxury">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Authenticated
            </span>
            <span className="serif-luxury">Livraison VIP</span>
          </div>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = "ProductCard";

export default ProductCard;
