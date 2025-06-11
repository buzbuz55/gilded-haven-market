
import ProductCard from "../ProductCard";
import { trendingProducts } from "@/data/trendingProductsData";

const ProductsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
      {trendingProducts.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
