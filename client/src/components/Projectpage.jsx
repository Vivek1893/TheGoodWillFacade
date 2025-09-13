import React from "react";
import { Link } from "react-router-dom";
import App from "../App";
import "../App.css";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "GodrejPlatinum",
      img: "https://picsum.photos/800/500?random=1",
      path: "/projects/Detail_project/GodrejPlatinum",
    },
    {
      id: 2,
      title: "Luxury Apartments",
      img: "https://picsum.photos/400/500?random=2",
    },
    {
      id: 3,
      title: "Cultural Center",
      img: "https://picsum.photos/400/400?random=3",
    },
    {
      id: 4,
      title: "Residential Villas",
      img: "https://picsum.photos/400/400?random=4",
    },
    {
      id: 5,
      title: "Corporate Towers",
      img: "https://picsum.photos/800/400?random=5",
    },
  ];

  return (
    <section className="px-24 py-16 bg-white">
      {/* Text Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
        <div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 font-bold tracking-tight leading-tight"
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
          <h2 className="text-4xl font-bold text-gray-900 mt-2 leading-snug">
            Built to Last. <br /> Designed to Inspire.
          </h2>
        </div>
        <div className="flex flex-col md:items-end">
          <p className="text-gray-600 max-w-sm mb-4">
            From high-end homes to modern office spaces, each Brikly project is
            a reflection of quality, detail, and dedication.
          </p>

          <Link to="/projects/Project_list">
            <button className="px-6 py-3 bg-orange-500 hover:bg-[#001F5F] hover:text-white cursor-pointer text-white font-medium rounded-full transition">
              View All Projects
            </button>
          </Link>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <div
            key={project.id}
            className={`relative overflow-hidden rounded-2xl group ${
              index === 0 ? "md:col-span-2" : ""
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
              <h3 className="text-white text-xl md:text-2xl font-semibold opacity-90 group-hover:opacity-100 transition">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
