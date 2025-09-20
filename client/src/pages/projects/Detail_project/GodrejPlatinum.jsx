import React from "react";
import {
  FaTools,
  FaBroom,
  FaLeaf,
  FaCloudSun,
  FaRecycle,
  FaShieldAlt,
} from "react-icons/fa";

const ProductDetail = () => {
  return (
    <section className="w-full bg-white">
      {/* Top Image with Overlay Heading + Label */}
      <div className="relative w-full h-[70vh]">
        <img
          src="/images/slide3.jpg" // replace with your image
          alt="Glass Railing System"
          className="w-full h-full object-cover"
        />

        {/* Centered Heading */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-xl tracking-wide">
            Project of ALASKAA
          </h1>
        </div>

        {/* Label (bottom-right) */}
        {/* <div className="absolute bottom-6 right-6 bg-red-600 px-6 py-2 rounded-lg shadow-lg">
          <span className="text-white font-bold tracking-wide text-lg">TGF 02</span>
        </div> */}
      </div>

      {/* Product Info Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-16 px-6">
        {/* Left Side Illustration */}
        <div className="flex flex-col items-center space-y-6">
          {/* <img
            src="/images/ser8.png"
            alt="Product Illustration"
            className="w-100 h-auto drop-shadow-lg"
          /> */}
          <img
            src="/images/ser5.png"
            alt="Cross Section"
            className="w-100 h-100 drop-shadow-lg"
          />
        </div>

        {/* Middle Info List */}
        <div className="md:col-span-2 bg-gray-50 rounded-2xl p-8 shadow-md space-y-4">
          <p><span className="font-bold text-gray-800">TYPE :</span> Continuous Profile System</p>
          <p><span className="font-bold text-gray-800">USE :</span> Indoor & Outdoor</p>
          <p><span className="font-bold text-gray-800">MOUNT :</span> Top</p>
          <p><span className="font-bold text-gray-800">MATERIAL :</span> Aluminium Alloy 6063 - T6</p>
          <p><span className="font-bold text-gray-800">GLASS HEIGHT :</span> 970mm (max)</p>
          <p><span className="font-bold text-gray-800">GLASS THICKNESS :</span> 12mm</p>
          <p><span className="font-bold text-gray-800">FINISH :</span> Anodized | Powder Coat | Wood Coat</p>
          <p><span className="font-bold text-gray-800">LENGTH :</span> 12ft | 16ft</p>
        </div>
      </div>

      {/* 🔹 Sample Designs */}
      <section className="px-6 md:px-20 py-20 bg-gray-50">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Sample Designs for <span className="text-blue-800">ACP Cladding</span>
        </h2> */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {[
            "/project_detail_img/ALASKAA 1.jpg",
             "/project_detail_img/ALASKAA 2.jpg",
              "/project_detail_img/ALASKAA 3.jpg",
           
          ].map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden group"
            >
              <img
                src={img}
                alt={`Design ${i + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  Design {i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Features Icons */}
      <div className="bg-gray-100 py-16">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-12">
          Product Features
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center">
            <FaTools className="text-red-600 text-4xl mb-3" />
            <p className="text-sm font-medium text-gray-700">EASY INSTALLATION</p>
          </div>
          <div className="flex flex-col items-center">
            <FaBroom className="text-red-600 text-4xl mb-3" />
            <p className="text-sm font-medium text-gray-700">EASY CLEANING</p>
          </div>
          <div className="flex flex-col items-center">
            <FaLeaf className="text-red-600 text-4xl mb-3" />
            <p className="text-sm font-medium text-gray-700">MAINTENANCE FREE</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCloudSun className="text-red-600 text-4xl mb-3" />
            <p className="text-sm font-medium text-gray-700">WEATHER PROOF</p>
          </div>
          <div className="flex flex-col items-center">
            <FaRecycle className="text-red-600 text-4xl mb-3" />
            <p className="text-sm font-medium text-gray-700">100% RECYCLABLE</p>
          </div>
          <div className="flex flex-col items-center">
            <FaShieldAlt className="text-red-600 text-4xl mb-3" />
            <p className="text-sm font-medium text-gray-700">CORROSION RESISTANCE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
