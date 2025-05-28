
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import EditorsPicksSection from "@/components/EditorsPicksSection";
import TrendingProducts from "@/components/TrendingProducts";
import RecentlyViewedProducts from "@/components/RecentlyViewedProducts";
import TrustSection from "@/components/TrustSection";
import NewsletterSection from "@/components/NewsletterSection";
import MobileNavigation from "@/components/MobileNavigation";
import SellersSection from "@/components/SellersSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        <CategoryGrid />
        <EditorsPicksSection />
        <TrendingProducts />
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
