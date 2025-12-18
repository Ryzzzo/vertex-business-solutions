"use client";
import React from "react";
import Image from "next/image";

interface ImageWithAlt {
  src: string;
  alt: string;
}

interface AutoScrollImagesProps {
  images: string[] | ImageWithAlt[];
}

export const AutoScrollImages = ({ images }: AutoScrollImagesProps) => {
  const normalizedImages: ImageWithAlt[] = images.map((img, index) =>
    typeof img === 'string' ? { src: img, alt: `Screenshot ${index + 1}` } : img
  );

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="animate-scroll-vertical">
        {normalizedImages.map((img, index) => (
          <Image
            key={index}
            src={img.src}
            alt={img.alt}
            width={1400}
            height={900}
            className="w-full object-cover object-top"
          />
        ))}
        {normalizedImages.map((img, index) => (
          <Image
            key={`dup-${index}`}
            src={img.src}
            alt={img.alt}
            width={1400}
            height={900}
            className="w-full object-cover object-top"
          />
        ))}
      </div>
    </div>
  );
};
