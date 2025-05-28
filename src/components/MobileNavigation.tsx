
import { Search, Heart, Mail, User, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MobileNavigation = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
      <div className="grid grid-cols-5 h-16">
        <button 
          onClick={handleHomeClick}
          className="flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 transition-colors"
        >
          <Home className="w-6 h-6 text-gray-900" />
          <span className="text-xs text-gray-600">Home</span>
        </button>
        
        <button className="flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 transition-colors">
          <Search className="w-6 h-6 text-gray-600" />
          <span className="text-xs text-gray-600">Search</span>
        </button>
        
        <button className="flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 transition-colors">
          <Heart className="w-6 h-6 text-gray-600" />
          <span className="text-xs text-gray-600">Saved</span>
        </button>
        
        <button className="flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 transition-colors">
          <Mail className="w-6 h-6 text-gray-600" />
          <span className="text-xs text-gray-600">Inbox</span>
        </button>
        
        <button className="flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 transition-colors">
          <User className="w-6 h-6 text-gray-600" />
          <span className="text-xs text-gray-600">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default MobileNavigation;
