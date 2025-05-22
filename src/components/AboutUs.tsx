'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

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
  return (
    <section id="about-us" className="py-16 bg-white">
      <div className="w-full max-w-7xl px-4 md:px-5 mx-auto flex flex-col gap-16">
        {/* Fila superior: Sobre nós */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
            <h2 className="text-gray-900 text-4xl font-bold">{title}</h2>
            <p className="text-gray-500 text-base leading-relaxed">{description}</p>
            <button className="px-4 py-2 bg-green-600 hover:bg-green-800 transition-all duration-700 ease-in-out rounded-lg text-white shadow">
              Whatsapp
            </button>
          </div>
          <div className="w-full">
            <Image
              src={imageUrl}
              alt="Sobre nós"
              width={800}
              height={600}
              className="rounded-3xl w-full object-cover"
            />
          </div>
        </div>

        {/* Fila inferior: Avaliações */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-semibold text-gray-800 text-center">Avaliações de clientes</h3>
          
          <motion.div
            className="flex gap-6 overflow-x-auto no-scrollbar py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {rates.map((rate, index) => (
              <motion.div
                key={index}
                className="min-w-[280px] max-w-xs bg-gray-100 p-4 rounded-xl shadow-md flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-gray-700 text-sm mb-2">“{rate.description}”</p>
                <p className="text-gray-600 text-sm italic">– {rate.name}</p>
                <div className="flex text-yellow-500 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="none" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
