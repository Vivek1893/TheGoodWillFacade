import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "GodrejPlatinum",
      img: "./images/project1.webp",
      path: "/projects/Detail_project/GodrejPlatinum",
    },
    {
      id: 2,
      title: "Luxury Apartments",
      img: "./images/project2.webp",
    },
    {
      id: 3,
      title: "Cultural Center",
      img: "./images/project3.webp",
    },
    {
      id: 4,
      title: "Residential Villas",
      img: "./images/project4.webp",
    },
    {
      id: 5,
      title: "Corporate Towers",
      img: "./images/project5.webp",
    },
  ];

  // 🔹 Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // ek-ek karke delay
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-16 bg-white text-center">
      {/* Text Section - Centered */}
      <div className="mb-12">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4"
          style={{
            background:
              "linear-gradient(90deg, #E86C0C 0%, #001F5F 70%, #C4C4C4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Our Projects
        </h2>
        <p className="text-sm  sm:text-base text-gray-600 max-w-2xl mx-auto mt-4 px-4">
          From high-end homes to modern office spaces, each Brikly project is a
          reflection of quality, detail, and dedication.
        </p>
      </div>

      {/* 🔹 Animated Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 md:mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={project.id}
            className={`relative overflow-hidden rounded-tl-4xl rounded-br-4xl group h-[200px] sm:h-[250px] md:h-[300px] ${
              index === 0 ? "sm:col-span-2 md:col-span-2" : ""
            }`}
            variants={cardVariants}
          >
            <img
              src={project.img}
              alt={project.title}
              loading="lazy" 
              className="w-full h-full object-cover brightness-75 
             transform transition duration-500 
             group-hover:scale-110 active:scale-110"
            />
            {/* Overlay Text */}
            <div className="text-white absolute inset-0 flex items-center justify-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Projects Button */}
      <Link to="/projects/Project_list">
        <button className="px-6 py-3 bg-orange-500 hover:bg-[#001F5F] hover:text-white cursor-pointer text-white font-medium rounded-full transition">
          View All Projects
        </button>
      </Link>
    </section>
  );
};

export default Projects;
