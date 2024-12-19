import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-white to-pink-50"
    >
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
        Contact Me
      </h2>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/80 backdrop-blur rounded-lg shadow-lg p-8">
          <div className="space-y-8">
            <a
              href="tel:+996500198122"
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-purple-50 transition-colors"
            >
              <div className="bg-purple-100 p-3 rounded-full">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+996 500 198 122</p>
              </div>
            </a>

            <a
              href="mailto:bolotbekovanasikat83@gmail.com"
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-purple-50 transition-colors"
            >
              <div className="bg-purple-100 p-3 rounded-full">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">nasikat.bolotbekova@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-lg">
              <div className="bg-purple-100 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">Bishkek, Kyrgyzstan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
