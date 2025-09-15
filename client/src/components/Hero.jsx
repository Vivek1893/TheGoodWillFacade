import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "./About";

const slides = [
  {
    image: "/images/slide1.jpg",
    title: "ACP/Fundermax Cladding",
    desc: "ACP Clading is the architecture of a new generation, a building<br>that exists not only in the dimension of space,<br>but also in the dimension of time and communication.",
  },
  {
    image: "/images/slide2.jpg",
    title: "Modern Design",
    desc: "ACP Clading is the architecture of a new generation, a building<br>that exists not only in the dimension of space,<br>but also in the dimension of time and communication.",
  },
  {
    image: "/images/slide3.jpg",
    title: "Structural Glazing",
    desc: "ACP Clading is the architecture of a new generation, a building<br>that exists not only in the dimension of space,<br>but also in the dimension of time and communication.",
  },
];

// ✅ Adjust grid density based on screen size
const getGrid = () => {
  if (window.innerWidth < 640) return { rows: 4, cols: 6 }; // mobile
  if (window.innerWidth < 1024) return { rows: 5, cols: 8 }; // tablet
  return { rows: 6, cols: 10 }; // desktop
};

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [grid, setGrid] = useState(getGrid());

  // Auto-change slide every 8s
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Update grid on resize
  useEffect(() => {
    const handleResize = () => setGrid(getGrid());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

 

  return (
    <div className="relative h-[80vh] sm:h-[90vh] md:h-screen w-full overflow-hidden">
      {/* Background Mosaic */}
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
          gridTemplateColumns: `repeat(${grid.cols}, 1fr)`,
        }}
      >
        {Array.from({ length: grid.rows * grid.cols }).map((_, i) => {
          const row = Math.floor(i / grid.cols);
          const col = i % grid.cols;

          return (
            <motion.div
              key={`${index}-${i}`}
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slides[index].image})`,
                backgroundPosition: `${(col / (grid.cols - 1)) * 100}% ${
                  (row / (grid.rows - 1)) * 100
                }%`,
                backgroundSize: `${grid.cols * 100}% ${grid.rows * 100}%`,
              }}
              initial={{ opacity: 0, scale: 1.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: (row * grid.cols + col) * 0.015,
              }}
            />
          );
        })}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 md:px-12 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1 }}
          >
            <h1
              className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 drop-shadow-lg leading-snug"
              style={{
                background:
                  "linear-gradient(90deg, #E86C0C 30%, #001F5F 60%, #C4C4C4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {slides[index].title}
            </h1>

            {/* Optional description */}
            {/* <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-6">
              {slides[index].desc}
            </p> */}

            {/* CTA Button */}
            {/* <button className="mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-amber-500 hover:bg-amber-600 text-white text-sm sm:text-base font-semibold rounded-full transition">
              Learn More
            </button> */}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition ${
              i === index
                ? "bg-amber-500 scale-110"
                : "bg-white/50 hover:bg-white"
            }`}
          ></button>
        ))}
      </div>

      <About />
    </div>
  );
};

export default Hero;
