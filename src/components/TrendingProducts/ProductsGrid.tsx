
import { memo, useMemo } from "react";
import VirtualizedProductGrid from "../VirtualizedProductGrid";
import { trendingProducts } from "@/data/trendingProductsData";

const ProductsGrid = memo(() => {
  // Limit initial render to improve performance
  const displayProducts = useMemo(() => 
    trendingProducts.slice(0, 12), 
    []
  );

  return (
    <div className="mb-16">
      <VirtualizedProductGrid products={displayProducts} />
    </div>
  );
});

ProductsGrid.displayName = "ProductsGrid";

export default ProductsGrid;
