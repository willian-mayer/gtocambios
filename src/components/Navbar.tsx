'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Route } from '@/types/routes';

type NavbarProps = {
  title: string;
  routes: Route[];
};

export default function Navbar({ title, routes }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Título */}
        <div
          className="text-xl font-bold text-gray-800 cursor-pointer"
          onClick={() => router.push('/')}
        >
          {title}
        </div>

        {/* Menú escritorio */}
        <div className="hidden md:flex space-x-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="text-gray-700 hover:text-blue-600"
            >
              {route.name}
            </Link>
          ))}
        </div>

        {/* Botón hamburguesa */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
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
        <div className="flex flex-col space-y-2 bg-white px-4 pb-4">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="text-gray-700 hover:text-blue-600"
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
