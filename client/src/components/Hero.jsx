import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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

const GRID_ROWS = 6;
const GRID_COLS = 10;

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Auto-change slide every 8s (slower)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Mosaic */}
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
          gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
        }}
      >
        {Array.from({ length: GRID_ROWS * GRID_COLS }).map((_, i) => {
          const row = Math.floor(i / GRID_COLS);
          const col = i % GRID_COLS;

          return (
            <motion.div
              key={`${index}-${i}`}
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slides[index].image})`,
                backgroundPosition: `${(col / (GRID_COLS - 1)) * 100}% ${
                  (row / (GRID_ROWS - 1)) * 100
                }%`,
                backgroundSize: `${GRID_COLS * 100}% ${GRID_ROWS * 100}%`,
              }}
              initial={{ opacity: 0, scale: 1.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2, // slower animation
                delay: (row * GRID_COLS + col) * 0.015, // slower stagger
              }}
            />
          );
        })}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1 }}
          >
            <h1
              className="text-5xl md:text-8xl font-bold mb-4 drop-shadow-lg"
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

            {/* <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">
              {slides[index].desc}
            </p> */}
            {/* <button className="mt-4 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition">
              Learn More
            </button> */}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
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
