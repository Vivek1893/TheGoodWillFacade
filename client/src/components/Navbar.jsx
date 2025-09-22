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

  // helper: close menu after click
  const handleLinkClick = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setProjectOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg rounded-b-3xl mx-2 md:mx-4 mt-1 md:mt-2 border-b-4 border-b-[#F37021] "
            : "bg-white/95 backdrop-blur-md shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src="/logo.png"
                  alt="Goodwill Facade"
                  className={`h-12 w-auto transition-all duration-500 ease-in-out ${
                    scrolled ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="font-medium transition-colors duration-300 relative group text-gray-800 hover:text-orange-500"
              >
                HOME
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "var(--accent-color)" }}
                ></span>
              </Link>

              <Link
                to="/Aboutus"
                className="font-medium transition-colors duration-300 relative group text-gray-800 hover:text-orange-500"
              >
                ABOUT US
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "var(--accent-color)" }}
                ></span>
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="font-medium transition-colors duration-300 relative group flex items-center gap-1 text-gray-800 hover:text-orange-500">
                  SERVICES
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: "var(--accent-color)" }}
                  ></span>
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg py-2 z-50">
                    <Link
                      to="/services/ACP"
                      className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      ACP
                    </Link>
                    <Link
                      to="/services/Aluminum_Windows"
                      className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      Aluminum Windows
                    </Link>
                    <Link
                      to="/services/MS_Structure"
                      className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      MS Structure
                    </Link>
                    <Link
                      to="/services/Railings"
                      className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      Railings
                    </Link>
                    <Link
                      to="/services/Skylight"
                      className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      Skylight
                    </Link>
                    <Link
                      to="/services/Stone_Cladding"
                      className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      Stone Cladding
                    </Link>
                    <Link
                      to="/services/Structural_Glazing"
                      className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      Structural Glazing
                    </Link>
                    <Link
                      to="/services/Tensile_Fabrics"
                      className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
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
                <button className="font-medium transition-colors duration-300 relative group flex items-center gap-1 text-gray-800 hover:text-orange-500">
                  PROJECTS
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: "var(--accent-color)" }}
                  ></span>
                </button>

                {projectOpen && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-lg py-2 z-50">
                    <Link
                      to="/projects/Detail_project"
                      className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      Project Detail
                    </Link>
                    <Link
                      to="/projects/Project_list"
                      className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
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
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "var(--accent-color)" }}
                ></span>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg transition-colors text-gray-800 hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-6 py-4 space-y-4">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="block text-gray-800 hover:text-orange-500 font-medium"
            >
              HOME
            </Link>
            <Link
              to="/Aboutus"
              onClick={handleLinkClick}
              className="block text-gray-800 hover:text-orange-500 font-medium"
            >
              ABOUT US
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left text-gray-800 font-medium flex justify-between items-center"
              >
                SERVICES
                <span>{servicesOpen ? "−" : "+"}</span>
              </button>
              {servicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/services/ACP"
                    onClick={handleLinkClick}
                    className="block text-gray-600 hover:text-orange-500"
                  >
                    ACP
                  </Link>
                  <Link
                    to="/services/Aluminum_Windows"
                    onClick={handleLinkClick}
                    className="block text-gray-600 hover:text-orange-500"
                  >
                    Aluminum Windows
                  </Link>
                  <Link
                    to="/services/MS_Structure"
                    onClick={handleLinkClick}
                    className="block text-gray-600 hover:text-orange-500"
                  >
                    MS Structure
                  </Link>
                  <Link
                    to="/services/Railings"
                    onClick={handleLinkClick}
                    className="block text-gray-600 hover:text-orange-500"
                  >
                    Railings
                  </Link>
                  <Link
                    to="/services/Skylight"
                    onClick={handleLinkClick}
                    className="block text-gray-600 hover:text-orange-500"
                  >
                    Skylight
                  </Link>
                  <Link
                    to="/services/Stone_Cladding"
                    onClick={handleLinkClick}
                    className="block text-gray-600 hover:text-orange-500"
                  >
                    Stone Cladding
                  </Link>
                  <Link
                    to="/services/Structural_Glazing"
                    onClick={handleLinkClick}
                    className="block text-gray-600 hover:text-orange-500"
                  >
                    Structural Glazing
                  </Link>
                  <Link
                    to="/services/Tensile_Fabrics"
                    onClick={handleLinkClick}
                    className="block text-gray-600 hover:text-orange-500"
                  >
                    Tensile Fabric
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Projects Dropdown */}
            <div>
              <button
                onClick={() => setProjectOpen(!projectOpen)}
                className="w-full text-left text-gray-800 font-medium flex justify-between items-center"
              >
                PROJECTS
                <span>{projectOpen ? "−" : "+"}</span>
              </button>
              {projectOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/projects/Detail_project"
                    onClick={handleLinkClick}
                    className="block text-gray-600 hover:text-orange-500"
                  >
                    Project Detail
                  </Link>
                  <Link
                    to="/projects/Project_list"
                    onClick={handleLinkClick}
                    className="block text-gray-600 hover:text-orange-500"
                  >
                    Project List
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/ContactUs"
              onClick={handleLinkClick}
              className="block text-gray-800 hover:text-orange-500 font-medium"
            >
              CONTACTS
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
