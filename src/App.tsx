import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Nasikat Bolotbekova. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;