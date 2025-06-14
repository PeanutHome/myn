"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Category {
  id: string;
  name: string;
  image: string;
}

interface CategoryBoxProps {
  categories: Category[];
}

export function CategoryBox({ categories }: CategoryBoxProps) {
  const router = useRouter();

  const handleCategoryClick = (categoryId: string) => {
    router.push(`/category/${categoryId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className="relative aspect-square overflow-hidden cursor-pointer hover:opacity-90 transition-opacity bg-white border border-gray-100 rounded-lg flex items-center justify-center"
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 16vw"
            />
          </div>
        ))}
      </div>

      <div className="relative h-40 w-full">
        <Image
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/5/30/3f9002f7-ff28-40c5-ac33-047d1cb7c18f1748602201443-App-Install-Banner.jpg"
          alt="Get coupons"
          fill
          className=""
          sizes="h-full w-full"
          priority
        />
      </div>
    </div>
  );
}
