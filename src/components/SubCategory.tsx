
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SubCategoryItem {
  name: string;
  image: string;
}

interface SubCategoryProps {
  categoryName: string;
  subcategories: SubCategoryItem[];
  onBack: () => void;
  onSubCategoryClick: (subcategoryName: string) => void;
}

const SubCategory = ({ categoryName, subcategories, onBack, onSubCategoryClick }: SubCategoryProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSubcategories = subcategories.filter(subcategory =>
    subcategory.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              {categoryName}
            </h1>
            <div className="w-9"></div> {/* Spacer for center alignment */}
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-12 pr-4 bg-gray-100 border-0 rounded-xl font-inter text-gray-900 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200"
          />
        </div>

        {/* Subcategories List */}
        <div className="space-y-1">
          {filteredSubcategories.map((subcategory, index) => (
            <button
              key={index}
              onClick={() => onSubCategoryClick(subcategory.name)}
              className="w-full flex items-center p-4 bg-white hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg mr-4 overflow-hidden">
                <img
                  src={subcategory.image}
                  alt={subcategory.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-inter text-lg text-gray-900 text-left">
                {subcategory.name}
              </span>
            </button>
          ))}
        </div>

        {/* Bottom spacing for mobile navigation */}
        <div className="h-20"></div>
      </main>
    </div>
  );
};

export default SubCategory;
