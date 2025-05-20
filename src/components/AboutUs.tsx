'use client';

import Image from 'next/image';

type AboutUsProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function AboutUs({ title, description, imageUrl }: AboutUsProps) {
  return (
    <section id="about-us" className="py-16 md:py-0 md:h-screen flex items-center bg-white">
      <div className="w-full max-w-7xl px-4 md:px-5 mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-10 items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-900 text-4xl font-bold leading-normal">
                {title}
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                {description}
              </p>
            </div>
            <button className="px-4 py-2 bg-green-600 hover:bg-green-800 transition-all duration-700 ease-in-out rounded-lg text-white shadow">
              Whatsapp
            </button>
          </div>

          {/* Image */}
          <div className="w-full">
            <Image
              src={imageUrl}
              alt="About Us"
              width={800}
              height={600}
              className="rounded-3xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
