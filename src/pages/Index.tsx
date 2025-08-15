
import { memo, lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MobileNavigation from "@/components/MobileNavigation";

// Lazy load heavy components for better initial performance
const CollectionsOverview = lazy(() => import("@/components/CollectionsOverview"));
const CategoryGrid = lazy(() => import("@/components/CategoryGrid"));
const EditorsPicksSection = lazy(() => import("@/components/EditorsPicksSection"));
const TrendingProducts = lazy(() => import("@/components/TrendingProducts"));
const LuxuryCollection = lazy(() => import("@/components/LuxuryCollection"));
const AuctionSection = lazy(() => import("@/components/AuctionSection"));
const RecentlyViewedProducts = lazy(() => import("@/components/RecentlyViewedProducts"));
const TrustSection = lazy(() => import("@/components/TrustSection"));
const NewsletterSection = lazy(() => import("@/components/NewsletterSection"));
const SellersSection = lazy(() => import("@/components/SellersSection"));
const WhyChooseUsSection = lazy(() => import("@/components/WhyChooseUsSection"));

const LazyComponent = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={
    <div className="py-8 flex justify-center">
      <div className="w-6 h-6 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
    </div>
  }>
    {children}
  </Suspense>
);

const Index = memo(() => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/30 via-white to-blue-50/20">
      <Header />
      
      <main>
        <HeroSection />
        
        <LazyComponent>
          <CollectionsOverview />
        </LazyComponent>
        
        <LazyComponent>
          <CategoryGrid />
        </LazyComponent>
        
        {/* Elegant Divider */}
        <div className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
          </div>
        </div>
        
        <LazyComponent>
          <EditorsPicksSection />
        </LazyComponent>
        
        <LazyComponent>
          <TrendingProducts />
        </LazyComponent>
        
        {/* Luxury Accent Section */}
        <section className="py-12 px-4 bg-gradient-to-r from-gray-900 via-black to-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
              Maison Luxe d'Excellence
            </h2>
            <p className="text-amber-200 text-lg font-light tracking-wide">
              Où les trésors rencontrent leurs collectionneurs destinés
            </p>
          </div>
        </section>
        
        <LazyComponent>
          <LuxuryCollection />
        </LazyComponent>
        
        <LazyComponent>
          <AuctionSection />
        </LazyComponent>
        
        <LazyComponent>
          <SellersSection />
        </LazyComponent>
        
        <LazyComponent>
          <WhyChooseUsSection />
        </LazyComponent>
        
        <LazyComponent>
          <RecentlyViewedProducts />
        </LazyComponent>
        
        <LazyComponent>
          <TrustSection />
        </LazyComponent>
        
        <LazyComponent>
          <NewsletterSection />
        </LazyComponent>
      </main>

      <MobileNavigation />
      
      {/* Add padding to prevent mobile nav overlap */}
      <div className="h-16 md:hidden"></div>
    </div>
  );
});

Index.displayName = "Index";

export default Index;
