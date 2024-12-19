import React from 'react';

export default function Header() {
  return (
    <header className="pt-16 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              Nasikat Bolotbekova
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Frontend Developer
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </div>
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src=".public/nasikat.png"
              alt="Nasikat Bolotbekova"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
