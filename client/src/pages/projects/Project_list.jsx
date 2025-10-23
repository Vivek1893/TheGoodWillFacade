// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { getProjects } from "../../utils/contentful";

// const Projects = () => {
//   const [projectData, setProjectData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     getProjects()
//       .then((data) => {
//         console.log("All projects:", data);
//         const ongoingProjects = data.filter((p) => p.status === "ongoing");
//         console.log("Ongoing projects:", ongoingProjects);
//         setProjectData(ongoingProjects);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error loading projects:", err);
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="w-full">
//       {/* 🔹 Hero Section */}
//       <section className="relative w-full h-screen max-h-[75vh] overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60 z-10"></div>
//         <img
//           src="/hero2.jpg"
//           alt="ACP Cladding"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-3xl md:text-3xl font-bold text-white mb-4 tracking-wide"
//           >
//             <span className="text-white"> Project </span>{" "}
//             <span className="text-orange-400">Lists</span>
//           </motion.h1>

//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
//           ></motion.div>
//         </div>
//       </section>

//       {/* 🔹 Ongoing Projects */}
//       <section className="px-7 md:px-24 py-16 bg-white text-center">
//         {loading ? (
//           <div className="flex items-center justify-center py-12">
//             <div className="text-center">
//               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
//               <p className="text-gray-600">Loading projects...</p>
//             </div>
//           </div>
//         ) : error ? (
//           <div className="flex items-center justify-center py-12">
//             <div className="text-center">
//               <p className="text-red-600 mb-4">Error loading projects: {error}</p>
//               <p className="text-gray-600">Please check your Contentful configuration.</p>
//             </div>
//           </div>
//         ) : projectData.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-gray-600 text-lg">No ongoing projects found.</p>
//             <p className="text-gray-500">Please add some projects in Contentful with status "ongoing".</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
//             {projectData.map((project) => (
//               <div
//                 key={project.id}
//                 className="relative overflow-hidden rounded-tl-4xl rounded-br-4xl group shadow-md hover:shadow-lg transition-all duration-300 bg-white"
//               >
//                 {/* Image Container */}
//                 <div className="overflow-hidden h-72">
//                   <img
//                     src={project.img}
//                     alt={project.name}
//                     loading="lazy"
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     onError={(e) => (e.target.src = "/fallback.jpg")}
//                   />
//                 </div>

//                 {/* Project Title - Always Visible */}
//                 <div className="p-4 bg-white">
//                   <h3 className="text-gray-800 text-lg font-semibold text-center">
//                     {project.name}
//                   </h3>
//                   <div className="mt-2 flex justify-center">
//                     <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full"></div>
//                   </div>
//                 </div>

//                 {/* Status Badge */}
//                 {/* <div className="absolute top-4 right-4">
//                   <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
//                     ONGOING
//                   </span>
//                 </div> */}
//               </div>
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default Projects;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getProjects } from "../../utils/contentful";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProjects()
      .then((data) => {
        console.log("All projects:", data);
        const ongoingProjects = data.filter((p) => p.status === "ongoing");
        console.log("Ongoing projects:", ongoingProjects);
        setProjectData(ongoingProjects);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading projects:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

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

      {/* 🔹 Ongoing Projects */}
      <section className="px-7 md:px-24 py-16 bg-white text-center">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading projects...</p>
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <p className="text-red-600 mb-4">
                Error loading projects: {error}
              </p>
              <p className="text-gray-600">
                Please check your Contentful configuration.
              </p>
            </div>
          </div>
        ) : projectData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No ongoing projects found.</p>
            <p className="text-gray-500">
              Please add some projects in Contentful with status "ongoing".
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
            {projectData.map((project) => (
              <div
                key={project.id}
                className="relative overflow-hidden rounded-tl-4xl rounded-br-4xl group shadow-md hover:shadow-lg transition-all duration-300 bg-white"
              >
                {/* Image Container */}
                <div className="overflow-hidden h-72 relative">
                  <img
                    src={project.img}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => (e.target.src = "/fallback.jpg")}
                  />

                  {/* Transparent Overlay */}
                  {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}

                  {/* Title Slide Up from Bottom */}
                  <div className="absolute bottom-0 left-0 w-full flex justify-center">
                    <div className="translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out bg-white/90 w-full text-center p-4 shadow-md">
                      <h3 className="text-lg text-[#0B3558] font-semibold drop-shadow-sm text-center">
                        {project.name}
                      </h3>
                      <div className="mt-2 flex justify-center">
                        <div className="w-10 h-1 bg-[#F37021] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;
