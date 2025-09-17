import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "GodrejPlatinum",
      img: "/images/project1.webp",
      path: "/projects/Detail_project/GodrejPlatinum",
    },
    {
      id: 2,
      title: "Luxury Apartments",
      img: "/images/ser1.png",
    },
    {
      id: 3,
      title: "Cultural Center",
      img: "/images/project3.webp",
    },
    {
      id: 4,
      title: "Residential Villas",
      img: "/images/project4.webp",
    },
    {
      id: 5,
      title: "Corporate Towers",
      img: "/images/project5.webp",
    },
    {
      id: 2,
      title: "Luxury Apartments",
      img: "/images/ser1.png",
    },
    {
      id: 2,
      title: "Luxury Apartments",
      img: "/images/ser1.png",
    },
    {
      id: 3,
      title: "Cultural Center",
      img: "/images/project3.webp",
    },
    {
      id: 4,
      title: "Residential Villas",
      img: "/images/project4.webp",
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
