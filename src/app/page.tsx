import HeroBanner from "./components/HeroBanner";
import HeroCoupons from "./components/HeroCoupons";

import Image from "next/image";
import { CategoryBox } from "./components/CategoryBox";
import Footer from "./components/Footer";
import { Home as HomeIcon, List, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: "1",
    name: "Men's Top Wear",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/sFJaPHbg_730fb4764aa74f43a00219d3dc10885c.jpg",
  },
  {
    id: "2",
    name: "Women's Ethnic",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/TOcnJmAr_fd3fbea0fe1c446c8468a84ef347b2f0.jpg",
  },
  {
    id: "3",
    name: "Kids' Fashion",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/FXrmaCZr_1781bfdc28d04e4ea3af053dd09134e1.jpg",
  },
  {
    id: "4",
    name: "Home & Living",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/ofXm2TSb_31fc6da53ed948fea7e096b8d7578d88.jpg",
  },
  {
    id: "5",
    name: "Beauty",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/IVcmBGT9_dc90b4ec504849eb95eadb29d6fbc859.jpg",
  },
  {
    id: "6",
    name: "Accessories",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/vZR2Y924_a27915a12c714e07b837e2b16d25d0ca.jpg",
  },
  {
    id: "7",
    name: "Footwear",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/qyYYfqAw_669075b0d3f04ae0b67056fd2d98f2c7.jpg",
  },
  {
    id: "8",
    name: "Jewellery",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/tIv7QErS_7dbe5cbd1b5a4d1e87eea61d0bd8026f.jpg",
  },
  {
    id: "9",
    name: "Bags & Wallets",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/wEDrPEtA_cc5f39b23a284751ad4404fba04a0ca6.jpg",
  },
  {
    id: "10",
    name: "B",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/VnZmBhIf_2c6c3966ff3849e7bfe3d0182d2040cd.jpg",
  },
  {
    id: "11",
    name: "c",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/SRWh0jwa_b73d6b1628964e9a87d88facebf4f4c6.jpg",
  },
  {
    id: "12",
    name: "d",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/NjBRvEL7_a51b2800ee9c4741929bb382ae1f5c67.jpg",
  },
  {
    id: "13",
    name: "e",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/SLlHxSqX_b8be8445de8549b4ae57c7454c43eaa7.jpg",
  },
  {
    id: "14",
    name: "f",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/nemaCQri_b61358816da540db9d7985d57eb8828c.jpg",
  },
  {
    id: "15",
    name: "g",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/7ukZNczu_d6927b99c67b46b3a2c113fdf89dada1.jpg",
  },
  {
    id: "16",
    name: "h",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/0Kng3jD2_ab175859ec1a4b47b1472a0d9860deb7.jpg",
  },
  {
    id: "17",
    name: "i",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/3zdzixR4_867762493bb242ff98882807faba338d.jpg",
  },
  {
    id: "18",
    name: "j",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/YHwxWL34_d8824d71df214e33b2d4ed363c86f9ed.jpg",
  },
  {
    id: "19",
    name: "k",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/BV23gC7r_6b8418f039c942ddbb47580fbd46397f.jpg",
  },
  {
    id: "20",
    name: "l",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/ECP9Sxyr_2e81a050c55247868577adcb6a52844a.jpg",
  },
  {
    id: "21",
    name: "m",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/A5pSHYUK_ae8ad6bb11f14c6ea0fca1976174fe18.jpg",
  },
  {
    id: "22",
    name: "n",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/SLlHxSqX_b8be8445de8549b4ae57c7454c43eaa7.jpg",
  },
  {
    id: "23",
    name: "o",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/oD9nuV2u_9e8dd1fc8cf74a29be6d9fb2bd124604.jpg",
  },
  {
    id: "24",
    name: "p",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/0cZpJvNG_2add46bef7414c21a86e2e88999c7653.jpg",
  },
  {
    id: "25",
    name: "df",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/SLlHxSqX_b8be8445de8549b4ae57c7454c43eaa7.jpg",
  },
  {
    id: "26",
    name: "fdf",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/nemaCQri_b61358816da540db9d7985d57eb8828c.jpg",
  },
  {
    id: "27",
    name: "gdf",
    image:
      "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/30/7ukZNczu_d6927b99c67b46b3a2c113fdf89dada1.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen pb-16">
      <div className="relative h-20 w-full mt-4">
        <Image
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/6/6/e9c837f6-074b-4007-a4e7-547652bdb1c61749148275598-FLAT-500-Off-on-1st-Purchase-Strip-----1.jpg"
          alt="Get coupons"
          fill
          className="object-cover"
          sizes="h-full w-full"
          priority
        />
      </div>

      <HeroBanner />
      <HeroCoupons />
      <CategoryBox categories={categories} />

      <Footer />

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 flex w-full justify-between items-center h-14 shadow-lg">
        <Link href="/" className="flex-1 min-w-0 flex flex-col items-center justify-center text-xs text-gray-700 hover:text-pink-500 py-1">
          <HomeIcon size={22} />
          <span>Home</span>
        </Link>
        <Link href="/category" className="flex-1 min-w-0 flex flex-col items-center justify-center text-xs text-gray-700 hover:text-pink-500 py-1">
          <List size={22} />
          <span>Category</span>
        </Link>
        <Link href="/cart" className="flex-1 min-w-0 flex flex-col items-center justify-center text-xs text-gray-700 hover:text-pink-500 py-1">
          <ShoppingBag size={22} />
          <span>Cart</span>
        </Link>
        <Link href="/profile" className="flex-1 min-w-0 flex flex-col items-center justify-center text-xs text-gray-700 hover:text-pink-500 py-1">
          <User size={22} />
          <span>Profile</span>
        </Link>
      </div>
    </main>
  );
}

// Sample data - Replace with your actual data
