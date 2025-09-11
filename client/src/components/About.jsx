import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://picsum.photos/id/1018/1920/600",
  "https://picsum.photos/id/1015/1920/600",
  "https://picsum.photos/id/1016/1920/600",
];

const About = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div>
      {/* 🔹 Slider Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt="slider"
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>

        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 bg-black/30">
          <h1 className="text-5xl font-bold drop-shadow-lg">About Us</h1>
          <p className="mt-3 text-xl font-medium drop-shadow-md">
            Welcome to our company
          </p>
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/40 p-2 rounded-full hover:bg-white/70"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/40 p-2 rounded-full hover:bg-white/70"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 🔹 About Section */}
      <div className="py-20 text-white text-center text-2xl bg-red-500">
        <h1 className="text-4xl font-bold mb-4">About Component</h1>
        <p>This is the About component.</p>
      </div>
    </div>
  );
};

export default About;
