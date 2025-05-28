
import { Search, Heart, Mail, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 
              className="text-2xl font-bold text-gray-900 tracking-tight cursor-pointer"
              onClick={() => navigate("/")}
            >
              LUXE
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => navigate("/categories")}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Art
            </button>
            <button 
              onClick={() => navigate("/categories")}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Jewelry & Watches
            </button>
            <button 
              onClick={() => navigate("/categories")}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Furniture
            </button>
            <button 
              onClick={() => navigate("/categories")}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Fashion
            </button>
            <button 
              onClick={() => navigate("/categories")}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Collections
            </button>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-gray-50">
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-gray-50"
              onClick={() => navigate("/profile")}
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-gray-50"
              onClick={() => navigate("/messages")}
            >
              <Mail className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-gray-50"
              onClick={() => navigate("/login")}
            >
              <User className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => {
                  navigate("/categories");
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-gray-900 font-medium text-left"
              >
                Art
              </button>
              <button 
                onClick={() => {
                  navigate("/categories");
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-gray-900 font-medium text-left"
              >
                Jewelry & Watches
              </button>
              <button 
                onClick={() => {
                  navigate("/categories");
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-gray-900 font-medium text-left"
              >
                Furniture
              </button>
              <button 
                onClick={() => {
                  navigate("/categories");
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-gray-900 font-medium text-left"
              >
                Fashion
              </button>
              <button 
                onClick={() => {
                  navigate("/categories");
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-gray-900 font-medium text-left"
              >
                Collections
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
