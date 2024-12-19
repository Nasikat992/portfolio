import React from 'react';
import { MapPin } from 'lucide-react';
import Skills from './Skills';

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          About Me
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-purple-600" />
              <span className="text-gray-600">Bishkek, Kyrgyzstan</span>
            </div>
            <p className="text-gray-600 mb-6">
              I'm a passionate Frontend Developer currently studying at Salymbekov University. 
              At just 16 years old, I've already gained 4 months of hands-on experience in web development, 
              focusing on creating responsive and user-friendly interfaces.
            </p>
            <div className="space-y-2 text-gray-600">
              <p><strong>Age:</strong> 16</p>
              <p><strong>Education:</strong> Salymbekov University</p>
              <p><strong>Experience:</strong> 4 months in Frontend Development</p>
            </div>
          </div>
          
          <Skills />
        </div>
      </div>
    </section>
  );
}