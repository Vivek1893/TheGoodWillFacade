import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../App.css";

const projects = 
[
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
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const getCardVariants = (index) => {
    const directions = [
      { x: -60, y: 0 },
      { x: 60, y: 0 },
      { x: 0, y: 60 },
      { x: 0, y: -60 },
    ];
    const dir = directions[index % directions.length];
    return { hidden: { opacity: 0, ...dir }, show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
  };

  return (
    <div className="w-full">
      {/* 🔹 Hero Section */}
      <div className="relative w-full h-[50vh] sm:h-[70vh] md:h-[90vh]">
        <img
          src="/images/projec.png"
          alt="Mumbai Skyline"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🔹 Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show" // use animate instead of whileInView
        >

          {projects.map((project, index) => (
            <Link key={project.id} to={project.path}>
              <motion.div
                variants={getCardVariants(index)}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-white rounded-md p-3 sm:p-4 flex flex-col items-center cursor-pointer shadow-lg hover:shadow-xl"
              >
                <motion.img
                  src={project.img}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-md"
                  whileHover={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="mt-3 text-base sm:text-lg font-semibold text-center">
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



      {/* 🔹 Map Section */}
      {/* <div className="w-full h-[500px] mt-10">
        <MapContainer
          center={[19.076, 72.8777]}
          zoom={11}
          scrollWheelZoom={false}
          className="h-full w-full rounded-lg shadow-lg"
        >
         
          <TileLayer
            url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
            attribution="&copy; Google Maps"
          />

          {projects.map(
            (p) =>
              p.lat &&
              p.lng && (
                <Marker key={p.id} position={[p.lat, p.lng]} icon={markerIcon}>
                  <Popup>
                    <div className="text-sm font-semibold">{p.name}</div>
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-32 h-20 object-cover mt-2 rounded"
                    />
                  </Popup>
                </Marker>
              )
          )}
        </MapContainer>
      </div> */}