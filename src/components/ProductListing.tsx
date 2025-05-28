
import { useState } from "react";
import { ArrowLeft, Heart, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Product {
  id: string;
  title: string;
  artist: string;
  price: number;
  originalPrice?: number;
  image: string;
  isOnSale?: boolean;
}

interface ProductListingProps {
  categoryName: string;
  subcategoryName: string;
  products: Product[];
  onBack: () => void;
}

const ProductListing = ({ categoryName, subcategoryName, products, onBack }: ProductListingProps) => {
  const [sortBy, setSortBy] = useState("recommended");
  const [selectedSubcategory, setSelectedSubcategory] = useState("all");

  const subcategoryOptions = [
    { id: "all", name: "All Paintings" },
    { id: "abstract", name: "Abstract Paintings" },
    { id: "landscape", name: "Landscape Paintings" },
    { id: "figurative", name: "Figurative Paintings" }
  ];

  const sortOptions = [
    { id: "recommended", name: "Recommended" },
    { id: "newest", name: "Newest" },
    { id: "price-high", name: "Price: High - Low" },
    { id: "price-low", name: "Price: Low - High" },
    { id: "popular", name: "Popular" }
  ];

  const filteredAndSortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-high":
        return b.price - a.price;
      case "price-low":
        return a.price - b.price;
      case "newest":
        return b.id.localeCompare(a.id);
      default:
        return 0;
    }
  });

  const formatPrice = (price: number) => `$${price.toLocaleString()}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <h1 className="font-playfair text-lg font-medium text-gray-900 tracking-wide uppercase">
              {subcategoryName}
            </h1>
            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <Heart className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-6">
        {/* Subcategory Tabs */}
        <div className="mb-6">
          <Tabs value={selectedSubcategory} onValueChange={setSelectedSubcategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-gray-100">
              <TabsTrigger 
                value="abstract" 
                className="text-xs py-2 px-3 data-[state=active]:bg-white font-inter"
              >
                Abstract Paintings
              </TabsTrigger>
              <TabsTrigger 
                value="landscape" 
                className="text-xs py-2 px-3 data-[state=active]:bg-white font-inter"
              >
                Landscape Paintings
              </TabsTrigger>
              <TabsTrigger 
                value="figurative" 
                className="text-xs py-2 px-3 data-[state=active]:bg-white font-inter"
              >
                Figurative
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-gray-600 font-inter">
            {filteredAndSortedProducts.length.toLocaleString()} item(s)
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {filteredAndSortedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-inter text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                  {product.artist}
                </h3>
                <p className="font-inter text-xs text-gray-600 italic mb-2 line-clamp-1">
                  {product.title}
                </p>
                <div className="flex items-center space-x-2">
                  <span className="font-inter text-sm font-semibold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xs text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                      <span className="text-xs text-red-500 font-medium">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% Off
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom spacing for mobile navigation */}
        <div className="h-20"></div>
      </main>

      {/* Fixed Sort and Filter Buttons */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-4 z-40">
        {/* Sort Button */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="bg-black text-white border-black hover:bg-gray-800 rounded-full px-6 py-2 font-inter"
            >
              <span className="mr-2">⚡</span>
              Sort
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-white border border-gray-200 rounded-lg shadow-lg">
            {sortOptions.map((option) => (
              <DropdownMenuItem
                key={option.id}
                onClick={() => setSortBy(option.id)}
                className="font-inter text-gray-900 hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex items-center justify-between w-full">
                  <span>{option.name}</span>
                  {sortBy === option.id && (
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  )}
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Filter Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="bg-black text-white border-black hover:bg-gray-800 rounded-full px-6 py-2 font-inter"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="bg-white rounded-t-lg">
            <SheetHeader>
              <SheetTitle className="font-playfair text-lg">Filter Options</SheetTitle>
            </SheetHeader>
            <div className="py-6">
              <p className="font-inter text-gray-600">Filter options will be implemented here</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default ProductListing;
