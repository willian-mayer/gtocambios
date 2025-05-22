'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';

type GalleryImage = {
  id: number;
  imgUrl: string;
};

type GalleryProps = {
  images: GalleryImage[];
};

export default function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const columns = [[], [], [], []] as GalleryImage[][];

  images.forEach((img, i) => {
    columns[i % 4].push(img);
  });

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Galeria</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {columns.map((col, colIdx) => (
            <div className="grid gap-4" key={colIdx}>
              {col.map((image) => (
                <div key={image.id} onClick={() => setSelectedImage(image)} className="cursor-pointer">
                  <Image
                    src={image.imgUrl}
                    alt={`Imagem ${image.id}`}
                    width={500}
                    height={500}
                    className="h-auto max-w-full rounded-lg hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          {/* Botón de cerrar en la esquina superior derecha */}
          <button
            className="absolute top-4 right-4 text-white hover:text-red-500 z-50"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar"
          >
            <X size={32} />
          </button>

          <div
            className="relative max-w-4xl w-full mx-auto p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage.imgUrl}
                alt={`Imagem ${selectedImage.id}`}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
