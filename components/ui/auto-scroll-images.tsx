"use client";
import React from "react";
import Image from "next/image";

interface AutoScrollImagesProps {
  images: string[];
}

export const AutoScrollImages = ({ images }: AutoScrollImagesProps) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="animate-scroll-vertical">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Screenshot ${index + 1}`}
            width={1400}
            height={900}
            className="w-full object-cover object-top"
          />
        ))}
        {images.map((src, index) => (
          <Image
            key={`dup-${index}`}
            src={src}
            alt={`Screenshot ${index + 1}`}
            width={1400}
            height={900}
            className="w-full object-cover object-top"
          />
        ))}
      </div>
    </div>
  );
};
