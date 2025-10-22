import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getProjects } from "../../utils/contentful";

const ProjectDetailDynamic = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImageModal = (img, index) => {
    setSelectedImage(img);
    setCurrentImageIndex(index);
  };
  const closeImageModal = () => setSelectedImage(null);

  // Detect mobile device
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Handle image tap/hover differently for mobile vs desktop
  const handleImageInteraction = (img, index) => {
    if (isMobile) {
      setShowInfo((prev) => !prev); // Toggle info panel on mobile tap
    } else {
      openImageModal(img, index); // Desktop → open modal
    }
  };

  // Navigation for image modal
  const nextImage = () => {
    if (project?.gallery && project.gallery.length > 0) {
      const nextIndex = (currentImageIndex + 1) % project.gallery.length;
      setCurrentImageIndex(nextIndex);
      setSelectedImage(project.gallery[nextIndex]);
    }
  };

  const prevImage = () => {
    if (project?.gallery && project.gallery.length > 0) {
      const prevIndex = currentImageIndex === 0 ? project.gallery.length - 1 : currentImageIndex - 1;
      setCurrentImageIndex(prevIndex);
      setSelectedImage(project.gallery[prevIndex]);
    }
  };

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const projects = await getProjects();
        const foundProject = projects.find(p => p.id === projectId);
        
        if (foundProject) {
          setProject(foundProject);
        } else {
          setError("Project not found");
        }
      } catch (err) {
        console.error("Error fetching project:", err);
        setError("Failed to load project details");
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      fetchProject();
    }
  }, [projectId]);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || "Project not found"}</p>
          <p className="text-gray-600">Please check the project ID and try again.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full min-h-screen">
      {/* Title Section */}
      <div className="w-full font-sans text-center py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-4xl md:text-5xl mt-20 font-bold tracking-tight text-gray-900 mb-2"
        >
          {project.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg mb-6"
        >
          Premium architectural solutions with unmatched durability and elegance
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"
        />
      </div>

      {/* Centered Image with Info Below */}
      <div className="flex flex-col items-center justify-center px-2 md:px-8 lg:px-16 max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onMouseEnter={() => !isMobile && setShowInfo(true)}
          onMouseLeave={() => !isMobile && setShowInfo(false)}
          className="w-full max-w-4xl rounded-xl"
        >
          {/* Main Image */}
          <img
            src={project.gallery?.[0] || project.img}
            alt={project.name}
            className="w-full h-[700px] object-contain rounded-xl mb-7 transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => handleImageInteraction(project.gallery?.[0] || project.img, 0)}
          />

          {/* Image Gallery Thumbnails */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-7">
              {project.gallery.slice(1).map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt={`${project.name} - Image ${index + 2}`}
                  className="w-full h-32 object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => handleImageInteraction(img, index + 1)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />
              ))}
            </div>
          )}

          {/* Sliding Project Details Panel */}
          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mt-4"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 text-center">
                  <h3 className="text-xl font-bold">PROJECT DETAILS</h3>
                </div>

                {/* Details Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500 font-medium">Project Name</p>
                      <p className="text-base md:text-lg font-semibold text-gray-800">
                        {project.name}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500 font-medium">Architect</p>
                      <p className="text-base md:text-lg font-semibold text-gray-800">
                        {project.architect || "N/A"}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500 font-medium">Builder</p>
                      <p className="text-base md:text-lg font-semibold text-gray-800">
                        {project.builder || "N/A"}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500 font-medium">Quantity</p>
                      <p className="text-base md:text-lg font-bold text-blue-700">
                        {project.quantity || "N/A"}
                      </p>
                    </div>
                  </div>

                  {/* Second Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center mt-4">
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500 font-medium">Type of Work</p>
                      <p className="text-base md:text-lg font-semibold text-green-700">
                        {project.typeOfWork || "N/A"}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500 font-medium">Sub Type</p>
                      <p className="text-base md:text-lg font-semibold text-gray-800">
                        {project.subType || "N/A"}
                      </p>
                    </div>
                  </div>

                  {/* Project Location if available */}
                  {project.projectLocation && (
                    <div className="mt-4">
                      <div className="bg-gray-50 p-3 rounded-lg shadow-sm text-center">
                        <p className="text-sm text-gray-500 font-medium">Project Location</p>
                        <p className="text-base md:text-lg font-semibold text-gray-800">
                          {typeof project.projectLocation === 'string' 
                            ? project.projectLocation 
                            : `Lat: ${project.projectLocation.lat}, Lon: ${project.projectLocation.lon}`
                          }
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && !isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              
              {/* Navigation arrows removed as requested */}

              {/* Image counter */}
              {project.gallery && project.gallery.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {project.gallery.length}
                </div>
              )}

              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
                onClickCapture={(e) => e.stopPropagation()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectDetailDynamic;
