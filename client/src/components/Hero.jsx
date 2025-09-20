import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/slide1.jpg",
      title: "ACP CLADDING",
      description:
        "ACP Clading is the architecture of a new generation, a building that exists not only in the dimension of space, but also in the dimension of time and communication.",
    },
    {
      image: "/images/slide2.jpg",
      title: "STRUCTURAL GLAZING",
      description:
        "Modern structural glazing solutions that combine aesthetics with functionality, creating stunning transparent facades.",
    },
    {
      image: "/images/slide3.jpg",
      title: "ALUMINUM SYSTEMS",
      description:
        "High-performance aluminum facade systems designed for durability, energy efficiency, and architectural excellence.",
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Grid animation function
  const getGrid = () => {
    if (window.innerWidth < 640) return { rows: 4, cols: 6 };
    if (window.innerWidth < 1024) return { rows: 5, cols: 8 };
    return { rows: 6, cols: 10 };
  };

  const [grid, setGrid] = useState(getGrid());

  useEffect(() => {
    const handleResize = () => setGrid(getGrid());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden max-w-full">
      {/* Top Angled Border Strip */}
      <div className="absolute top-0 left-0 w-full h-6 z-50 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 20"
        >
          <polygon points="0,0 100,0 95,20 0,20" fill="#0B3558" />
          <polygon points="0,0 20,0 15,20 0,20" fill="#F37021" />
        </svg>
      </div>

      {/* Logo box (big) - width 60 */}
      <div className="hidden lg:block absolute left-0 top-20 z-30">
        <div className="w-60 bg-white p-6 rounded-br-2xl">
        <div className="absolute top-0 left-0 w-full h-3 z-50 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 20"
        >
          <polygon points="0,0 100,0 95,20 0,20" fill="#0B3558" />
          <polygon points="0,0 20,0 15,20 0,20" fill="#F37021" />
        </svg>
        </div>
          <img src="/logo.png" alt="Goodwill Facade" className="w-48 h-auto object-contain mx-auto" />
        </div>
      </div>

      {/* Vertical text between logo and social (transparent background so hero shows through around it) */}
      <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 z-30 pointer-events-none">
        <div
          className="text-gray-400 text-sm font-medium tracking-wider"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          WORK ARCHITECTURE
        </div>
      </div>

      {/* Social box (narrow) - width 40 */}
      <div className="hidden lg:block absolute left-0 bottom-0 z-30">
        <div className="w-30 bg-white p-8 shadow-2xl rounded-tr-2xl">
          <div className="flex flex-col items-center space-y-4">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              {/* Github-like icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              {/* Twitter */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              {/* Facebook */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Logo - Top Left (Desktop-like positioning) */}
      <div className="lg:hidden absolute top-20 left-0 z-30">
        <div className="bg-white p-4 rounded-br-2xl shadow-lg">
          <div className="absolute top-0 left-0 w-full h-5 z-50 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 20"
        >
          <polygon points="0,0 100,0 95,20 0,20" fill="#0B3558" />
          <polygon points="0,0 20,0 15,20 0,20" fill="#F37021" />
        </svg>
      </div>
          <img src="/logo.png" alt="Goodwill Facade" className="w-32 h-auto object-contain" />
        </div>
      </div>

      {/* Mobile Social Icons - Bottom Left (Desktop-like positioning) */}
      <div className="lg:hidden absolute bottom-0 left-0 z-30">
        <div className="bg-white p-4 rounded-tr-2xl shadow-lg">
          <div className="flex flex-col items-center space-y-3">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Hero Area - responsive margins */}
<div className="relative w-full h-full lg:ml-32">
  {/* Background Mosaic Animation */}
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
          key={`${currentSlide}-${i}`}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundPosition: `${(col / (grid.cols - 1)) * 100}% ${(row / (grid.rows - 1)) * 100}%`,
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

        {/* Navigation Arrows - Mobile responsive positioning */}
        <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-4 md:space-x-8">
          <button onClick={prevSlide} className="text-white hover:text-orange-400 transition-colors group">
            <div className="flex items-center space-x-1 md:space-x-2 bg-black/60 backdrop-blur-sm px-2 md:px-4 py-2 md:py-3 rounded-full border border-white/30">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-xs md:text-sm font-medium tracking-wider hidden sm:block">PREV</span>
            </div>
          </button>

          <button onClick={nextSlide} className="text-white hover:text-orange-400 transition-colors group">
            <div className="flex items-center space-x-1 md:space-x-2 bg-black/60 backdrop-blur-sm px-2 md:px-4 py-2 md:py-3 rounded-full border border-white/30">
              <span className="text-xs md:text-sm font-medium tracking-wider hidden sm:block">NEXT</span>
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Hero Content - Mobile responsive */}
        <div className="relative z-10 flex items-center justify-center h-full px-2 sm:px-4 md:px-6 pt-16 md:pt-0 lg:pt-0">
          <div className="text-center max-w-4xl w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 tracking-wider leading-tight" style={{ color: 'white' }}>
                  {slides[currentSlide].title}
                </h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-2" style={{ color: 'var(--accent-color)' }}>
                  {slides[currentSlide].description}
                </p>
                <button className="cta-button px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Look More →
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide Indicators - Mobile responsive */}
        <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2 md:space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "scale-110" : "bg-white/50 hover:bg-white/80"
                }`}
                style={{
                  backgroundColor: index === currentSlide ? "var(--accent-color)" : undefined
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
