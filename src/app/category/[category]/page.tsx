"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ProductCard } from "@/components/ProductCard";
import { ChevronDown } from "lucide-react";

interface FilterState {
  categories: string[];
  brands: string[];
  priceRange: [number, number];
  colors: string[];
  discountRange: number;
  bundle: string[];
  size: string[];
  countryOfOrigin: string[];
}

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  rating: number;
  reviews: number;
}

const sortOptions = [
  "Recommended",
  "What's New",
  "Popularity",
  "Better Discount",
  "Price: High to Low",
  "Price: Low to High",
  "Customer Rating",
];

const bundleOptions = [
  "Buy 2 Get 1 Free",
  "Buy 3 Get 2 Free",
  "Buy 4 Get 3 Free",
];

const sizeOptions = ["SM", "MD", "LG", "XL", "XXL"];

const countryOptions = ["India", "China", "USA", "UK", "Germany", "Japan"];

type FilterType = keyof FilterState;
type ArrayFilterType = Extract<
  FilterType,
  "categories" | "brands" | "colors" | "bundle" | "size" | "countryOfOrigin"
>;

export default function CategoryPage() {
  const params = useParams();
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    priceRange: [0, 10000],
    colors: [],
    discountRange: 0,
    bundle: [],
    size: [],
    countryOfOrigin: [],
  });

  const [showBundle, setShowBundle] = useState(false);
  const [showSize, setShowSize] = useState(false);
  const [showCountry, setShowCountry] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Recommended");

  const products: Product[] = [
    {
      id: "1",
      name: "Buds 3 with upto 39 dB ANC",
      brand: "One Plus",
      price: 4499,
      originalPrice: 6499,
      discount: 200,
      image:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/26979150/2024/1/22/7464c246-060b-4f84-a8d7-cc90db1f25c01705918411022-OnePlus-Unisex-Headphones-4901705918410852-1.jpg",
      rating: 4.5,
      reviews: 4500,
    },
    {
      id: "2",
      name: "Men Slim Fit Cotton T-shirt",
      brand: "H&M",
      price: 799,
      originalPrice: 999,
      discount: 200,
      image:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/APRIL/24/9ImCMej9_399ee12af62842939631e2694b1353fc.jpg",
      rating: 4.2,
      reviews: 1200,
    },
    {
      id: "3",
      name: "Women's Running Shoes",
      brand: "Nike",
      price: 4999,
      originalPrice: 6999,
      discount: 2000,
      image:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/27334896/2024/2/15/02e14095-3699-4f4e-806a-ce9e608bc2a41707993091398-UA-W-Charged-Rogue-4-5871707993091208-1.jpg",
      rating: 4.7,
      reviews: 890,
    },
    {
      id: "4",
      name: "Men's Denim Jacket",
      brand: "Levi's",
      price: 3499,
      originalPrice: 4999,
      discount: 1500,
      image:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/25/HwJFjlPe_065376c682f3473ba39e9926d274ebb9.jpg",
      rating: 4.4,
      reviews: 650,
    },
    {
      id: "5",
      name: "Women's Handbag",
      brand: "Zara",
      price: 2499,
      originalPrice: 3999,
      discount: 1500,
      image:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2407561/2024/3/14/5c4d37d4-8ada-4a84-8656-52c1853656e31710413400262-Lavie-Yalta-Women-Pink-Large-Tote-Handbag-8631710413399947-11.jpg",
      rating: 4.3,
      reviews: 420,
    },
    {
      id: "6",
      name: "Men's Formal Shirt",
      brand: "Van Heusen",
      price: 1299,
      originalPrice: 1999,
      discount: 700,
      image:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/25989674/2024/5/15/0ef33c77-5703-4fe2-8de9-92e8b6f2c77d1715754639503-Arrow-Men-Shirts-6781715754639144-1.jpg",
      rating: 4.1,
      reviews: 380,
    },
    {
      id: "7",
      name: "Women's Watch",
      brand: "Fossil",
      price: 5999,
      originalPrice: 7999,
      discount: 2000,
      image:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20874644/2024/2/22/dc18f08e-0756-400d-9c4a-c0783afa336f1708604642808-Titan-Women-Brown-Brass-Dial--Brown-Stainless-Steel-Bracelet-11.jpg",
      rating: 4.6,
      reviews: 520,
    },
    {
      id: "8",
      name: "Men's Sports Shoes",
      brand: "Adidas",
      price: 3999,
      originalPrice: 5999,
      discount: 2000,
      image:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/25165468/2023/9/26/7d2bb9b0-289d-4aae-8b97-e991fdc805e71695701710268ASICSGEL-Kayano30MenRunningSportsShoes1.jpg",
      rating: 4.4,
      reviews: 780,
    },
    {
      id: "9",
      name: "Women's Sunglasses",
      brand: "Ray-Ban",
      price: 4999,
      originalPrice: 6999,
      discount: 2000,
      image:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/29191418/2024/4/25/9c73eaf6-0829-464d-abaa-fdbf3e57e4611714045035115Bluelightglasses1.jpg",
      rating: 4.8,
      reviews: 320,
    },
    {
      id: "10",
      name: "Men's Backpack",
      brand: "American Tourister",
      price: 1999,
      originalPrice: 2999,
      discount: 1000,
      image:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/31255507/2024/10/24/4a2fcc28-a044-4ba0-8c48-b0a598cb544f1729778558030-Red-Lemon-Unisex-Backpack-9461729778557611-1.jpg",
      rating: 4.3,
      reviews: 450,
    },
    {
      id: "11",
      name: "Women's Dress",
      brand: "Forever 21",
      price: 1499,
      originalPrice: 2499,
      discount: 1000,
      image:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/OCTOBER/21/6yluxQL3_d01b23632c1c409ba30c65d6ecb9ca15.jpg",
      rating: 4.2,
      reviews: 290,
    },
    {
      id: "12",
      name: "Men's Smart Watch",
      brand: "Samsung",
      price: 9999,
      originalPrice: 14999,
      discount: 5000,
      image:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/30141373/2024/7/9/8b220f56-0313-47ab-9c7a-5aff8b22769c1720504675649-Watch-Pro-2-3131720504675576-1.jpg",
      rating: 4.7,
      reviews: 890,
    },
  ];

  const handleCheckboxChange = (type: ArrayFilterType, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((item: string) => item !== value)
        : [...prev[type], value],
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Top Filters */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4">
                {/* Bundle Filter */}
                <div className="relative">
                  <button
                    onClick={() => setShowBundle(!showBundle)}
                    className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50"
                  >
                    Bundle
                    <ChevronDown size={16} />
                  </button>
                  {showBundle && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white border rounded-md shadow-lg z-10">
                      {bundleOptions.map((option) => (
                        <label
                          key={option}
                          className="flex items-center px-4 py-2 hover:bg-gray-50"
                        >
                          <input
                            type="checkbox"
                            checked={filters.bundle.includes(option)}
                            onChange={() =>
                              handleCheckboxChange("bundle", option)
                            }
                            className="mr-2"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Size Filter */}
                <div className="relative">
                  <button
                    onClick={() => setShowSize(!showSize)}
                    className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50"
                  >
                    Size
                    <ChevronDown size={16} />
                  </button>
                  {showSize && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white border rounded-md shadow-lg z-10">
                      {sizeOptions.map((option) => (
                        <label
                          key={option}
                          className="flex items-center px-4 py-2 hover:bg-gray-50"
                        >
                          <input
                            type="checkbox"
                            checked={filters.size.includes(option)}
                            onChange={() =>
                              handleCheckboxChange("size", option)
                            }
                            className="mr-2"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Country of Origin Filter */}
                <div className="relative">
                  <button
                    onClick={() => setShowCountry(!showCountry)}
                    className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50"
                  >
                    Country of Origin
                    <ChevronDown size={16} />
                  </button>
                  {showCountry && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white border rounded-md shadow-lg z-10">
                      {countryOptions.map((option) => (
                        <label
                          key={option}
                          className="flex items-center px-4 py-2 hover:bg-gray-50"
                        >
                          <input
                            type="checkbox"
                            checked={filters.countryOfOrigin.includes(option)}
                            onChange={() =>
                              handleCheckboxChange("countryOfOrigin", option)
                            }
                            className="mr-2"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="px-4 py-2 border rounded-md appearance-none bg-white pr-8"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
