
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CollectionsOverview from "@/components/CollectionsOverview";
import CategoryGrid from "@/components/CategoryGrid";
import EditorsPicksSection from "@/components/EditorsPicksSection";
import TrendingProducts from "@/components/TrendingProducts";
import LuxuryCollection from "@/components/LuxuryCollection";
import RecentlyViewedProducts from "@/components/RecentlyViewedProducts";
import TrustSection from "@/components/TrustSection";
import NewsletterSection from "@/components/NewsletterSection";
import MobileNavigation from "@/components/MobileNavigation";
import SellersSection from "@/components/SellersSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/30 via-white to-blue-50/20">
      <Header />
      
      <main>
        <HeroSection />
        <CollectionsOverview />
        <CategoryGrid />
        
        {/* Elegant Divider */}
        <div className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
          </div>
        </div>
        
        <EditorsPicksSection />
        <TrendingProducts />
        
        {/* Luxury Accent Section */}
        <section className="py-12 px-4 bg-gradient-to-r from-gray-900 via-black to-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
              Maison Royale d'Excellence
            </h2>
            <p className="text-amber-200 text-lg font-light tracking-wide">
              Où les trésors rencontrent leurs collectionneurs destinés
            </p>
          </div>
        </section>
        
        <LuxuryCollection />
        <SellersSection />
        <WhyChooseUsSection />
        <RecentlyViewedProducts />
        <TrustSection />
        <NewsletterSection />
      </main>

      <MobileNavigation />
      
      {/* Add padding to prevent mobile nav overlap */}
      <div className="h-16 md:hidden"></div>
    </div>
  );
};

export default Index;
