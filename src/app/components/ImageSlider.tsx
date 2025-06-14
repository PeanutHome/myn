"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/5/19/f76483be-f25c-456c-a6aa-8082f765f5fd1747634400415-image_png35855445.png",
  "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/5/19/1208acf5-81d0-487b-a9e8-af14acbbd2421747634612974-image_png_445154821--1-.png",
  "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/5/19/e6a33a21-5468-4fb4-bcd9-767f9b6a0b901747634454877-image_png565762732.png",
  "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/16/a9H1tSNd_19d20cd97a144120a9ccb97e233daca8.png",
  "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/16/8XqFJBFy_ae1b7205412e4cd4b766f825d396665f.png",
  "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/5/19/1208acf5-81d0-487b-a9e8-af14acbbd2421747634612974-image_png_445154821--1-.png",
  "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/16/BJxdGuXg_848f518ab91843a4a38054b33ad51d8c.png",
  "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/16/Uv8ONRaB_50e97d3f5148415d9a349ab3b0793414.png",
  "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/5/22/9f927731-4ac7-4384-8b84-f4094a47c0bd1747901608082-image_png1626829940.png",
  "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/5/19/1208acf5-81d0-487b-a9e8-af14acbbd2421747634612974-image_png_445154821--1-.png",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/5/19/f76483be-f25c-456c-a6aa-8082f765f5fd1747634400415-image_png35855445.png",
  "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/16/8XqFJBFy_ae1b7205412e4cd4b766f825d396665f.png",
  "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/5/22/7f60deb5-c6a0-4b48-97b6-8844ba0add7a1747901481320-image_png_1037836464.png",
  "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/16/jsr1LJjQ_78826d5d3a1d461180a67f8242222503.png",
  "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/MAY/16/W3rRUMsg_a64ae00c72914b05bd632c04a9926e95.png",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 5;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + imagesPerPage;
      return nextIndex >= images.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndex2 = prevIndex - imagesPerPage;
      return prevIndex2 < 0 ? images.length - imagesPerPage : prevIndex2;
    });
  };

  const goToSlide = (pageIndex: number) => {
    setCurrentIndex(pageIndex * imagesPerPage);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full mt-8">
      {/* Images Grid */}
      <div className="flex flex-row justify-center mb-4">
        {images
          .slice(currentIndex, currentIndex + imagesPerPage)
          .map((image, index) => (
            <div
              key={index}
              className="relative w-80 h-80 mx-4 rounded-lg overflow-hidden"
            >
              <Image
                src={image}
                alt={`Slide ${currentIndex + index + 1}`}
                fill
                className="object-contain hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
              Math.floor(currentIndex / imagesPerPage) === index
                ? "bg-black scale-125"
                : "bg-gray-300"
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      {/* <div className="flex justify-between mt-4">
        <button
          onClick={prevSlide}
          className="bg-black/30 text-white px-4 py-2 rounded-full hover:bg-black/50 transition-all"
          aria-label="Previous page"
        >
          Previous
        </button>
        <button
          onClick={nextSlide}
          className="bg-black/30 text-white px-4 py-2 rounded-full hover:bg-black/50 transition-all"
          aria-label="Next page"
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default ImageSlider;
