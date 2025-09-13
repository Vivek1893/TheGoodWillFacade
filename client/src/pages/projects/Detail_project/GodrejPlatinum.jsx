import React from "react";

const GodrejPlatinum = () => {
  return (
    <div className="w-full px-6 bg-amber-300 py-12">
      <h1 className="text-4xl font-bold text-center mt-40 mb-6">Godrej Platinum</h1>
      <div className="max-w-4xl mx-auto">
        <img
          src="/images/godrej.jpg"
          alt="Godrej Platinum"
          className="w-full h-auto rounded-lg shadow-md mb-6"
        />
        <p className="text-gray-700 text-lg">
          Godrej Platinum is a premium residential project that combines luxury
          and modern design. Located in the heart of the city, it offers
          state-of-the-art amenities and a serene living environment. With
          cutting-edge architecture and sustainable design, Godrej Platinum is a
          true reflection of excellence.
        </p>
      </div>
    </div>
  );
};

export default GodrejPlatinum;
