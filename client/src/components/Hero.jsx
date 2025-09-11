import React from "react";

const Hero = () => {
  return (
    <div className="mt-25 relative w-full">
      {/* 🔹 Decorative Top Border */}
      <div className="relative w-full h-40">
        {/* Blue Strip */}
        <div className="absolute inset-0 bg-blue-900 clip-shape"></div>
        {/* Orange Strip inside */}
        <div className="absolute inset-0 bg-orange-400 clip-inner"></div>
      </div>

      {/* 🔹 Hero Section */}
      <div className="relative w-full h-[500px] flex items-center justify-center ">
        <h1 className="text-4xl font-bold text-gray-800">Hero Section</h1>
      </div>
    </div>
  );
};

export default Hero;
