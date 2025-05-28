
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Settings, HelpCircle, Shield, Globe, Ruler, Phone, FileText, Info, LogOut } from "lucide-react";
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("account");

  const accountMenuItems = [
    { title: "Personal Information", icon: Settings, hasArrow: true },
    { title: "Payment Methods", icon: Settings, hasArrow: true },
    { title: "Shipping Addresses", icon: Settings, hasArrow: true },
    { title: "Order History", icon: Settings, hasArrow: true },
  ];

  const preferencesMenuItems = [
    { title: "Currency", icon: Globe, hasArrow: true },
    { title: "Measurement Units", icon: Ruler, hasArrow: true },
    { title: "Notifications", icon: Settings, hasArrow: true },
  ];

  const supportMenuItems = [
    { title: "Contact LUXE", icon: Phone, hasArrow: true },
    { title: "FAQ", icon: HelpCircle, hasArrow: true },
    { title: "Customer Service", icon: Phone, hasArrow: true },
  ];

  const legalMenuItems = [
    { title: "About LUXE", icon: Info, hasArrow: true },
    { title: "Terms of Service", icon: FileText, hasArrow: true },
    { title: "Privacy Policy", icon: Shield, hasArrow: true },
    { title: "Do Not Sell My Info", icon: Settings, hasArrow: true },
  ];

  const MenuSection = ({ title, items }: { title: string; items: any[] }) => (
    <div className="mb-8">
      <h2 className="font-inter text-xs font-medium text-gray-500 tracking-[0.1em] uppercase mb-4 px-1">
        {title}
      </h2>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        {items.map((item, itemIndex) => (
          <button
            key={itemIndex}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0"
          >
            <span className="font-inter text-gray-900 font-medium">
              {item.title}
            </span>
            {item.hasArrow && (
              <ChevronRight className="w-5 h-5 text-gray-400" />
            )}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Header />
      
      <main className="max-w-md mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-playfair text-3xl font-medium text-gray-900 mb-2">Account</h1>
          <p className="font-inter text-sm text-gray-500">Manage your LUXE experience</p>
        </div>

        {/* Login Button */}
        <Button 
          className="w-full h-14 bg-gray-900 hover:bg-gray-800 text-white font-inter font-medium text-base mb-8 rounded-2xl transition-all duration-200"
          onClick={() => window.location.href = '/login'}
        >
          Log In / Sign Up
        </Button>

        {/* Menu Sections */}
        <div className="space-y-6">
          <MenuSection title="Account" items={accountMenuItems} />
          <MenuSection title="Preferences" items={preferencesMenuItems} />
          <MenuSection title="Support" items={supportMenuItems} />
          <MenuSection title="Legal" items={legalMenuItems} />
        </div>

        {/* Sign Out Button */}
        <div className="mt-8 mb-8">
          <button className="w-full flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
            <LogOut className="w-5 h-5 text-red-500 mr-3" />
            <span className="font-inter text-red-500 font-medium">Sign Out</span>
          </button>
        </div>

        {/* Version Info */}
        <div className="text-center mb-8">
          <p className="font-inter text-xs text-gray-400">Version 2.1.0</p>
        </div>

        {/* Bottom spacing for mobile navigation */}
        <div className="h-20"></div>
      </main>

      <MobileNavigation />
    </div>
  );
};

export default Profile;
