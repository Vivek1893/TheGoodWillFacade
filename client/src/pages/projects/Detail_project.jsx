import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "../../App.css";

// Custom marker
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const projects = [
  {
    id: "AMBIT",
    name: "AMBIT",
    img: "/project_detail_img/AMBIT 2.webp",
    path: "/projects/Ambit",
    lat: 19.075983,
    lng: 72.877655,
  },
  {
    id: "GoyalAspire",
    name: "GOYAL ASPIRE ",
    img: "/project_detail_img/GOYAL ASPIRE - WINDOW & PODIUM FACADE.webp",
    path: "/projects/goyal-aspire",
    lat: 19.2183,
    lng: 72.9781,
  },
  {
    id: "PARLE POINT A  - BHARUCH 1",
    name: "PARLE POINT A ",
    img: "/project_detail_img/PARLE POINT A  - BHARUCH 1.webp",
     path: "/projects/parle",
    lat: 18.933,
    lng: 72.822,
  },
  
  {
    id: "POLO ELEVATE",
    name: "POLO ELEVATE",
    img: "/project_detail_img/POLO ELEVATE.webp",
     path: "/projects/poloelevate",
  },
  {
    id: "SAI AASHISH",
    name: "SAI AASHISH ",
    img: "/project_detail_img/SAI AASHISH TRADE CENTRE  - NEW VIP ROAD 2.webp",
     path: "/projects/sai-aashish",
  },
  {
    id: "SAI SIGNATURE",
    name: "SAI SIGNATURE",
    img: "/project_detail_img/SAI SIGNATURE 1.webp",
     path: "/projects/saisignature",
  },
  {
    id: "SHIVEN ARISE",
    name: "SHIVEN ARISE",
    img: "/project_detail_img/SHIVEN ARISE.webp",
    path: "/projects/shivenarise",
    lat: 18.933,
    lng: 72.822,
  },
  {
    id: "SHREE NILKANTH ",
    name: "SHREE NILKANTH ",
    img: "/project_detail_img/SHREE NILKANTH BUSS HUB 11 (1).webp",
    path: "/projects/shreenilkanth",
    lat: 18.933,
    lng: 72.822,
  },
  {
    id: "Skyrise ",
    name: "SKY RISE",
    img: "/project_detail_img/SKY RISE 2.webp",
    path: "/projects/skyrise",
    lat: 18.933,
    lng: 72.822,
  },
  {
    id: "SPERANZA",
    name: "SPERANZA ",
    img: "/project_detail_img/SPERANZA -  PAL 2.webp",
    path: "/projects/speranza",
    lat: 18.933,
    lng: 72.822,
  },
  {
    id: "STONE CLADDING",
    name: "STONE CLADDING",
    img: "/project_detail_img/STONE CLADDING.webp",
    path: "/projects/stonecladding",
    lat: 18.933,
    lng: 72.822,
  },
  {
    id: "SUN TRADE",
    name: "SUN TRADE",
    img: "/project_detail_img/SUN TRADE - FRONT.webp",
    path: "/projects/suntrade",
    lat: 18.933,
    lng: 72.822,
  },
  {
    id: "VELOCITY",
    name: "VELOCITY",
    img: "/project_detail_img/VELOCITY 1.webp",
    path: "/projects/velocity",
    lat: 18.933,
    lng: 72.822,
  },
  {
    id: "VIVIANA",
    name: "VIVIANA",
    img: "/project_detail_img/VIVIANA - VESU 9.webp",
    path: "/projects/viviana",
    lat: 18.933,
    lng: 72.822,
  },
  {
    id: "WESTERN ARENA",
    name: "WESTERN ARENA ",
    img: "/project_detail_img/WESTERN ARENA 1.webp",
    path: "/projects/western",
    lat: 18.933,
    lng: 72.822,
  },
  {
    id: "ZIRCON ARENEA",
    name: "ZIRCON ARENEA",
    img: "/project_detail_img/ZIRCON ARENEA 1.webp",
    path: "/projects/zircon",
    lat: 18.933,
    lng: 72.822,
  },
];

const Residential = () => {
  // Animation container
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

  // Card animation
  const getCardVariants = (index) => {
    const directions = [
      { x: -60, y: 0 },
      { x: 60, y: 0 },
      { x: 0, y: 60 },
      { x: 0, y: -60 },
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
            <Link key={project.id} to={project.path}>
              <motion.div
                variants={getCardVariants(index)}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-white rounded-md p-4 flex flex-col items-center cursor-pointer shadow-xl hover:shadow"
              >
                <motion.img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-72 object-cover zoom-hover rounded-md"
                  whileHover={{ scale: 0.9 }}
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

      {/* 🔹 Map Section */}
     
    </div>
  );
};

export default Residential;
