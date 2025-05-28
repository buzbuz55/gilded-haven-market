
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
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
      onClick={handleClick}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button 
          className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors z-10"
          onClick={(e) => {
            e.stopPropagation();
            console.log("Added to favorites");
          }}
        >
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
        {isNew && (
          <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-600">
            NEW
          </Badge>
        )}
        {isSale && (
          <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
            SALE
          </Badge>
        )}
      </div>
      
      <div className="p-6">
        {brand && (
          <p className="text-sm text-gray-500 mb-1 uppercase tracking-wide">{brand}</p>
        )}
        <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mb-3 capitalize">{category}</p>
        
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-900">{price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">{originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
