'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

type Rate = {
  name: string;
  description: string;
};

type AboutUsProps = {
  title: string;
  description: string;
  imageUrl: string;
  rates: Rate[];
};

export default function AboutUs({ title, description, imageUrl, rates }: AboutUsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = rates.length;

  // Cambio automático cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <section
      id="about-us"
      className="lg:h-screen bg-white flex flex-col"
    >
      {/* Parte superior */}
      <div className="flex-2 basis-2/3 grid lg:grid-cols-2 grid-cols-1 gap-8 items-center px-4 md:px-5 py-10 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
          <h2 className="text-gray-900 text-5xl font-bold">{title}</h2>
          <p className="text-gray-500 text-lg leading-relaxed">{description}</p>
          <button className="px-6 py-3 bg-green-600 hover:bg-green-800 transition-all duration-700 ease-in-out rounded-lg text-white shadow text-lg">
            Whatsapp
          </button>
        </div>
        <div className="w-full flex justify-center lg:justify-end">
  <Image
    src={imageUrl}
    alt="Sobre nós"
    width={400}
    height={400}
    className="rounded-3xl w-full max-w-md lg:max-w-[400px] object-cover"
  />
</div>
      </div>

      {/* Parte inferior: Carrusel */}
{/* Parte inferior: Carrusel */}
<div className="flex-1 basis-1/3 bg-black py-6 px-4 md:px-5">
  <div className="max-w-6xl mx-auto flex flex-col h-full justify-center gap-6">
    <h3 className="text-3xl font-bold text-center text-white">
      Avaliações de clientes
    </h3>

    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          width: `${rates.length * 100}%`,
          transform: `translateX(-${(100 / rates.length) * currentIndex}%)`,
        }}
      >
        {rates.map((rate, index) => (
          <div
            key={index}
            className={`
              px-2 flex justify-center
              w-full sm:w-full md:w-1/3
              transition-all duration-500 ease-in-out
              ${index === currentIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-50'}
            `}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full text-center">
              <p className="text-xl text-gray-700 mb-4">“{rate.description}”</p>
              <p className="text-lg italic text-gray-600 mb-2">– {rate.name}</p>
              <div className="flex justify-center text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={24} fill="currentColor" stroke="none" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

    </section>
  );
}
