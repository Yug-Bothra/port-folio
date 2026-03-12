import React, { useEffect, useState } from 'react';

const greetings = ["Hi", "Namaste", "Bonjour"];

const navItems = [
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export default function Hero() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['resume', 'projects', 'experience'];
      const rightBox = document.querySelector('.rightbox');
      if (!rightBox) return;
      const scrollTop = rightBox.scrollTop;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 80 <= scrollTop) {
          setActiveSection(id);
        }
      }
    };

    const rightBox = document.querySelector('.rightbox');
    rightBox?.addEventListener('scroll', handleScroll);
    return () => rightBox?.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    const rightBox = document.querySelector('.rightbox');
    if (el && rightBox) {
      rightBox.scrollTo({ top: el.offsetTop - 32, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4 gap-10">
      {/* Greeting + Name */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {greetings[greetingIndex]}
          <br />
          I'm Yug Bothra
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-2">
          A full-stack developer turning ideas into websites, and coffee into code.
        </p>
        <p className="text-lg md:text-xl text-gray-500 italic">
          "Writing code, drinking coffee, and occasionally Googling 'how to center a div'."
        </p>
      </div>

      {/* Nav shortcuts */}
      <nav className="flex flex-col items-center gap-2 w-full max-w-[220px]">
        {navItems.map(({ label, href }) => {
          const id = href.replace('#', '');
          const isActive = activeSection === id;
          return (
            <button
              key={label}
              onClick={() => handleNav(href)}
              className={`w-full py-2 px-5 rounded-full text-sm font-semibold tracking-widest uppercase transition-all duration-300 border-2 border-black
                ${isActive
                  ? 'bg-black text-white shadow-lg scale-105'
                  : 'bg-transparent text-black hover:bg-black hover:text-white hover:scale-105'
                }`}
            >
              {label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}