import React, { useEffect, useState } from 'react';
const greetings = ["Hi", "Namaste", "Bonjour"];

export default function Hero() {
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
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
    </div>
  );
}
