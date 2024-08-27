'use client'

import React, { useState, useEffect } from "react";

export default function NavBar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const navBarHeight = document.querySelector("nav")?.offsetHeight;

    if (section && navBarHeight) {
      const sectionTop = section.offsetTop;
      window.scrollTo({
        top: sectionTop - navBarHeight,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-50 transition-colors duration-300 ${hasScrolled ? 'bg-customDark' : 'bg-transparent'}`}>
      <div className="flex justify-around flex-1">
        <button onClick={() => handleScrollToSection("habilidades")} className="text-white hover:text-gray-400 transform hover:scale-105 transition-transform duration-200 ease-in-out">
          Habilidades
        </button>
        <button onClick={() => handleScrollToSection("proyectos")} className="text-white hover:text-gray-400 transform hover:scale-105 transition-transform duration-200 ease-in-out">
          Proyectos
        </button>
        <button onClick={() => handleScrollToSection("formacion")} className="text-white hover:text-gray-400 transform hover:scale-105 transition-transform duration-200 ease-in-out">
          Formación
        </button>
        <button onClick={() => handleScrollToSection("contacto")} className="text-white hover:text-gray-400 transform hover:scale-105 transition-transform duration-200 ease-in-out">
          Contacto
        </button>
      </div>

      <button
        onClick={handleScrollToTop}
        className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full hover:bg-transparent transition-all duration-200 ease-in-out flex items-center justify-center"
      >
        <span className="block w-6 h-6 bg-white transform transition-transform duration-200 ease-in-out hover:rotate-45" />
      </button>
    </nav>
  );
}
