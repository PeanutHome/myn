"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, Heart, User, Menu, X, Home, List } from "lucide-react";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const menuItems = {
    men: {
      categories: [
        {
          name: "Topwear",
          items: [
            "T-Shirts",
            "Casual Shirts",
            "Formal Shirts",
            "Sweatshirts",
            "Sweaters",
            "Jackets",
            "Blazers & Coats",
            "Suits",
            "Rain Jackets",
          ],
        },
        {
          name: "Indian & Festive Wear",
          items: [
            "Kurtas & Kurta Sets",
            "Sherwanis",
            "Nehru Jackets",
            "Dhotis",
          ],
        },
        {
          name: "Bottomwear",
          items: [
            "Jeans",
            "Casual Trousers",
            "Formal Trousers",
            "Shorts",
            "Track Pants & Joggers",
          ],
        },
        {
          name: "Innerwear & Sleepwear",
          items: [
            "Briefs & Trunks",
            "Boxers",
            "Vests",
            "Sleepwear & Loungewear",
            "Thermals",
          ],
        },
        {
          name: "Plus Size",
          items: ["Plus Size"],
        },
        {
          name: "Footwear",
          items: [
            "Casual Shoes",
            "Sports Shoes",
            "Formal Shoes",
            "Sneakers",
            "Sandals & Floaters",
            "Flip Flops",
            "Socks",
          ],
        },
        {
          name: "Personal Care & Grooming",
          items: ["Sunglasses & Frames", "Watches"],
        },
        {
          name: "Sports & Active Wear",
          items: [
            "Sports Shoes",
            "Sports Sandals",
            "Active T-Shirts",
            "Track Pants & Shorts",
            "Tracksuits",
            "Jackets & Sweatshirts",
            "Sports Accessories",
            "Swimwear",
          ],
        },
        {
          name: "Gadgets",
          items: [
            "Smart Wearables",
            "Fitness Gadgets",
            "Headphones",
            "Speakers",
          ],
        },
        {
          name: "Fashion Accessories",
          items: [
            "Wallets",
            "Belts",
            "Perfumes & Body Mists",
            "Trimmers",
            "Deodorants",
            "Ties, Cufflinks & Pocket Squares",
            "Accessory Gift Sets",
            "Caps & Hats",
            "Mufflers, Scarves & Gloves",
            "Phone Cases",
            "Rings & Wristwear",
            "Helmets",
          ],
        },
        {
          name: "Bags & Backpacks",
          items: ["Luggages & Trolleys"],
        },
      ],
      image:
        "https://assets.myntassets.com/f_webp,q_95,w_400/assets/images/2020/8/31/403eda4d-9092-4aa7-aea1-f52f2ae5194f1598898503038-Activewear_DK.jpg",
    },
    women: {
      categories: [
        { name: "Western Wear", items: ["Dresses", "Tops", "Jeans", "Skirts"] },
        {
          name: "Ethnic Wear",
          items: ["Sarees", "Kurtis", "Lehengas", "Salwar Suits"],
        },
        {
          name: "Footwear",
          items: ["Heels", "Flats", "Sandals", "Sports Shoes"],
        },
        {
          name: "Accessories",
          items: ["Handbags", "Jewellery", "Watches", "Sunglasses"],
        },
      ],
      image:
        "https://assets.myntassets.com/f_webp,q_95,w_400/assets/images/2020/8/31/efc4d733-09b3-439c-bd08-3d4f1b0f5d481598898503037-Workwear_DK.jpg",
    },
    kids: {
      categories: [
        {
          name: "Boys Clothing",
          items: ["T-Shirts", "Shirts", "Jeans", "Shorts"],
        },
        {
          name: "Girls Clothing",
          items: ["Dresses", "Tops", "Jeans", "Skirts"],
        },
        {
          name: "Footwear",
          items: ["Casual Shoes", "Sports Shoes", "Sandals", "Flip Flops"],
        },
        {
          name: "Toys",
          items: ["Action Figures", "Dolls", "Board Games", "Remote Control"],
        },
      ],
      image:
        "https://assets.myntassets.com/f_webp,q_95,w_400/assets/images/2020/8/31/0c9b43a4-e5a5-4c90-9c1a-40a7e9b8d1e11598895030339-Kids_DK.jpg",
    },
    "home-living": {
      categories: [
        {
          name: "Home Decor",
          items: ["Wall Art", "Cushions", "Curtains", "Rugs"],
        },
        {
          name: "Kitchen",
          items: ["Cookware", "Dinnerware", "Appliances", "Storage"],
        },
        {
          name: "Bath",
          items: ["Towels", "Bath Mats", "Shower Curtains", "Accessories"],
        },
        { name: "Furniture", items: ["Sofas", "Beds", "Tables", "Chairs"] },
      ],
      image:
        "https://assets.myntassets.com/f_webp,q_95,w_400/assets/images/2020/8/31/4a9c2b3d-1c94-4e88-9d5c-5f6c5c5c5c5c1598895030340-Home_DK.jpg",
    },
    beauty: {
      categories: [
        {
          name: "Makeup",
          items: ["Lipstick", "Foundation", "Eyeshadow", "Mascara"],
        },
        {
          name: "Skincare",
          items: ["Face Wash", "Moisturizer", "Serum", "Sunscreen"],
        },
        {
          name: "Haircare",
          items: ["Shampoo", "Conditioner", "Hair Oil", "Styling"],
        },
        {
          name: "Fragrances",
          items: ["Perfumes", "Deodorants", "Body Mists", "Colognes"],
        },
      ],
      image:
        "https://assets.myntassets.com/f_webp,q_95,w_400/assets/images/2020/8/31/5a9c2b3d-1c94-4e88-9d5c-5f6c5c5c5c5c1598895030341-Beauty_DK.jpg",
    },
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-pink-500">
              MYNTRA
            </Link>
            <div className="flex space-x-6">
              {Object.entries(menuItems).map(([key, value]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(key)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={`/${key}`}
                    className={`hover:text-pink-500 font-semibold py-6 block ${
                      activeMenu === key
                        ? "text-pink-500 border-b-2 border-pink-500"
                        : ""
                    }`}
                  >
                    {key.toUpperCase()}
                  </Link>

                  {activeMenu === key && (
                    <div className="absolute top-full left-0 w-[1200px] bg-white shadow-lg rounded-b-lg z-50">
                      <div className="grid grid-cols-5 gap-4 p-6">
                        {value.categories.map((category, index) => (
                          <div key={index} className="space-y-2">
                            <h3 className="font-semibold text-gray-800">
                              {category.name}
                            </h3>
                            <ul className="space-y-1">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <Link
                                    href={`/${key}/${item
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`}
                                    className="text-gray-600 hover:text-pink-500 text-sm"
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-[400px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
              />
              <Search
                className="absolute right-3 top-2.5 text-gray-400"
                size={20}
              />
            </div>
            <Link href="/profile" className="hover:text-pink-500">
              <User size={24} />
            </Link>
            <Link href="/wishlist" className="hover:text-pink-500">
              <Heart size={24} />
            </Link>
            <Link href="/cart" className="hover:text-pink-500">
              <ShoppingBag size={24} />
            </Link>
          </div>
        </div>
        {/* Mobile Navbar */}
        <div className="flex md:hidden justify-between items-center h-14 relative">
          <button
            className="p-2 focus:outline-none"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={28} />
          </button>
          <Link href="/" className="text-xl font-bold text-pink-500">
            MYNTRA
          </Link>
          <div className="flex items-center space-x-2">
            <Link href="/wishlist" className="hover:text-pink-500">
              <Heart size={22} />
            </Link>
            <Link href="/cart" className="hover:text-pink-500">
              <ShoppingBag size={22} />
            </Link>
          </div>
          {/* Drawer Overlay */}
          {drawerOpen && (
            <div className="fixed inset-0 z-50">
              <div
                className="absolute inset-0 bg-white/70 backdrop-blur-sm"
                onClick={() => setDrawerOpen(false)}
              ></div>
              <div className="fixed top-0 left-0 h-full w-72 max-w-full bg-white shadow-lg z-50 flex flex-col transition-transform duration-300">
                <div className="flex items-center justify-between px-4 py-3 border-b">
                  <span className="text-lg font-bold text-pink-500">MYNTRA</span>
                  <button
                    className="p-1 focus:outline-none"
                    onClick={() => setDrawerOpen(false)}
                    aria-label="Close navigation menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {Object.entries(menuItems).map(([key, value]) => (
                    <div key={key}>
                      <button
                        className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none"
                        onClick={() => setMobileDropdown(mobileDropdown === key ? null : key)}
                      >
                        <span>{key.toUpperCase()}</span>
                        <svg
                          className={`w-4 h-4 ml-2 transform transition-transform ${mobileDropdown === key ? "rotate-180" : "rotate-0"}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {mobileDropdown === key && (
                        <div className="bg-gray-50">
                          {value.categories.map((category, idx) => (
                            <div key={idx} className="px-6 py-2 border-b border-gray-100">
                              <div className="font-medium text-gray-800 text-sm mb-1">{category.name}</div>
                              <ul className="space-y-1">
                                {category.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <Link
                                      href={`/${key}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                      className="block text-gray-600 hover:text-pink-500 text-xs py-1"
                                      onClick={() => setDrawerOpen(false)}
                                    >
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="border-t px-4 py-3 flex items-center space-x-4">
                  <Link href="/profile" className="hover:text-pink-500 flex items-center space-x-1">
                    <User size={20} />
                    <span className="text-sm">Profile</span>
                  </Link>
                  <form className="flex-1">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-pink-500"
                      />
                      <Search className="absolute right-2 top-2 text-gray-400" size={16} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 flex justify-around items-center h-14 shadow-lg">
        <Link href="/" className="flex flex-col items-center justify-center text-xs text-gray-700 hover:text-pink-500 flex-1 py-1">
          <Home size={22} />
          <span>Home</span>
        </Link>
        <Link href="/category" className="flex flex-col items-center justify-center text-xs text-gray-700 hover:text-pink-500 flex-1 py-1">
          <List size={22} />
          <span>Category</span>
        </Link>
        <Link href="/cart" className="flex flex-col items-center justify-center text-xs text-gray-700 hover:text-pink-500 flex-1 py-1">
          <ShoppingBag size={22} />
          <span>Cart</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center justify-center text-xs text-gray-700 hover:text-pink-500 flex-1 py-1">
          <User size={22} />
          <span>Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
