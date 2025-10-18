import React, { useState, useEffect } from "react";

const ClientLogoSlider = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pauseAuto, setPauseAuto] = useState(false);
  const [slideWidth, setSlideWidth] = useState(250);

  const clientLogos = [
   
    { id: 14, src: "/Picture14.webp", alt: "Client Logo" },
    { id: 15, src: "/Picture15.webp", alt: "Client Logo" },
    { id: 16, src: "/Picture16.webp", alt: "Client Logo" },
    { id: 17, src: "/Picture17.webp", alt: "Client Logo" },
    { id: 18, src: "/Picture18.webp", alt: "Client Logo" },
    
    { id: 26, src: "/Picture26.webp", alt: "Client Logo" },
  ];

  const totalSlides = clientLogos.length;

  // Adjust slide width on window resize
  useEffect(() => {
    const updateSlideWidth = () => {
      const width = window.innerWidth;
      if (width < 480) setSlideWidth(140); // small phones
      else if (width < 640) setSlideWidth(160); // mobile
      else if (width < 768) setSlideWidth(200); // tablet
      else setSlideWidth(250); // desktop
    };

    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);
    return () => window.removeEventListener("resize", updateSlideWidth);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    pauseAutoScroll();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    pauseAutoScroll();
  };

  const pauseAutoScroll = () => {
    setPauseAuto(true);
    setTimeout(() => setPauseAuto(false), 4000);
  };

  // Auto-scroll
  useEffect(() => {
    if (!isPlaying || pauseAuto) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying, pauseAuto, totalSlides]);

  const handleMouseEnter = () => setPauseAuto(true);
  const handleMouseLeave = () => setPauseAuto(false);

  return (
    <section className="bg-white  ">
      <div className="container mx-auto px-4 -mb-8 sm:px-6 lg:px-1">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2
            className="text-[36px] sm:text-4xl lg:text-5xl font-semibold text-[#0B2146]  tracking-wide"
            style={{
              background:
                "linear-gradient(90deg, #E86C0C 0%, #001F5F 70%, #C4C4C4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Clients
          </h2>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden mt-10 sm:mt-16 mb-16 sm:mb-24">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:-left-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 rounded-full shadow-md flex items-center justify-center text-blue-700 text-lg sm:text-2xl hover:bg-white transition-all duration-300 cursor-pointer"
          >
            &#10094;
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:-right-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 rounded-full shadow-md flex items-center justify-center text-blue-700 text-lg sm:text-2xl hover:bg-white transition-all duration-300 cursor-pointer"
          >
            &#10095;
          </button>

          {/* Slider Track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `translateX(-${currentSlide * slideWidth}px)`,
            }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-2 w-[140px] sm:w-[160px] md:w-[200px] lg:w-[250px] h-20 sm:h-24 md:h-28 flex items-center justify-center bg-white rounded-xl shadow-md sm:shadow-lg p-2 sm:p-3 border border-gray-100 group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-14 sm:max-h-16 md:max-h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogoSlider;
