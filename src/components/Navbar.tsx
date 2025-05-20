'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Route } from '@/types/routes';
import Image from 'next/image';

type NavbarProps = {
  title: string;
  routes: Route[];
};

export default function Navbar({ title, routes }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="bg-black shadow-md px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Título */}
        <div className="cursor-pointer" onClick={() => router.push('/')}>
  <Image
    src="/logo.jpg" // Asegúrate de que esta ruta sea correcta
    alt={title}
    width={80} // Ajusta el tamaño según lo que necesites
    height={80}
    priority
  />
</div>

        {/* Menú escritorio */}
        <div className="hidden md:flex space-x-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="text-white font-bold hover:text-blue-600"
            >
              {route.name}
            </Link>
          ))}
        </div>

        {/* Botón hamburguesa */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white font-bold">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil animado */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-2 bg-black px-4 pb-4">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="text-white font-bold hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
