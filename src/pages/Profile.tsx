
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Upload, Users, Heart, ChevronRight, Settings, HelpCircle, Shield, Globe, Ruler, Phone, FileText, Info } from "lucide-react";
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("account");

  const userStats = {
    followers: 1234,
    following: 89,
    rating: 4.9,
    totalSales: 67
  };

  const menuItems = [
    {
      section: "PREFERENCES",
      items: [
        { title: "Currency", icon: Globe, hasArrow: true },
        { title: "Measurement Units", icon: Ruler, hasArrow: true },
      ]
    },
    {
      section: "SUPPORT", 
      items: [
        { title: "Contact LUXE", icon: Phone, hasArrow: true },
        { title: "FAQ", icon: HelpCircle, hasArrow: true },
      ]
    },
    {
      section: "MORE",
      items: [
        { title: "About LUXE", icon: Info, hasArrow: true },
        { title: "Terms of Service", icon: FileText, hasArrow: true },
        { title: "Privacy", icon: Shield, hasArrow: true },
        { title: "Do Not Sell My Info", icon: Settings, hasArrow: true },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-light">
      <Header />
      
      <main className="max-w-md mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-light tracking-wider text-gray-900 mb-8">ACCOUNT</h1>
        </div>

        {/* Login Button */}
        <Button 
          className="w-full h-14 bg-gray-900 hover:bg-gray-800 text-white font-light tracking-wide text-lg mb-8 rounded-none"
          onClick={() => window.location.href = '/login'}
        >
          LOG IN / SIGN UP
        </Button>

        {/* Menu Sections */}
        <div className="space-y-8">
          {menuItems.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-sm font-medium text-gray-900 tracking-wider mb-4">
                {section.section}
              </h2>
              <div className="space-y-0">
                {section.items.map((item, itemIndex) => (
                  <button
                    key={itemIndex}
                    className="w-full flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg font-light text-gray-700">
                        {item.title}
                      </span>
                    </div>
                    {item.hasArrow && (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom spacing for mobile navigation */}
        <div className="h-20"></div>
      </main>

      <MobileNavigation />
    </div>
  );
};

export default Profile;
