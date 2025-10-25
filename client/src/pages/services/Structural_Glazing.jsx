import React, { useState } from "react";
import {
  FaCheck,
  FaPaintRoller,
  FaPalette,
  FaShieldAlt,
  FaExpand,
  FaArrowRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Structural_Glazing = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const benefits = [
    "Lightweight, rigid, and durable for modern structures.",
    "Ideal for building exteriors & signage with sleek designs.",
    "Weatherproof, fade-resistant & highly economical.",
    "Available in metallic, wood, and marble finishes.",
    "Excellent heat & sound insulation properties.",
    "High fire resistance for enhanced safety.",
  ];

  const reasons = [
    {
      title: " REASONS TO CHOOSE US",
      icon: <FaCheck className="text-orange-400" />,
      items: [
        "Impressive Aesthetics",
        "Persistent Durability",
        "Innovative Technology",
      ],
    },
    {
      title: "300+ Shade Options",
      icon: <FaPalette className="text-blue-300" />,
      description:
        "Wide range of finishes and designs for both interiors and exteriors.",
    },
    {
      title: "Lead-Free Paints",
      icon: <FaPaintRoller className="text-green-300" />,
      description:
        "Eco-friendly paints protect your health and the environment.",
    },
    {
      title: "Highest Gloss Retention",
      icon: <FaShieldAlt className="text-yellow-300" />,
      description:
        "PVDF resin ensures brilliant surface finish & long-lasting gloss.",
    },
  ];

  const designImages = [
    "/images/project1.webp",
    "/images/project2.webp",
    "/images/project3.webp",
    "/images/project4.webp",
    "/images/project5.webp",
    "/images/project6.webp",
    "/images/project7.webp",
    "/images/project8.webp",
  ];

  const openImageModal = (img) => {
    setSelectedImage(img);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full font-sans -mt-8 bg-white">
      {/* 🔹 Hero Section */}
      <section className="relative w-full h-screen max-h-[75vh] -mt-8 overflow-hidden">
      {/* Logo Branding - Top Right */}
        <div className="absolute top-6 right-6 z-30">
          <img
            src="/logo.png" 
            alt="The Goodwill Facades Logo"
            className="h-18 md:h-25 bg-amber-50 w-auto"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60 z-10"></div>
        <img
          src="/servicesimg/structural_img/Structural-Glazing-side-bg.jpg"
          alt="ACP Cladding"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-3xl font-bold text-white mb-4 tracking-wide"
          >
            <span className="text-white"> Structural </span>{" "}
            <span className="text-orange-400">Glazing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-base text-white/90 max-w-xl mx-auto mb-8"
          >
            Premium architectural solutions with innovative aluminum composite
            panels
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
          ></motion.div>
        </div>
      </section>

      {/* 🔹 Intro Section */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
          >
            Why Choose{" "}
            <span className="text-orange-600">Structural Glazing?</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <FaCheck className="text-blue-600 text-sm" />
                  </div>
                  <p className="text-gray-700 text-base sm:text-xl">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Side Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-2  opacity-70 rounded-2xl blur-md group-hover:opacity-100 transition duration-300"></div>
              <div className="relative rounded-tl-4xl rounded-br-4xl  overflow-hidden">
                <img
                  src="/servicesimg/structural_img/Structural-Glazing-side-bg.jpg"
                  alt="ACP Example"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white font-medium text-lg">
                    Modern Structural Glazing Installation
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🔹 Sample Designs */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
          >
            Simple Design for{" "}
            <span className="text-blue-800">Structural Glazing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Explore our portfolio of innovative Structural Glazing solutions
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
            {designImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative overflow-hidden  shadow-md group cursor-pointer"
                onClick={() => openImageModal(img)}
              >
                <img
                  src={img}
                  alt={`Design ${i + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between p-4">
                  <span className="text-white font-medium">Design {i + 1}</span>
                  <div className="bg-white/20 p-2 rounded-full">
                    <FaExpand className="text-white text-sm" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Reasons Section */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl  font-bold text-center mb-4"
          >
            <span className="text-white">Why Choose</span>{" "}
            <span className="text-orange-400">The GOODWILL Facades?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-blue-200 max-w-3xl mx-auto mb-12"
          >
            Delivering excellence in every project with innovative solutions and
            premium materials
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">{reason.icon}</div>
                  <h3 className="font-semibold text-lg">{reason.title}</h3>
                </div>

                {reason.items ? (
                  <ul className="space-y-2">
                    {reason.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-blue-100"
                      >
                        <FaArrowRight className="mr-2 text-orange-400 text-xs" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-blue-100">{reason.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-full"
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Structural_Glazing;
