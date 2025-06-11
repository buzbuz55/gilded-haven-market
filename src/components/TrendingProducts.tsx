
import SectionHeader from "./TrendingProducts/SectionHeader";
import ProductsGrid from "./TrendingProducts/ProductsGrid";
import CTAButton from "./TrendingProducts/CTAButton";

const TrendingProducts = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50/50 via-white to-amber-50/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader />
        <ProductsGrid />
        <CTAButton />
      </div>
    </section>
  );
};

export default TrendingProducts;
