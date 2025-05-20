'use client';

import React from 'react';
import CarouselLib from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

type CarouselItem = {
  title: string;
  image: string;
};

type CarouselProps = {
  items: CarouselItem[];
};

export default function Carousel({ items }: CarouselProps) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div id="servicos" className="w-full max-w-5xl mx-auto px-4 ">
      <h1 className="text-center text-4xl font-bold mb-6">Nossos serviços</h1>

      <CarouselLib
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={5000}
        partialVisible
        arrows // ← Usa los predeterminados
        showDots // ← Muestra los indicadores
        dotListClass="custom-dot-list-style mt-4"
        containerClass="carousel-container"
        itemClass="px-2"
      >
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow ">
            <div className="relative h-80 w-full ">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="h-16 bg-white text-black flex items-center justify-center px-4 text-center text-lg font-medium">
              {item.title}
            </div>
          </div>
        ))}
      </CarouselLib>
    </div>
  );
}
