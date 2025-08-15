
import { Search, Heart, Mail, User, Home, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MobileNavigation = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50 font-inter shadow-lg">
      <div className="grid grid-cols-5 h-16">
        <button 
          onClick={handleHomeClick}
          className="flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 transition-colors active:bg-gray-100"
        >
          <Home className="w-5 h-5 text-gray-900" />
          <span className="text-xs text-gray-600 font-medium">Home</span>
        </button>
        
        <button 
          onClick={() => navigate("/categories")}
          className="flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 transition-colors active:bg-gray-100"
        >
          <Search className="w-5 h-5 text-gray-600" />
          <span className="text-xs text-gray-600 font-medium">Browse</span>
        </button>
        
        <button 
          onClick={() => navigate("/profile")}
          className="flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 transition-colors active:bg-gray-100"
        >
          <Heart className="w-5 h-5 text-gray-600" />
          <span className="text-xs text-gray-600 font-medium">Saved</span>
        </button>
        
        <button 
          onClick={() => navigate("/messages")}
          className="flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 transition-colors active:bg-gray-100"
        >
          <Mail className="w-5 h-5 text-gray-600" />
          <span className="text-xs text-gray-600 font-medium">Inbox</span>
        </button>
        
        <button 
          onClick={() => navigate("/login")}
          className="flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 transition-colors active:bg-gray-100"
        >
          <User className="w-5 h-5 text-gray-600" />
          <span className="text-xs text-gray-600 font-medium">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default MobileNavigation;
