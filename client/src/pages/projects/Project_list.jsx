import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "ACP CLADDING",
      img: "/Project_List_img/ACP CLADDING.jpg",
     
    },
    {
      id: 2,
      title: "ALASKAA",
      img: "/Project_List_img/ALASKAA 2.jpg",
    },
    {
      id: 3,
      title: "ALUMIN GLASS RAILING",
      img: "/Project_List_img/ALUMIN GLASS RAILING.jpg",
    },
    {
      id: 4,
      title: "ALUMIN. LOUVERS - HOSPITAL",
     img: "/Project_List_img/ALUMIN. LOUVERS - HOSPITAL.jpg",
    },
    {
      id: 5,
      title: "AMBIT 2",
      img: "/Project_List_img/AMBIT 2.jpg",
    },
    {
      id: 6,
      title: "ANAYA BUSSINESS HUB",
    img: "/Project_List_img/ANAYA BUSSINESS HUB.jpg",
    },
    {
      id: 7,
      title: "ANTM TEXTILE MARKET 1",
      img: "/Project_List_img/ANTM TEXTILE MARKET 1.jpg",
    },
    {
      id: 8,
      title: "ATAHARV LIFESTYLE 1",
     img: "/Project_List_img/ATAHARV LIFESTYLE 1.jpg",
    },
    {
      id: 9,
      title: "CANAL POINT 2",
      img: "/Project_List_img/CANAL POINT 2.jpg",
    },
    {
      id: 10,
      title: "CITY CENTRE - ALUMN RAILING",
      img: "/Project_List_img/CITY CENTRE - ALUMN RAILING.jpg",
    },
     {
      id: 11,
      title: "CROSSROADS 2",
      img: "/Project_List_img/CROSSROADS 2.jpg",
    },
     {
      id: 11,
      title: "DGU GLAZING - HOSPITAL",
      img: "/Project_List_img/DGU GLAZING - HOSPITAL.jpg",
    },
     {
      id: 12,
      title: "DRA BHARUCH BUSPORT",
      img: "/Project_List_img/DRA BHARUCH BUSPORT.jpg",
    },
     {
      id: 13,
      title: "PREMALDEEP SQR ",
      img: "/Project_List_img/PREMALDEEP SQR 1.jpg",
    },
     {
      id: 14,
      title: "FB_IMG_1754914748137",
      img: "/Project_List_img/FB_IMG_1754914748137.jpg",
    },
     {
      id: 15,
      title: "FLOORING GLASS PANEL 1",
      img: "/Project_List_img/FLOORING GLASS PANEL 1.jpg",
    },
     {
      id: 16,
      title: "FORTUNE CORNER VIEW",
      img: "/Project_List_img/FORTUNE CORNER VIEW.jpg",
    },
     {
      id: 17,
      title: "FORTUNE LANDMARK 2",
      img: "/Project_List_img/FORTUNE LANDMARK 2.jpg",
    },
     {
      id: 18,
      title: "GARDEN ENTRANCE",
      img: "/Project_List_img/GARDEN ENTRANCE.jpg",
    },
     {
      id: 19,
      title: "GAZEBO IN ALUMIN. LOUVERS",
      img: "/Project_List_img/GAZEBO IN ALUMIN. LOUVERS.jpg",
    },
     {
      id: 20,
      title: "GLASS PYRAMID",
      img: "/Project_List_img/GLASS PYRAMID.jpg",
    },
     {
      id: 21,
      title: "GOVARDHAN SQAURE - MPTA VARCHA (SUDAMA CHOWK) 1",
      img: "/Project_List_img/GOVARDHAN SQAURE - MPTA VARCHA (SUDAMA CHOWK) 1.jpg",
    },
     {
      id: 22,
      title: "GOYAL ASPIRE - WINDOW & PODIUM FACADE",
      img: "/Project_List_img/GOYAL ASPIRE - WINDOW & PODIUM FACADE.png",
    },
     {
      id: 23,
      title: "GREEN FUSION HOTEL",
      img: "/Project_List_img/GREEN FUSION HOTEL.jpg",
    },
     {
      id: 24,
      title: "PARVATI BUSS HUB ",
      img: "/Project_List_img/PARVATI BUSS HUB.jpg",
    },
     {
      id: 25,
      title: "HARDIK PANCAHLA RCHITECT OFFICE",
      img: "/Project_List_img/HARDIK PANCAHLA RCHITECT OFFICE 2.jpg",
    },
     {
      id: 26,
      title: "HENY ARCADE - DABHOLI ",
      img: "/Project_List_img/HENY ARCADE - DABHOLI 6.jpg",
    },
     {
      id: 27,
      title: "HOSPITAL - AJANTA PAHRMA",
      img: "/Project_List_img/HOSPITAL - AJANTA PAHRMA.jpg",
    },
     {
      id: 28,
      title: "HOTEL SKYLIGHT",
      img: "/Project_List_img/HOTEL SKYLIGHT 1.jpg",
    },
     {
      id: 29,
      title: "INFINIA ",
      img: "/Project_List_img/INFINIA 1.jpg",
    },
    {
      id: 30,
      title: "KENORITA",
      img: "/Project_List_img/KENORITA 2.jpg",
    },
     {
      id: 31,
      title: "KISMAT",
      img: "/Project_List_img/KISMAT 1.jpg",
    },
 {
      id: 32,
      title: "KUSUM SCHOOL - LIFT SOIDER FACADE",
      img: "/Project_List_img/KUSUM SCHOOL - LIFT SOIDER FACADE.jpg",
    },
 {
      id: 33,
      title: "MAMTA CHARITABLE TRUST HOSPTL",
      img: "/Project_List_img/MAMTA CHARITABLE TRUST HOSPTL.jpg",
    },
 {
      id: 34,
      title: "MAPLE SKY DECK",
      img: "/Project_List_img/MAPLE SKY DECK.jpg",
    },
 {
      id: 35,
      title: "MAPLE SKYDECK 4 (2)",
      img: "/Project_List_img/MAPLE SKYDECK 4 (2).jpg",
    },
 {
      id: 36,
      title: "MAPLE SQR 2",
      img: "/Project_List_img/MAPLE SQR 2.jpg",
    },
 {
      id: 37,
      title: "MILESTONE INDIGO",
      img: "/Project_List_img/MILESTONE INDIGO.jpg",
    },
 {
      id: 38,
      title: "MONARCH - WEST VIEW 2",
      img: "/Project_List_img/MONARCH - WEST VIEW 2.jpg",
    },
 {
      id: 39,
      title: "Orbit11",
      img: "/Project_List_img/Orbit11.jpg",
    },
 {
      id: 40,
      title: "PARLE POINT A  - BHARUCH ",
      img: "/Project_List_img/PARLE POINT A  - BHARUCH 1.jpg",
    },
     {
      id: 41,
      title: " RESTURANT 1",
      img: "/Project_List_img/RESTURANT 1.jpg",
    },
     {
      id: 42,
      title: "SAI AASHISH TRADE CENTRE  - NEW VIP ROAD 2 ",
      img: "/Project_List_img/SAI AASHISH TRADE CENTRE  - NEW VIP ROAD 2.jpg",
    },
     {
      id: 43,
      title: "SHRADDHA HOSPITAL 1 ",
      img: "/Project_List_img/SHRADDHA HOSPITAL 1.jpg",
    },
     {
      id: 44,
      title: "SONOROUS - GLASS CEILING SKYLIGHT",
      img: "/Project_List_img/SONOROUS - GLASS CEILING SKYLIGHT.jpg",
    },
     {
      id: 45,
      title: " SUN TRADE CENTER",
      img: "/Project_List_img/SUN TRADE CENTER.jpg",
    },
     {
      id: 46,
      title: " TERRACE GLASS SKYLIGHT",
      img: "/Project_List_img/TERRACE GLASS SKYLIGHT.jpg",
    },
     {
      id: 47,
      title: "TERRACE GLASS SKYLIGHT ",
      img: "/Project_List_img/TERRACE GLASS SKYLIGHT.jpg",
    },
     {
      id: 48,
      title: "VELOCITY - GLASS FACADE",
      img: "/Project_List_img/VELOCITY - GLASS FACADE.jpg",
    },
     {
      id: 49,
      title: "VIVIANA - VESU 9 ",
      img: "/Project_List_img/VIVIANA - VESU 9.jpg",
    },
     {
      id: 50,
      title: " WC - COMMON  LOUVER",
      img: "/Project_List_img/WC - COMMON  LOUVER.jpg",
    },
     {
      id: 51,
      title: "ZIRCON ARAENA 1 ",
      img: "/Project_List_img/ZIRCON ARAENA 1.jpg",
    },




  ];

  return (
    <div className="w-full">
      {/* 🔹 Hero Section */}
      <div className="relative w-full h-[60vh]">
        <img
          src="/Project_List_img/PARLE POINT A  - BHARUCH 1.jpg"
          alt="Glass Railing System"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark Overlay */}
        {/* Centered Heading */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide">
            Our Projects List
          </h1>
        </div>
      </div>
      <section className="px-7 md:px-24 py-16 bg-white text-center">
       

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-tl-4xl rounded-br-4xl group"
            >
              {/* Image with dark overlay + zoom effect */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-120 object-cover brightness-75 group-hover:brightness-100 transition-transform duration-500 transform group-hover:scale-105"
              />

              {/* Overlay Text */}
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-white text-xl md:text-2xl font-semibold">
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
