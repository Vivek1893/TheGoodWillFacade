import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "godrej-platinum", // Added id property
    name: "Godrej Platinum",
    img: "/images/godrej.jpg",
    path: "/projects/Detail_project/GodrejPlatinum",
  },
  {
    id: "avana",
    name: "Avana",
    img: "/images/avana.jpg",
    path: "/projects/avana",
  },
  {
    id: "indiabulls-sky",
    name: "Indiabulls Sky",
    img: "/images/indiabulls-sky.jpg",
  },
  { id: "avighna", name: "One Avighna Park", img: "/images/avighna.jpg" },
  { id: "oberoi", name: "Oberoi 360 West", img: "/images/oberoi.jpg" },
  { id: "the-park", name: "The Park", img: "/images/the-park.jpg" },
  { id: "the42", name: "The 42", img: "/images/the42.jpg" },
  { id: "embassy", name: "Embassy Boulevard", img: "/images/embassy.jpg" },
  { id: "kingfisher", name: "Kingfisher Tower", img: "/images/kingfisher.jpg" },
  { id: "atmosphere", name: "Atmosphere", img: "/images/atmosphere.jpg" },
  { id: "blu", name: "Indiabulls Blu", img: "/images/indiabulls-blu.jpg" },
  { id: "lake", name: "Embassy Lake Terrace", img: "/images/lake.jpg" },
  {
    id: "skyforest",
    name: "Indiabulls Skyforest",
    img: "/images/skyforest.jpg",
  },
  { id: "gulita", name: "Gulita", img: "/images/gulita.jpg" },
  { id: "worldone", name: "Lodha World One", img: "/images/worldone.jpg" },
  { id: "artesia", name: "Artesia", img: "/images/artesia.jpg" },
];

const Residential = () => {
  return (
    <div className="w-full">
      {/* 🔹 Hero Section */}
      <div className="relative w-full h-[60vh]">
        <img
          src="/images/mumbai-skyline.jpg"
          alt="Mumbai Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Residential
          </h1>
        </div>
      </div>

      {/* 🔹 Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center hover:shadow-lg transition cursor-pointer">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-72 object-cover rounded-md"
                />
                <h3 className="mt-4 text-lg font-semibold text-center">
                  {project.name}
                </h3>
                <div className="w-10 h-[2px] bg-blue-800 mt-2"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Residential;
