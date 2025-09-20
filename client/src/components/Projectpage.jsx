import React from "react";
import { Link } from "react-router-dom";
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
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-4 px-4">
          From high-end homes to modern office spaces, each Brikly project is a
          reflection of quality, detail, and dedication.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 md:mb-12">
        {projectData.map((project, index) => (
          <div
            key={project.id}
            className={`relative overflow-hidden rounded-tl-4xl rounded-br-4xl group h-[200px] sm:h-[250px] md:h-[300px] ${
              index === 0 ? "sm:col-span-2 md:col-span-2" : ""
            }`}
          >
            {/* Image with dark overlay + zoom effect */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover brightness-75 group-hover:brightness-100 zoom-hover"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold opacity-90 group-hover:opacity-100 transition">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

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
