
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Settings, HelpCircle, Shield, Globe, Ruler, Phone, FileText, Info, LogOut } from "lucide-react";
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("account");

  const accountMenuItems = [
    { title: "Informations Personnelles", icon: Settings, hasArrow: true },
    { title: "Méthodes de Paiement", icon: Settings, hasArrow: true },
    { title: "Adresses de Livraison", icon: Settings, hasArrow: true },
    { title: "Historique des Commandes", icon: Settings, hasArrow: true },
  ];

  const preferencesMenuItems = [
    { title: "Devise", icon: Globe, hasArrow: true },
    { title: "Unités de Mesure", icon: Ruler, hasArrow: true },
    { title: "Notifications", icon: Settings, hasArrow: true },
  ];

  const supportMenuItems = [
    { title: "Contacter LUXE", icon: Phone, hasArrow: true },
    { title: "Questions Fréquentes", icon: HelpCircle, hasArrow: true },
    { title: "Service Clientèle", icon: Phone, hasArrow: true },
  ];

  const legalMenuItems = [
    { title: "À Propos de LUXE", icon: Info, hasArrow: true },
    { title: "Conditions de Service", icon: FileText, hasArrow: true },
    { title: "Politique de Confidentialité", icon: Shield, hasArrow: true, onClick: () => window.location.href = '/privacy' },
    { title: "Ne Pas Vendre Mes Informations", icon: Settings, hasArrow: true },
  ];

  const MenuSection = ({ title, items }: { title: string; items: any[] }) => (
    <div className="mb-6">
      <h2 className="font-inter text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3 px-4">
        {title}
      </h2>
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        {items.map((item, itemIndex) => (
          <button
            key={itemIndex}
            className="w-full flex items-center justify-between px-4 py-4 hover:bg-accent transition-colors border-b border-border last:border-b-0"
            onClick={item.onClick}
          >
            <span className="font-inter text-foreground font-medium text-base">
              {item.title}
            </span>
            {item.hasArrow && (
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            )}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      <main className="max-w-md mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-playfair text-3xl font-semibold text-foreground mb-2 tracking-tight">ACCOUNT</h1>
        </div>

        {/* Login Button */}
        <Button 
          className="w-full h-14 bg-foreground hover:bg-foreground/90 text-background font-inter font-medium text-base mb-8 rounded-lg transition-all duration-200"
          onClick={() => window.location.href = '/login'}
        >
          LOG IN / SIGN UP
        </Button>

        {/* Menu Sections */}
        <div className="space-y-6">
          <MenuSection title="Compte" items={accountMenuItems} />
          <MenuSection title="Préférences" items={preferencesMenuItems} />
          <MenuSection title="Support" items={supportMenuItems} />
          <MenuSection title="Plus" items={legalMenuItems} />
        </div>

        {/* Sign Out Button */}
        <div className="mt-8 mb-6">
          <button className="w-full flex items-center justify-center px-4 py-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors">
            <LogOut className="w-5 h-5 text-destructive mr-3" />
            <span className="font-inter text-destructive font-medium text-base">Se Déconnecter</span>
          </button>
        </div>

        {/* Version Info */}
        <div className="text-center mb-8">
          <p className="font-inter text-sm text-muted-foreground">Version 2.1.0</p>
        </div>

        {/* Bottom spacing for mobile navigation */}
        <div className="h-20"></div>
      </main>

      <MobileNavigation />
    </div>
  );
};

export default Profile;
