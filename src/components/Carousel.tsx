'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type CarouselItem = {
  title: string;
  image: string;
};

type CarouselProps = {
  items: CarouselItem[];
};

export default function Carousel({ items }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  // Avance automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-center text-4xl font-bold mb-6">Nossos serviços</h1>

      {/* Carousel wrapper */}
      <div className="relative h-96 overflow-hidden rounded-lg">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Imagen */}
            <div className="h-4/5 relative w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Título */}
            <div className="h-1/5 bg-white text-black flex items-center justify-center px-4 text-center text-lg font-medium">
              {item.title}
            </div>
          </div>
        ))}

        {/* Controles */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 z-20 -translate-y-1/2 p-2 bg-white/30 hover:bg-white/50 rounded-full"
        >
          <Image src="/carousel/left.svg" alt="Previous" width={24} height={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 z-20 -translate-y-1/2 p-2 bg-white/30 hover:bg-white/50 rounded-full"
        >
          <Image src="/carousel/right.svg" alt="Next" width={24} height={24} />
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center mt-6 space-x-3">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              current === index ? 'bg-black' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
