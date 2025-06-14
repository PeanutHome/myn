import React from "react";
import Image from "next/image";
import Link from "next/link";
import ImageSlider from "./ImageSlider";

const HeroCoupons = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 py-8">
      <div className="relative h-24 w-full">
        <Image
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/5/30/e1e09b6e-df00-4e8b-87c9-5295882ab86d1748602019507-Coupons-Central.jpg"
          alt="Get coupons"
          fill
          className="object-cover"
          sizes="h-full w-full"
          priority
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Coupon Banner */}
        <div className="relative aspect-[4.8/1] w-full overflow-hidden rounded-lg">
          <Link href="/nu-best-seller-styles">
            <div className="relative w-full h-full">
              <Image
                src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/6/6/64742038-8302-4faa-9c88-fb152154663e1749148574393-Get-35--Off.jpg"
                alt="Get 35% Off"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Second Coupon Banner */}
        <div className="relative aspect-[4.8/1] w-full overflow-hidden rounded-lg">
          <Link href="/myntra-luxe-2025">
            <div className="relative w-full h-full">
              <Image
                src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/6/6/911ad1e1-40fe-406e-9488-fc07f5585be11749148524149-Get-40--Off.jpg"
                alt="Get 40% Off"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="relative h-28 w-full mt-6">
        <Image
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/5/30/da2e8c4d-9887-4605-8b95-f0684142a62d1748602019534-OMG-Deals--1-.jpg"
          alt="omg-deals"
          fill
          className=""
          sizes="h-full w-full"
          priority
        />
      </div>

      <ImageSlider />

      <div className="relative h-20 w-full mt-4">
        <Image
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/5/30/caac2696-3600-49d0-8391-ab4ef1b7b5c11748601981845-Shop-By-Category.jpg"
          alt="Get coupons"
          fill
          className="object-cover"
          sizes="h-full w-full"
          priority
        />
      </div>
    </div>
  );
};

export default HeroCoupons;
