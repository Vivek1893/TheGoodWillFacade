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
      title: "EVOQ",
      img: "/Project_List_img/EVOQ.jpg",
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
      img: "/Project_List_img/GOYAL ASPIRE - WINDOW & PODIUM FACADE.jpg",
    },
     {
      id: 23,
      title: "",
      img: "/Project_List_img/.jpg",
    },
     {
      id: 24,
      title: "",
      img: "/Project_List_img/.jpg",
    },
     {
      id: 25,
      title: "",
      img: "/Project_List_img/.jpg",
    },
     {
      id: 26,
      title: "",
      img: "/Project_List_img/.jpg",
    },
     {
      id: 27,
      title: "",
      img: "/Project_List_img/.jpg",
    },
     {
      id: 28,
      title: "",
      img: "/Project_List_img/.jpg",
    },
     {
      id: 29,
      title: "",
      img: "/Project_List_img/.jpg",
    },
    {
      id: 30,
      title: "",
      img: "/Project_List_img/.jpg",
    },
     {
      id: 31,
      title: "",
      img: "/Project_List_img/.jpg",
    },
 {
      id: 32,
      title: "",
      img: "/Project_List_img/.jpg",
    },
 {
      id: 33,
      title: "",
      img: "/Project_List_img/.jpg",
    },
 {
      id: 34,
      title: "",
      img: "/Project_List_img/.jpg",
    },
 {
      id: 35,
      title: "",
      img: "/Project_List_img/.jpg",
    },
 {
      id: 36,
      title: "",
      img: "/Project_List_img/.jpg",
    },
 {
      id: 37,
      title: "",
      img: "/Project_List_img/.jpg",
    },
 {
      id: 38,
      title: "",
      img: "/Project_List_img/.jpg",
    },
 {
      id: 39,
      title: "",
      img: "/Project_List_img/.jpg",
    },
 {
      id: 40,
      title: "",
      img: "/Project_List_img/.jpg",
    },



  ];

  return (
    <div className="w-full">
      {/* 🔹 Hero Section */}
      <div className="relative w-full h-[60vh]">
        <img
          src="/images/slide3.jpg"
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
                className="w-full h-94 object-cover brightness-75 group-hover:brightness-100 transition-transform duration-500 transform group-hover:scale-105"
              />

              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl font-semibold opacity-90 group-hover:opacity-100 transition">
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
