'use client';

import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Route } from "@/types/routes";

type HeroProps = {
  title: string;
  description: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  routes: Route[];
};

export default function Hero({
  title,
  description,
  backgroundImage,
  backgroundVideo,
  routes,
}: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative w-full h-screen text-white snap-start overflow-hidden">
      {/* Video o imagen de fondo */}
      {backgroundVideo ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}

      {/* Filtro oscuro */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar title="Metalfire Churrasqueiras" routes={routes} />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 h-full mx-4 sm:mx-8 md:mx-24 lg:mx-48 xl:mx-72 gap-10">
        <h1
          className={`text-4xl md:text-6xl font-bold mb-4 transition-all duration-700 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-lg md:text-xl transition-all duration-1000 ease-out transform delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
