import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Ambit = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (img) => setSelectedImage(img);
  const closeImageModal = () => setSelectedImage(null);

  // Detect mobile device
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Handle image tap/hover differently for mobile vs desktop
  const handleImageInteraction = (img) => {
    if (isMobile) {
      setShowInfo((prev) => !prev); // Toggle info panel on mobile tap
    } else {
      openImageModal(img); // Desktop → open modal
    }
  };

  const projectData = {
    name: "AMBIT VISTA",
    architect: "MEHUL KANAKIA",
    builder: "AMBIT REALTORS",
    quantity: "18,000",
    workType: "WINDOW & FACADE WORK",
    subType: "WINDOW",
  };

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
          AMBIT <span className="text-blue-600">PLATINUM</span>
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
          {/* Image */}
          <img
            src="/project_detail_img/AMBIT 2.webp"
            alt="AMBIT VISTA"
            className="w-full h-[700px] object-contain rounded-xl mb-7 transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => handleImageInteraction("/project_detail_img/AMBIT 2.webp")}
          />

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
                        {projectData.name}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500 font-medium">Architect</p>
                      <p className="text-base md:text-lg font-semibold text-gray-800">
                        {projectData.architect}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500 font-medium">Builder</p>
                      <p className="text-base md:text-lg font-semibold text-gray-800">
                        {projectData.builder}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500 font-medium">Quantity</p>
                      <p className="text-base md:text-lg font-bold text-blue-700">
                        {projectData.quantity}
                      </p>
                    </div>
                  </div>

                  {/* Second Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center mt-4">
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500 font-medium">Type of Work</p>
                      <p className="text-base md:text-lg font-semibold text-green-700">
                        {projectData.workType}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500 font-medium">Sub Type</p>
                      <p className="text-base md:text-lg font-semibold text-gray-800">
                        {projectData.subType}
                      </p>
                    </div>
                  </div>
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
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
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

export default Ambit;
