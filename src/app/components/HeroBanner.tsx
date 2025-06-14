"use client";

import React from "react";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="">
      {/* Main Banner */}
      <div className="flex w-full h-[500px] mt-6">
        <div className="relative w-1/2 h-full">
          <Image
            src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/6/5/3c15fcbd-ceae-4323-94fb-b3df589604401749147971279-slices_01.gif"
            alt="Hero Banner1"
            fill
            className=""
            priority
          />
        </div>
        <div className="relative w-1/2 h-full">
          <Image
            src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/6/5/1804fd3c-8879-47fd-853f-a853e009546b1749147981260-slices_02.gif"
            alt="Hero Banner2"
            fill
            className=""
            priority
          />
        </div>
      </div>

      {/* Three Images Row */}
      <div className="bg-[#5C0EC5]">
        <div className="grid grid-cols-3 rounded-lg border-2 mb-2 border-gray-300">
          <div className="relative h-[120px]">
            <Image
              src="https://assets.myntassets.com/w_326,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JUNE/5/uuPdoljV_b525bc3c6eda4ae78feb954d0784dc06.jpg"
              alt="Banner 1"
              fill
              className=""
              priority
            />
          </div>
          <div className="relative h-[120px]">
            <Image
              src="https://assets.myntassets.com/w_326,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JUNE/5/qc81wFrP_ce530dd835704379aba76540092ac661.jpg"
              alt="Banner 2"
              fill
              className=""
              priority
            />
          </div>
          <div className="relative h-[120px]">
            <Image
              src="https://assets.myntassets.com/w_326,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JUNE/5/4RBGIbMV_8b5cc90f5f764f499f12ed6d14764c7d.jpg"
              alt="Banner 3"
              fill
              className=""
              priority
            />
          </div>
        </div>

        <div className="relative h-32 w-full">
          <Image
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/6/5/42352553-1338-4448-a51e-429d9bc9381c1749148131593-bank.gif"
            alt="Get coupons"
            fill
            className="object-cover"
            sizes="h-full w-full"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
