import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../App.css";

// 🗺️ Leaflet + React Leaflet
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Custom marker icon
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Project list (add lat/lng for markers if available)
const projects = [
  {
    id: "AMBIT",
    name: "AMBIT",
    img: "/project_detail_img/AMBIT 2.webp",
    path: "/projects/Ambit",
    lat: 19.076, // example coordinate
    lng: 72.8777,
  },
  {
    id: "GoyalAspire",
    name: "GOYAL ASPIRE",
    img: "/project_detail_img/GOYAL ASPIRE - WINDOW & PODIUM FACADE.webp",
    path: "/projects/goyal-aspire",
  },
  {
    id: "PARLE POINT A",
    name: "PARLE POINT A",
    img: "/project_detail_img/PARLE POINT A  - BHARUCH 1.webp",
    path: "/projects/parle",
  },
  {
    id: "POLO ELEVATE",
    name: "POLO ELEVATE",
    img: "/project_detail_img/POLO ELEVATE.webp",
    path: "/projects/poloelevate",
  },
  {
    id: "SAI AASHISH",
    name: "SAI AASHISH",
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
  },
  {
    id: "SHREE NILKANTH ",
    name: "SHREE NILKANTH ",
    img: "/project_detail_img/SHREE NILKANTH BUSS HUB 11 (1).webp",
    path: "/projects/shreenilkanth",
  },
  {
    id: "Skyrise ",
    name: "SKY RISE",
    img: "/project_detail_img/SKY RISE 2.webp",
    path: "/projects/skyrise",
  },
  {
    id: "SPERANZA",
    name: "SPERANZA ",
    img: "/project_detail_img/SPERANZA -  PAL 2.webp",
    path: "/projects/speranza",
  },
  {
    id: "STONE CLADDING",
    name: "STONE CLADDING",
    img: "/project_detail_img/STONE CLADDING.webp",
    path: "/projects/stonecladding",
  },
  {
    id: "SUN TRADE",
    name: "SUN TRADE",
    img: "/project_detail_img/SUN TRADE - FRONT.webp",
    path: "/projects/suntrade",
  },
  {
    id: "VELOCITY",
    name: "VELOCITY",
    img: "/project_detail_img/VELOCITY 1.webp",
    path: "/projects/velocity",
  },
  {
    id: "VIVIANA",
    name: "VIVIANA",
    img: "/project_detail_img/VIVIANA - VESU 9.webp",
    path: "/projects/viviana",
  },
  {
    id: "WESTERN ARENA",
    name: "WESTERN ARENA ",
    img: "/project_detail_img/WESTERN ARENA 1.webp",
    path: "/projects/western",
  },
  {
    id: "ZIRCON ARENEA",
    name: "ZIRCON ARENEA",
    img: "/project_detail_img/ZIRCON ARENEA 1.webp",
    path: "/projects/zircon",
  },
];

const Residential = () => {
  // ✅ Container animation (no delay)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // only stagger, no delay
      },
    },
  };

  // Card animation directions
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
    <div className="w-full min-h-screen bg-gray-50">
      {/* 🔹 Hero Section */}
      <div className="relative w-full h-[50vh] sm:h-[70vh] md:h-[90vh]">
        <img
          src="/project.png"
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
                  onError={(e) => (e.target.src = "/fallback.jpg")}
                />
                <h3 className="mt-4 text-lg font-semibold text-center">
                  {project.name}
                </h3>
                <div className="w-8 sm:w-10 h-[2px] bg-blue-800 mt-2"></div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Residential;
