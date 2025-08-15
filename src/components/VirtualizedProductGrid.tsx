import { memo, useMemo } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  brand?: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

interface VirtualizedProductGridProps {
  products: Product[];
  itemsPerRow?: number;
}

const VirtualizedProductGrid = memo(({ products, itemsPerRow = 4 }: VirtualizedProductGridProps) => {
  // Pre-calculate grid layout for better performance
  const gridItems = useMemo(() => {
    return products.map((product) => ({
      ...product,
      key: product.id
    }));
  }, [products]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {gridItems.map((product) => (
        <ProductCard
          key={product.key}
          {...product}
        />
      ))}
    </div>
  );
});

VirtualizedProductGrid.displayName = "VirtualizedProductGrid";

export default VirtualizedProductGrid;