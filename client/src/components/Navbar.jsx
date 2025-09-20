import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<<<<<<< Updated upstream
    <header className="fixed top-0 left-0 w-full z-20 transition-all duration-300">
      <div className="flex items-stretch">
        {/* ===== Left Brand Panel (logo) ===== */}
        <div className="w-60 flex flex-col items-center justify-center py-4">
          <Link to="/" className="mb-2">
            <img
              src="/logo.png"
              alt="VNV Facades"
              className="w-44 h-30 bg-white object-contain"
            />
          </Link>
        </div>

        {/* ===== Center Navigation with Animation ===== */}
        <motion.div
          initial={{ x: 100, opacity: 0, width: "40%" }} // start hidden near logo
          animate={{ x: 50, opacity: 1, width: "100%" }} // expand to full width
          transition={{ duration: 2, ease: "easeOut" }}
          className={`flex items-center justify-center mt-2 mr-30 rounded-full transition-all duration-300 ${
            scrolled ? "bg-white text-black shadow-md" : "text-white"
          } h-14`}
        >
          {/* Desktop Nav */}
          <ul
            className={`hidden md:flex space-x-10 font-normal tracking-wide text-lg transition-colors duration-300 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <li>
              <Link
                to="/"
                className={`hover:${
                  scrolled ? "text-gray-600" : "text-gray-200"
                }`}
              >
                Home
=======
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Main navbar */}
              <div className={`transition-all duration-300 ${
                scrolled 
                  ? "bg-white/95 backdrop-blur-md shadow-lg rounded-b-3xl mx-2 md:mx-4 mt-1 md:mt-2" 
                  : "bg-white/95 backdrop-blur-md shadow-lg"
              }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Animated on scroll */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="Goodwill Facade" 
                  className={`h-12 w-auto transition-all duration-500 ease-in-out ${
                    scrolled 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-75"
                  }`}
                />
>>>>>>> Stashed changes
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
                      <Link
                        to="/"
                        className="font-medium transition-colors duration-300 relative group text-gray-800 hover:text-orange-500"
                      >
                        HOME
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: "var(--accent-color)" }}></span>
                      </Link>
                      
                      <Link
                        to="/Aboutus"
                        className="font-medium transition-colors duration-300 relative group text-gray-800 hover:text-orange-500"
                      >
                        ABOUT US
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: "var(--accent-color)" }}></span>
                      </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="font-medium transition-colors duration-300 relative group flex items-center gap-1 text-gray-800 hover:text-orange-500"
                >
                  SERVICES
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: "var(--accent-color)" }}></span>
                </button>
                
                {servicesOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg py-2 z-50">
                    <Link to="/services/ACP" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                      ACP
                    </Link>
                    <Link to="/services/Aluminum_Windows" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                      Aluminum Windows
                    </Link>
                    <Link to="/services/MS_Structure" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                      MS Structure
                    </Link>
                    <Link to="/services/Railings" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                      Railings
                    </Link>
                    <Link to="/services/Skylight" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                      Skylight
                    </Link>
                    <Link to="/services/Stone_Cladding" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                      Stone Cladding
                    </Link>
                    <Link to="/services/Structural_Glazing" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                      Structural Glazing
                    </Link>
                    <Link to="/services/Tensile_Fabrics" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                      Tensile Fabric
                    </Link>
                  </div>
                )}
              </div>

              {/* Projects Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProjectOpen(true)}
                onMouseLeave={() => setProjectOpen(false)}
              >
                <button
                  className="font-medium transition-colors duration-300 relative group flex items-center gap-1 text-gray-800 hover:text-orange-500"
                >
                  PROJECTS
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: "var(--accent-color)" }}></span>
                </button>
                
                {projectOpen && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-lg py-2 z-50">
                    <Link to="/projects/Detail_project" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                      Project Detail
                    </Link>
                    <Link to="/projects/Project_list" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                      Project List
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/ContactUs"
className="font-medium transition-colors duration-300 relative group text-gray-800 hover:text-orange-500"
              >
                CONTACTS
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: "var(--accent-color)" }}></span>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg transition-colors text-gray-800 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
<<<<<<< Updated upstream
        <div className="md:hidden bg-orange-500 px-6 py-4 space-y-3 font-semibold uppercase text-white">
          <Link to="/" className="block">
            Home
          </Link>
          <Link to="/Aboutus" className="block">
            About Us
          </Link>
=======
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-6 py-4 space-y-4">
            <Link to="/" className="block text-gray-800 hover:text-orange-500 font-medium">HOME</Link>
            <Link to="/Aboutus" className="block text-gray-800 hover:text-orange-500 font-medium">ABOUT US</Link>
            
            <div className="space-y-2">
              <div className="text-gray-800 font-medium">SERVICES</div>
              <div className="ml-4 space-y-2">
                <Link to="/services/ACP" className="block text-gray-600 hover:text-orange-500">ACP</Link>
                <Link to="/services/Aluminum_Windows" className="block text-gray-600 hover:text-orange-500">Aluminum Windows</Link>
                <Link to="/services/MS_Structure" className="block text-gray-600 hover:text-orange-500">MS Structure</Link>
                <Link to="/services/Railings" className="block text-gray-600 hover:text-orange-500">Railings</Link>
                <Link to="/services/Skylight" className="block text-gray-600 hover:text-orange-500">Skylight</Link>
                <Link to="/services/Stone_Cladding" className="block text-gray-600 hover:text-orange-500">Stone Cladding</Link>
                <Link to="/services/Structural_Glazing" className="block text-gray-600 hover:text-orange-500">Structural Glazing</Link>
                <Link to="/services/Tensile_Fabrics" className="block text-gray-600 hover:text-orange-500">Tensile Fabric</Link>
              </div>
            </div>
>>>>>>> Stashed changes

            <div className="space-y-2">
              <div className="text-gray-800 font-medium">PROJECTS</div>
              <div className="ml-4 space-y-2">
                <Link to="/projects/Detail_project" className="block text-gray-600 hover:text-orange-500">Project Detail</Link>
                <Link to="/projects/Project_list" className="block text-gray-600 hover:text-orange-500">Project List</Link>
              </div>
            </div>

            <Link to="/ContactUs" className="block text-gray-800 hover:text-orange-500 font-medium">CONTACTS</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
