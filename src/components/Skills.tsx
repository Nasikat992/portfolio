import React from 'react';
import { Code2, Palette, Layout, FileCode, Boxes, Cpu } from 'lucide-react';

const skills = [
  {
    name: 'HTML5',
    icon: <Layout className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'CSS3',
    icon: <Palette className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'JavaScript',
    icon: <Code2 className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'React',
    icon: <Boxes className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'TypeScript',
    icon: <FileCode className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'UI/UX Design',
    icon: <Cpu className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=200',
  },
];

export default function Skills() {
  return (
    <div className="py-12">
      <h3 className="text-2xl font-bold mb-8 text-center">Skills & Technologies</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-full h-32 object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-pink-600/90 p-4">
              <div className="h-full flex flex-col items-center justify-center text-white">
                <div className="mb-2">{skill.icon}</div>
                <h4 className="text-lg font-semibold">{skill.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}