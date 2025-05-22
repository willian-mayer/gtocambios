'use client';

import React from 'react';
import CarouselLib from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

type Equipamento = {
  name: string;
  imgUrl: string;
};

type CarouselGroup = {
  title: string;
  equipamento: Equipamento[];
};

type CarouselProps = {
  data: CarouselGroup[];
};

export default function Carousel({ data }: CarouselProps) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 80,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      partialVisibilityGutter: 60,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      partialVisibilityGutter: 40,
    },
  };

  return (
    <div id="equipamentos" className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <h1 className="text-center text-4xl font-bold mb-8">Nossos Equipamentos</h1>

      <CarouselLib
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={6000}
        partialVisible
        arrows
        showDots
        dotListClass="custom-dot-list-style mt-4"
        containerClass="carousel-container"
        itemClass="px-4"
      >
        {data.map((group, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex flex-col gap-6"
          >
            <h2 className="text-2xl font-semibold text-center">{group.title}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.equipamento.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <div className="relative w-full h-72 sm:h-80 lg:h-96 rounded-xl overflow-hidden">
                    <Image
                      src={item.imgUrl}
                      alt={item.name}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <p className="text-lg font-semibold mt-2 text-gray-800">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CarouselLib>
    </div>
  );
}
