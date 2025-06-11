
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

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

const ProductCard = ({ 
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

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div 
      className="group cursor-pointer bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-[4/5] bg-gradient-to-br from-gray-50 to-gray-100">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </div>
        
        {/* Luxury Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <button 
          className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg z-10"
          onClick={(e) => {
            e.stopPropagation();
            console.log("Added to favorites");
          }}
        >
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
        
        {isNew && (
          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium px-3 py-1 shadow-lg">
            NOUVEAU
          </Badge>
        )}
        {isSale && (
          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white font-medium px-3 py-1 shadow-lg">
            SOLDE ROYALE
          </Badge>
        )}
      </div>
      
      <div className="p-6">
        {brand && (
          <p className="text-xs text-amber-600 mb-2 uppercase tracking-[0.2em] font-medium">{brand}</p>
        )}
        <h3 className="font-playfair font-semibold text-gray-900 text-lg mb-2 line-clamp-2 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mb-4 capitalize font-light tracking-wide">{category}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900 font-playfair">{price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through font-light">{originalPrice}</span>
            )}
          </div>
          {isSale && originalPrice && (
            <div className="text-xs text-red-600 font-medium bg-red-50 px-2 py-1 rounded-full">
              -{Math.round((1 - parseFloat(price.replace(/[€$,]/g, '')) / parseFloat(originalPrice.replace(/[€$,]/g, ''))) * 100)}%
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
