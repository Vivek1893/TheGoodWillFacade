import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "AMBIT",
      img: "/Project_List_img/AMBIT 2.webp",
     
    },
    {
      id: 2,
      title: "GOYAL ASPIRE - WINDOW & PODIUM FACADE",
      img: "/Project_List_img/GOYAL ASPIRE - WINDOW & PODIUM FACADE.webp",
    },
    {
      id: 3,
      title: "PARLE POINT A  - BHARUCH ",
      img: "/Project_List_img/PARLE POINT A  - BHARUCH 1.webp",
    },
    {
      id: 4,
      title: "POLO ELEVATE",
     img: "/Project_List_img/POLO ELEVATE.webp",
    },
    {
      id: 5,
      title: "SAI AASHISH TRADE CENTRE ",
      img: "/Project_List_img/SAI AASHISH TRADE CENTRE  - NEW VIP ROAD 2.webp",
    },
    {
      id: 6,
      title: "SAI SIGNATURE ",
    img: "/Project_List_img/SAI SIGNATURE 1.webp",
    },
    {
      id: 7,
      title: "SHIVEN ARISE ",
      img: "/Project_List_img/SHIVEN ARISE.webp",
    },
    {
      id: 8,
      title: "SHREE NILKANTH BUSS HUB",
     img: "/Project_List_img/SHREE NILKANTH BUSS HUB 11 (1).webp",
    },
    {
      id: 9,
      title: "SKY RISE",
      img: "/Project_List_img/SKY RISE 2.webp",
    },
    {
      id: 10,
      title: "SPERANZA",
      img: "/Project_List_img/SPERANZA -  PAL 2.webp",
    },
     {
      id: 11,
      title: "STONE CLADDING",
      img: "/Project_List_img/STONE CLADDING.webp",
    },
     {
      id: 12,
      title: "SUN TRADE ",
      img: "/Project_List_img/SUN TRADE - FRONT.webp",
    },
     {
      id: 13,
      title: "SUN TRADE CORBER",
      img: "/Project_List_img/SUN TRADE CORBER.webp",
    },
     {
      id: 14,
      title: "SUN TRADE SKY VIEW ",
      img: "/Project_List_img/SUN TRADE SKY VIEW.webp",
    },
     {
      id: 15,
      title: "SUN TRADE",
      img: "/Project_List_img/SUN TRADE.webp",
    },
    
     {
      id: 16,
      title: "VELOCITY ",
      img: "/Project_List_img/VELOCITY 1.webp",
    },
    {
      id: 17,
      title: "VIVIANA - VESU ",
      img: "/Project_List_img/VIVIANA - VESU 9.webp",
    },
    {
      id: 18,
      title: "WESTERN ARENA ",
      img: "/Project_List_img/WESTERN ARENA 1.webp",
    },
    {
      id: 19,
      title: "ZIRCON ARENEA ",
      img: "/Project_List_img/ZIRCON ARENEA 1.webp",
    },
    {
      id: 20,
      title: "ZIRCON PLUS -  KATARAGAM ",
      img: "/Project_List_img/ZIRCON PLUS -  KATARAGAM 1 (1).webp",
    },
    {
      id: 21,
      title: "ANAYA BUSSINESS HUB",
      img: "/Project_List_img/ANAYA BUSSINESS HUB.webp",
    },
    {
      id: 22,
      title: "ANTM TEXTILE MARKET",
      img: "/Project_List_img/ANTM TEXTILE MARKET.webp",
    },

    {
      id: 23,
      title: "CANAL POINT ",
      img: "/Project_List_img/CANAL POINT 2.webp",
    },
    {
      id: 24,
      title: "CITY CENTRE - ALUMN RAILING",
      img: "/Project_List_img/CITY CENTRE - ALUMN RAILING.webp",
    },
    {
      id: 25,
      title: "CROSSROADS ",
      img: "/Project_List_img/CROSSROADS 2.webp",
    },
    {
      id: 26,
      title: "SUN TRADE CENTER",
      img: "/Project_List_img/SUN TRADE CENTER.webp",
    },
    {
      id: 27,
      title: "DGU GLAZING - HOSPITAL.",
      img: "/Project_List_img/DGU GLAZING - HOSPITAL.webp",
    },
    {
      id: 28,
      title: "EVOQ",
      img: "/Project_List_img/EVOQ.webp",
    },
    {
      id: 29,
      title: "FORTUNE CORNER VIEW",
      img: "/Project_List_img/FORTUNE CORNER VIEW.webp",
    },
    {
      id: 30,
      title: "GREEN FUSION HOTEL",
      img: "/Project_List_img/GREEN FUSION HOTEL.webp",
    },
    {
      id: 31,
      title: "HENY ARCADE - DABHOLI ",
      img: "/Project_List_img/HENY ARCADE - DABHOLI 6.webp",
    },

    {
      id: 32,
      title: "INFINIA .",
      img: "/Project_List_img/INFINIA 1.webp",
    },
    {
      id: 33,
      title: "MAPLE SKY DECK",
      img: "/Project_List_img/MAPLE SKY DECK.webp",
    },
    {
      id: 35,
      title: "MAPLE SQR ",
      img: "/Project_List_img/MAPLE SQR 2.webp",
    },
    {
      id: 36,
      title: "MILESTONE INDIGO",
      img: "/Project_List_img/MILESTONE INDIGO.webp",
    },
    {
      id: 37,
      title: "MILESTONE",
      img: "/Project_List_img/MILESTONE.webp",
    },
    {
      id: 38,
      title: "PARLE POINT A - BHARUCH ",
      img: "/Project_List_img/PARLE POINT A  - BHARUCH 1.webp",
    },
    {
      id: 39,
      title: "PARLE POINT A",
      img: "/Project_List_img/PARLE POINT A.webp",
    },
     {
      id: 40,
      title: "POLO ELEVATE",
      img: "/Project_List_img/POLO ELEVATE.webp",
    },
     {
      id: 41,
      title: "SHOWER CUBICALS",
      img: "/Project_List_img/SHOWER CUBICALS.webp",
    },
     {
      id: 42,
      title: "SPIDER FACADE",
      img: "/Project_List_img/SPIDER FACADE.webp",
    },
     {
      id: 43,
      title: "ZIRCON ",
      img: "/Project_List_img/ZIRCON 2.webp",
    },


    




  ];

  return (
    <div className="w-full">
      {/* 🔹 Hero Section */}
      <section className="relative w-full h-screen max-h-[75vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60 z-10"></div>
        <img
         src="/hero2.jpg"
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
            <span className="text-white"> Project </span>{" "}
            <span className="text-orange-400">Lists</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
          ></motion.div>
        </div>
      </section>
      <section className="px-7 md:px-24 py-16 bg-white text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-tl-4xl rounded-br-4xl group shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-100 object-cover transition-transform duration-500 transform group-hover:scale-105"
                />
              </div>

              {/* Title Box - Hidden initially */}
              <div className="absolute bottom-0 left-0 w-full bg-white p-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-gray-800 text-lg md:text-xl font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
