import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FilterSidebarProps {
  filters: {
    categories: string[];
    brands: string[];
    priceRange: [number, number];
    colors: string[];
    discountRange: number;
  };
  setFilters: (filters: any) => void;
}

const categories = [
  { name: "Headphones", count: 690 },
  { name: "Smart Watches", count: 303 },
  { name: "Speakers", count: 172 },
  { name: "Fitness Bands", count: 2 },
];

const brands = [
  { name: "boAt", count: 149 },
  { name: "Portronics", count: 91 },
  { name: "JBL", count: 78 },
  { name: "NOISE", count: 71 },
  { name: "zusix", count: 64 },
  { name: "BOULT AUDIO", count: 62 },
  { name: "ACwO", count: 46 },
  { name: "Realme", count: 39 },
];

const colors = [
  { name: "Black", count: 330 },
  { name: "Blue", count: 130 },
  { name: "White", count: 113 },
  { name: "Green", count: 77 },
  { name: "Grey", count: 49 },
  { name: "Red", count: 31 },
  { name: "Beige", count: 20 },
];

const discountRanges = [
  { value: 10, label: "10% and above" },
  { value: 20, label: "20% and above" },
  { value: 30, label: "30% and above" },
  { value: 40, label: "40% and above" },
  { value: 50, label: "50% and above" },
  { value: 60, label: "60% and above" },
  { value: 70, label: "70% and above" },
  { value: 80, label: "80% and above" },
];

export function FilterSidebar({ filters, setFilters }: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    brands: true,
    price: true,
    colors: true,
    discount: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCheckboxChange = (type: string, value: string) => {
    setFilters((prev: { [x: string]: any }) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((item: string) => item !== value)
        : [...prev[type], value],
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Home /</span>
        <span className="text-sm text-gray-600">Accessories /</span>
        <span className="text-sm text-black font-semibold">Gadgets</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-black font-semibold">Gadgets - </span>
        <span className="text-sm text-gray-600">862 items</span>
      </div>

      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">FILTERS</h2>
        <button
          onClick={() =>
            setFilters({
              categories: [],
              brands: [],
              priceRange: [0, 10000],
              colors: [],
              discountRange: 0,
            })
          }
          className="text-sm text-pink-600"
        >
          CLEAR ALL
        </button>
      </div>

      {/* Categories */}
      <div className="border-b pb-4 border-gray-300">
        <button
          onClick={() => toggleSection("categories")}
          className="flex justify-between items-center w-full mb-2"
        >
          <span className="font-medium">Categories</span>
          {expandedSections.categories ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {expandedSections.categories && (
          <div className="space-y-2">
            {categories.map((category) => (
              <label
                key={category.name}
                className="flex items-center space-x-2"
              >
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category.name)}
                  onChange={() =>
                    handleCheckboxChange("categories", category.name)
                  }
                  className="rounded text-pink-600"
                />
                <span className="text-sm font-semibold">
                  {category.name} ({category.count})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Brands */}
      <div className="border-b pb-4 border-gray-300">
        <button
          onClick={() => toggleSection("brands")}
          className="flex justify-between items-center w-full mb-2"
        >
          <span className="font-medium">Brand</span>
          {expandedSections.brands ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {expandedSections.brands && (
          <div className="space-y-2">
            {brands.map((brand) => (
              <label key={brand.name} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand.name)}
                  onChange={() => handleCheckboxChange("brands", brand.name)}
                  className="rounded"
                />
                <span className="text-sm text-gray-600">
                  {brand.name} ({brand.count})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Colors */}
      <div className="border-b pb-4 border-gray-300">
        <button
          onClick={() => toggleSection("colors")}
          className="flex justify-between items-center w-full mb-2"
        >
          <span className="font-medium">Color</span>
          {expandedSections.colors ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {expandedSections.colors && (
          <div className="space-y-2">
            {colors.map((color) => (
              <label key={color.name} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.colors.includes(color.name)}
                  onChange={() => handleCheckboxChange("colors", color.name)}
                  className="rounded"
                />
                <span className="text-sm text-gray-600">
                  {color.name} ({color.count})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Discount Range */}
      <div className="border-b pb-4 border-gray-300">
        <button
          onClick={() => toggleSection("discount")}
          className="flex justify-between items-center w-full mb-2"
        >
          <span className="font-medium">Discount Range</span>
          {expandedSections.discount ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {expandedSections.discount && (
          <div className="space-y-2">
            {discountRanges.map((range) => (
              <label key={range.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="discount"
                  checked={filters.discountRange === range.value}
                  onChange={() =>
                    setFilters((prev: any) => ({
                      ...prev,
                      discountRange: range.value,
                    }))
                  }
                  className="rounded"
                />
                <span className="text-sm text-gray-700">{range.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
