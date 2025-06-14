import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function DetailsPage() {
  // Product details
  const product = {
    brand: "L'Oreal Professionnel",
    name: "Absolut Repair Shampoo for Dry Hair with Protein & Omega-9 - 300ml",
    price: 695,
    mrp: 850,
    discount: "18% OFF",
    rating: 4.3,
    ratingCount: 827,
    // Using the provided Myntra asset URL
    images: [
      "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/9925133/2025/2/25/f11084b8-396a-4506-ad44-55ead4bc7dca1740474715268-LOreal-Professionnel-Absolut-Repair-Shampoo-for-Dry--Damaged-1.jpg",
      "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/9925133/2025/2/25/1064a3e2-06bb-4301-a61c-af1a576813f01740474715227-LOreal-Professionnel-Absolut-Repair-Shampoo-for-Dry--Damaged-2.jpg",
      "https://metrics.brightcove.com/v2/tracker?domain=videocloud&platform=video-js&session=4d0fc8d241b90662123b6d0&account=5745608584001&destination=https%3A%2F%2Fwww.myntra.com%2Fshampoo%2Floreal%2Bprofessionnel%2Floreal-professionnel-absolut-repair-shampoo-for-dry-hair-with-protein--omega-9---300ml%2F9925133%2Fbuy&platform_version=6.67.7&player=players.brightcove.com%2F5745608584001%2Fdefault_default&player_name=Brightcove%20Default%20Player&source=https%3A%2F%2Fwww.myntra.com%2Fshampoo&autoplay=false&ads_enabled=false&time=1749625334480&event=play_request&video=6370460838112&video_name=9925133&reference_id=rw-9925133_cae700&custom_fields=&video_data=&video_ads_supported=true&&video_duration=13&media_url=https%3A%2F%2Fmanifest.prod.boltdns.net%2Fmanifest%2Fv1%2Fhls%2Fv4%2Fclear%2F5745608584001%2Fd25f0bd3-fb5e-4c7d-b8b8-40e9ccee4326%2F10s%2Fmaster.m3u8%3Ffastly_token%3DNjg0OTVjOTNfOGZlMjY2N2U2MWU3ZDIyNzFhNzQyZTZjNjNlZWY3MmRkODA1YjA5ODdmYjU1Zjc1YjVlMDBiMmQ5MzllMGUxMg%253D%253D&seq=31_0",
      "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/9925133/2025/2/25/1bfd3d88-b328-4073-a3c3-cf69bc94e9121740474715144-LOreal-Professionnel-Absolut-Repair-Shampoo-for-Dry--Damaged-4.jpg",
      "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/9925133/2025/2/25/a006aaff-60be-4259-a1f7-4e3664594c521740474715101-LOreal-Professionnel-Absolut-Repair-Shampoo-for-Dry--Damaged-5.jpg",
      "https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/9925133/2025/2/25/c13296d9-e8dc-4c12-92e0-7dfaf45799261740474715059-LOreal-Professionnel-Absolut-Repair-Shampoo-for-Dry--Damaged-6.jpg"
    ],
    size: "300ml",
    delivery: "3-4 days",
    description: "Repair and nourish your dry, damaged hair with L'Oreal Professionnel Absolut Repair Shampoo. Enriched with Protein and Omega-9, this professional formula works to restore hair fiber and provide deep nourishment.",
    features: [
      "Repairs damaged hair",
      "Enriched with Protein & Omega-9",
      "Professional salon formula",
      "Suitable for dry and damaged hair",
      "Restores hair fiber",
    ],
  };

  // Similar products data
  const similarProducts = [
    {
      id: 1,
      brand: "Pilgrim",
      name: "Patua & Keratin Shampoo- 200ml",
      price: 316,
      mrp: 395,
      discount: "20% OFF",
      rating: 4.4,
      image: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/20868022/2024/8/27/3132249b-9511-4859-84db-d988bc4b66751724742180639-Pilgrim-Advanced-Patua--Keratin-Smoothening-Shampoo-for-Dry--1.jpg"
    },
    {
      id: 2,
      brand: "Pilgrim",
      name: "Australian Tea Tree Shampoo",
      price: 316,
      mrp: 395,
      discount: "20% OFF",
      rating: 4.4,
      image: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/29837693/2024/8/27/7d6bd060-8799-4037-84b8-b9c75976295c1724742307542-Pilgrim-Australian-Tea-Tree-Anti-Dandruff-Shampoo-With-Salic-1.jpg"
    },
    {
      id: 3,
      brand: "Pilgrim",
      name: "Anti Hairfall Range Shampoo",
      price: 276,
      mrp: 345,
      discount: "20% OFF",
      rating: 4.3,
      image: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/24658424/2024/8/27/ab17badb-dc3e-49b2-b56e-7dac6d62c3371724742252817-Pilgrim-Rosemary--Biotin-Anti-Hairfall-Shampoo-for-Reducing--1.jpg"
    },
    {
      id: 4,
      brand: "Pilgrim",
      name: "Sulfate Free Shampoo",
      price: 316,
      mrp: 395,
      discount: "20% OFF",
      rating: 4.2,
      image: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15797462/2024/8/27/7937c6e2-0108-48b6-be38-eb180ab1aca81724742145046-Pilgrim-Sulfate-Free-Shampoo-with-Argan-Oil-Camellia--White--1.jpg"
    },
    {
      id: 5,
      brand: "BBLUNT",
      name: "Hair Fall Control Shampoo",
      price: 339,
      mrp: 399,
      discount: "15% OFF",
      rating: 4.4,
      image: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/22466682/2024/7/16/128322f5-0819-4b2c-89ba-cf526e9f93f11721107395507-BBLUNT-Hair-Fall-Control-Shampoo-with-Pea-Protein--Caffeine--12.jpg"
    },
    {
      id: 6,
      brand: "Bare Anatomy",
      name: "Ultra Smoothing Shampoo- 250ML",
      price: 499,
      mrp: 595,
      discount: "16% OFF",
      rating: 4.5,
      image: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/20198296/2024/7/25/e858d7dd-4f23-4815-8dc9-2c0fdc6fc60d1721901844634-Bare-Anatomy-Expert-Ultra-Smoothing-Shampoo--250ML-725172190-11.jpg"
    },
    {
      id: 7,
      brand: "Schwarzkopf PROFESSIONAL",
      name: "Frizz Away Shampoo",
      price: 897,
      mrp: 1150,
      discount: "22% OFF",
      rating: 4.5,
      image: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10092469/2024/10/15/14653959-87e5-4b17-b285-b83c412ac5cf1728979591117-Schwarzkopf-PROFESSIONAL-Bonacure-Frizz-Away-Shampoo-with-Ba-1.jpg"
    },
    {
      id: 8,
      brand: "Bare Anatomy",
      name: "5X Hair Fall Control Shampoo",
      price: 247,
      mrp: 349,
      discount: "29% OFF",
      rating: 4.4,
      image: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2024/AUGUST/29/EXvyAZvH_f0a24173bcf6494cb84fe387f5b9f7df.jpg"
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-6">
    

      {/* Breadcrumb */}
      <div className="container mx-auto px-3 py-2 text-xs text-gray-500">
        <p>Home / Personal Care / Hair / Shampoo / {product.brand}</p>
      </div>

      {/* Product Details Section */}
      <div className="container mx-auto px-3 py-4">
        <div className="flex flex-col md:flex-row">
          {/* Left Column - Images */}
          <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
            <div className="grid grid-cols-2 gap-1.5">
              {product.images.map((imageUrl, index) => (
                <div key={index} className="overflow-hidden">
                  <div className="aspect-square relative">
                    <img 
                      src={imageUrl} 
                      alt={`${product.brand} ${product.name} - View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="md:w-1/2 md:pl-4">
            <h1 className="text-base font-bold text-gray-700">{product.brand}</h1>
            <h1 className="text-sm text-gray-600 mb-1">{product.name}</h1>
            
            {/* Ratings */}
            <div className="flex items-center mb-3">
              <div className="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded flex items-center mr-1.5">
                {product.rating} ★
              </div>
              <div className="text-gray-500 text-xs">| {product.ratingCount} Ratings</div>
            </div>

            <div className="h-px bg-gray-200 my-3"></div>

            {/* Price */}
            <div className="flex items-center mb-1.5">
              <span className="text-xl font-bold mr-2">₹{product.price}</span>
              <span className="text-gray-500 text-sm line-through mr-2">MRP ₹{product.mrp}</span>
              <span className="text-orange-500 text-xs font-medium">{product.discount}</span>
            </div>

            {/* Inclusive of taxes */}
            <p className="text-green-600 text-xs mb-3">inclusive of all taxes</p>

            {/* Price Details */}
            <div className="border border-gray-200 p-2 mb-3 rounded-md text-sm">
              <div className="font-bold mb-1 text-sm">Price Details</div>
              <div className="flex justify-between text-xs mb-1">
                <span>Maximum Retail Price</span>
                <span>Rs. {product.mrp}</span>
              </div>
              <div className="flex justify-between text-xs mb-1">
                <span>(Incl. of all taxes)</span>
                <span>@ Rs. {(product.mrp/300).toFixed(2)} per ml</span>
              </div>
              <div className="flex justify-between text-xs mb-1">
                <span>Net Quantity</span>
                <span>300 ml</span>
              </div>
              <hr className="my-1.5" />
              <div className="flex justify-between text-xs mb-1">
                <span>Discount</span>
                <span>{product.discount}</span>
              </div>
              <div className="flex justify-between text-xs mb-1 font-bold">
                <span>Selling Price</span>
                <span>Rs. {product.price}</span>
              </div>
              <div className="text-xs">(Incl. of all taxes)</div>
            </div>

            {/* Size */}
            <div className="mb-3">
              <div className="flex justify-between mb-1.5">
                <h4 className="font-semibold text-sm">SELECT SIZE</h4>
              </div>
              <div className="flex gap-2">
                <button className="border-2 border-pink-500 px-3 py-1.5 rounded-md font-medium text-sm text-gray-700">
                  280-300 ML
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-2 mb-4">
              <Link href="/class" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-3 rounded-md flex-grow flex items-center justify-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                ADD TO BAG
              </Link>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-2 px-3 rounded-md flex-grow flex items-center justify-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                WISHLIST
              </button>
            </div>

            {/* Seller Info */}
            <div className="flex justify-between text-xs mb-3 border-b border-gray-200 pb-2">
              <div>
                <span className="text-gray-700">Seller: </span>
                <span className="text-pink-500">Omnitech Retail</span>
              </div>
            </div>

            {/* Delivery */}
            <div className="mb-4">
              <h4 className="font-semibold text-sm mb-2 flex items-center">
                Delivery Options
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </h4>
              <div className="flex items-center text-gray-700 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <form className="flex">
                  <input type="text" placeholder="Enter pincode" className="border border-gray-300 rounded-l px-2 py-1 w-28 text-xs" />
                  <button className="bg-white border border-gray-300 border-l-0 rounded-r px-2 py-1 text-xs font-medium">Check</button>
                </form>
              </div>
              <p className="text-gray-600 text-xs">Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
            </div>

            {/* Additional Info */}
            <div className="mb-4">
              <div className="flex flex-col space-y-2 text-xs">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>100% Original Products</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Pay on delivery might be available</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Easy 14 days exchanges</span>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>This item is only exchangeable for the same or a different size, if available, and cannot be returned</span>
                </div>
              </div>
            </div>

            {/* Best Offers */}
            <div className="mb-4">
              <h4 className="font-semibold text-sm mb-2 flex items-center">
                BEST OFFERS 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a4 4 0 00-4-4H8.8a4 4 0 00-3.6 2.3L3 8m9 4v5m-9-7h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9a2 2 0 012-2zm8 2h2m-2 0h-6m4 0v5" />
                </svg>
              </h4>
              <div className="border border-gray-200 rounded-md p-2 mb-2">
                <div className="font-bold text-xs">Best Price: <span className="text-pink-500">Rs. 569</span></div>
                <ul className="mt-1 space-y-1">
                  <li className="flex text-xs">
                    <div className="h-1.5 w-1.5 bg-gray-500 rounded-full mt-1 mr-1.5"></div>
                    <div>
                      Coupon Discount: <span className="font-medium">Rs. 142 off (check cart for final savings)</span>
                    </div>
                  </li>
                  <li className="flex text-xs">
                    <div className="h-1.5 w-1.5 bg-gray-500 rounded-full mt-1 mr-1.5"></div>
                    <div>
                      Applicable on: <span className="font-medium">Orders above Rs. 999</span>
                    </div>
                  </li>
                  <li className="flex text-xs">
                    <div className="h-1.5 w-1.5 bg-gray-500 rounded-full mt-1 mr-1.5"></div>
                    <div>
                      Coupon code: <span className="font-bold">LPROFFER</span>
                    </div>
                  </li>
                </ul>
                <a href="#" className="text-pink-500 text-xs font-medium mt-1 inline-block">View Eligible Products</a>
              </div>
              <div className="text-xs font-medium text-pink-500 cursor-pointer">View More Offers</div>
            </div>

            {/* Product Details */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-sm">PRODUCT DETAILS</h4>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <p className="text-gray-700 text-xs mb-3">{product.description}</p>
              
              {/* Product Highlights */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-2 rounded text-xs">
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="mb-3">
                <h4 className="font-semibold text-sm mb-1">Specifications</h4>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <div className="py-1.5 border-b border-gray-100">Concerns</div>
                  <div className="py-1.5 border-b border-gray-100">Damaged</div>
                  <div className="py-1.5 border-b border-gray-100">Formulation</div>
                  <div className="py-1.5 border-b border-gray-100">Liquid</div>
                  <div className="py-1.5 border-b border-gray-100">Hair Type</div>
                  <div className="py-1.5 border-b border-gray-100">Damaged</div>
                  <div className="py-1.5 border-b border-gray-100">Net Quantity Unit</div>
                  <div className="py-1.5 border-b border-gray-100">ml</div>
                  <div className="py-1.5 border-b border-gray-100">Preferences</div>
                  <div className="py-1.5 border-b border-gray-100">Cruelty-Free</div>
                  <div className="py-1.5 border-b border-gray-100">Sustainable</div>
                  <div className="py-1.5 border-b border-gray-100">Regular</div>
                </div>
              </div>
            </div>

            {/* Product Code */}
            <div className="text-xs text-gray-500 mb-1.5">
              <span>Product Code: </span>
              <span className="font-medium">9925133</span>
            </div>
            <div className="text-xs text-gray-500 mb-6">
              <span>Seller: </span>
              <span className="font-medium">Omnitech Retail</span>
              <span className="text-pink-500 ml-1.5 cursor-pointer">View Supplier Information</span>
            </div>

            {/* Ratings & Reviews Section */}
            <div className="border-t pt-3">
              {/* Ratings Overview */}
              <div className="mb-4">
                <div className="flex items-start mb-2">
                  <h3 className="text-sm font-semibold mr-1">Ratings</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div className="flex items-start">
                  <div className="w-1/3">
                    <div className="flex items-center mb-1">
                      <span className="text-lg font-bold mr-1">4.5</span>
                      <span className="bg-green-500 text-white rounded-sm p-0.5 text-xs">★</span>
                    </div>
                    <div className="text-gray-600 text-xs">18.6k Verified Buyers</div>
                  </div>
                  <div className="w-2/3">
                    <div className="space-y-1">
                      {/* Rating Bars */}
                      <div className="flex items-center">
                        <div className="w-6 text-xs text-right mr-1">5 ★</div>
                        <div className="flex-grow bg-gray-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full rounded-full" style={{ width: '73%' }}></div>
                        </div>
                        <div className="w-10 text-right text-xs text-gray-600 ml-1">13556</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 text-xs text-right mr-1">4 ★</div>
                        <div className="flex-grow bg-gray-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full rounded-full" style={{ width: '17%' }}></div>
                        </div>
                        <div className="w-10 text-right text-xs text-gray-600 ml-1">3203</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 text-xs text-right mr-1">3 ★</div>
                        <div className="flex-grow bg-gray-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full rounded-full" style={{ width: '4%' }}></div>
                        </div>
                        <div className="w-10 text-right text-xs text-gray-600 ml-1">812</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 text-xs text-right mr-1">2 ★</div>
                        <div className="flex-grow bg-gray-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full rounded-full" style={{ width: '1.5%' }}></div>
                        </div>
                        <div className="w-10 text-right text-xs text-gray-600 ml-1">272</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 text-xs text-right mr-1">1 ★</div>
                        <div className="flex-grow bg-gray-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full rounded-full" style={{ width: '4%' }}></div>
                        </div>
                        <div className="w-10 text-right text-xs text-gray-600 ml-1">727</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Photos */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">Customer Photos (356)</h3>
                <div className="flex space-x-1.5 overflow-x-auto pb-1">
                  <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                    <img src="https://assets.myntassets.com/h_150,q_75,w_150,c_fill,fl_progressive/assets/images/2020/10/31/843b256a-5fc1-4e60-91fa-0d991125f9f11604085896156-IMG_20201031_005402.jpg" alt="Customer photo" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                    <img src="https://assets.myntassets.com/h_150,q_75,w_150,c_fill,fl_progressive/assets/images/2021/6/5/01b5ff4b-8a0d-48b8-b5e0-9476d21b734e1622866630294-IMG_20210605_090840.jpg" alt="Customer photo" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                    <img src="https://assets.myntassets.com/h_150,q_75,w_150,c_fill,fl_progressive/assets/images/2020/9/17/eec6a9de-aa66-411b-a3ab-a801188538a11600365288906-image.jpg" alt="Customer photo" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Customer Reviews */}
              <div>
                <h3 className="text-sm font-semibold mb-2">Customer Reviews (1965)</h3>
                
                {/* Review 1 */}
                <div className="border-b pb-2 mb-2">
                  <div className="flex mb-1">
                    <span className="bg-green-500 text-white text-xs px-1 py-0.5 rounded flex items-center mr-1">
                      5 ★
                    </span>
                  </div>
                  <p className="text-gray-700 text-xs mb-1.5 line-clamp-2">
                    Oh My God! I don't know where to start. The effect this product had on my hair just after a single use is unbelievable. I have curly hair so it's quite frizzy and requires a lot of moisture and hair wash days were kinda not the best days for me since I could never keep my original shampooed hair as it would become unmanageable.
                  </p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <div className="flex space-x-2">
                      <span>Debdatta Das</span>
                      <span>27 Sept 2024</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-0.5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        18
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        1
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Review 2 with image */}
                <div className="border-b pb-2 mb-2">
                  <div className="flex mb-1">
                    <span className="bg-green-500 text-white text-xs px-1 py-0.5 rounded flex items-center mr-1">
                      5 ★
                    </span>
                  </div>
                  <p className="text-gray-700 text-xs mb-1.5 line-clamp-2">
                    4.5/5 stars! I'm really impressed with this shampoo! Although the fragrance is extremely mild (almost undetectable), the performance is top-notch. This shampoo is a lifesaver for damaged hair!
                  </p>
                  
                  {/* Review image */}
                  <div className="mb-1.5">
                    <div className="w-14 h-14 rounded overflow-hidden">
                      <img src="https://assets.myntassets.com/h_150,q_75,w_150,c_fill,fl_progressive/assets/images/2024/12/7/b70ce174-222b-41e9-b7a0-f3cbde77e54a1733586469597-imageundefined.jpg" alt="Customer review photo" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-500">
                    <div className="flex space-x-2">
                      <span>Shreya</span>
                      <span>7 Dec 2024</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-0.5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        2
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        0
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* View all reviews link */}
                <div className="text-center mt-3">
                  <a href="/reviews" className="text-pink-500 text-xs font-medium hover:underline">View all 1965 reviews</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      <div className="container mx-auto px-3 mt-6">
        <h2 className="text-base font-bold mb-3">SIMILAR PRODUCTS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {similarProducts.map((item) => (
            <Link key={item.id} href={`/details?id=${item.id}`} className="block">
              <div className="bg-white hover:shadow-sm transition overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img 
                    src={item.image} 
                    alt={`${item.brand} ${item.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2">
                  <div className="flex items-center mb-0.5">
                    <span className="text-xs bg-green-500 text-white px-1 rounded flex items-center mr-1">
                      {item.rating} ★
                    </span>
                  </div>
                  <h3 className="font-medium text-xs text-gray-800 truncate">{item.brand}</h3>
                  <p className="text-gray-600 text-xs truncate">{item.name}</p>
                  <div className="mt-1 flex items-center">
                    <span className="font-semibold text-xs">₹{item.price}</span>
                    <span className="text-gray-500 text-xs line-through ml-1">₹{item.mrp}</span>
                    <span className="text-orange-500 text-xs ml-1">({item.discount})</span>
                  </div>
                  <Link href="/class" className="mt-2 block text-center bg-pink-500 hover:bg-pink-600 text-white text-xs font-medium py-1 px-2 rounded">
                    Add To Bag
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
