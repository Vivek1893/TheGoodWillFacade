import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../App.css";

const projects = [
  {
    id: "godrej-platinum",
    name: "Godrej Platinum",
    img: "/images/project1.webp",
    path: "/projects/Detail_project/GodrejPlatinum",
  },
  {
    id: "avana",
    name: "Avana",
    img: "/images/project2.webp",
    path: "/projects/avana",
  },
  {
    id: "indiabulls-sky",
    name: "Indiabulls Sky",
    img: "/images/project3.webp",
  },
  { id: "avighna", name: "One Avighna Park", img: "/images/project4.webp" },
  { id: "oberoi", name: "Oberoi 360 West", img: "/images/project5.webp" },
  { id: "the-park", name: "The Park", img: "/images/project6.webp" },
  { id: "the42", name: "The 42", img: "/images/project7.webp" },
  { id: "embassy", name: "Embassy Boulevard", img: "/images/project8.webp" },
  { id: "kingfisher", name: "Kingfisher Tower", img: "/images/project9.webp" },
  { id: "atmosphere", name: "Atmosphere", img: "/images/project1.webp" },
  { id: "blu", name: "Indiabulls Blu", img: "/images/project2.webp" },
  { id: "lake", name: "Embassy Lake Terrace", img: "/images/project3.webp" },
  {
    id: "skyforest",
    name: "Indiabulls Skyforest",
    img: "/images/project4.webp",
  },
  { id: "gulita", name: "Gulita", img: "/images/project5.webp" },
  { id: "worldone", name: "Lodha World One", img: "/images/project6.webp" },
  { id: "artesia", name: "Artesia", img: "/images/project9.webp" },
];

const Residential = () => {
  // 🔹 Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // 🔹 Function to get animation direction per card
  const getCardVariants = (index) => {
    const directions = [
      { x: -60, y: 0 }, // left
      { x: 60, y: 0 }, // right
      { x: 0, y: 60 }, // bottom
      { x: 0, y: -60 }, // top
    ];
    const dir = directions[index % directions.length];

    return {
      hidden: { opacity: 0, ...dir },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
      },
    };
  };

  return (
    <div className="w-full">
      {/* 🔹 Hero Section */}
      <div className="relative w-full h-[90vh]">
        <img
          src="/images/projec.png"
          alt="Mumbai Skyline"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🔹 Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <motion.div
                variants={getCardVariants(index)}
                // whileHover={{
                //   scale: 1.05,
                //   y: -8,
                //   boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
                // }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-white rounded-md p-4 flex flex-col items-center cursor-pointer  shadow-xl hover:shadow"
              >
                <motion.img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-72 object-cover zoom-hover rounded-md"
                  whileHover={{ scale: .90 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="mt-4 text-lg font-semibold text-center">
                  {project.name}
                </h3>
                <div className="w-10 h-[2px] bg-blue-800 mt-2"></div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Residential;
