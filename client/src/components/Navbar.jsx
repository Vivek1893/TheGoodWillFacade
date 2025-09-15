import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    <header className="fixed top-0 left-0 w-full z-20 transition-all duration-300">
      <div className="flex items-stretch">
        {/* ===== Left Brand Panel (logo) ===== */}
        <div className="w-60 flex flex-col items-center justify-center py-4">
          <Link to="/" className="mb-2">
            <img
              src="/logo.png"
              alt="VNV Facades"
              className="w-44 h-30 object-contain"
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
              </Link>
            </li>
            <li>
              <Link
                to="/Aboutus"
                className={`hover:${
                  scrolled ? "text-gray-600" : "text-gray-200"
                }`}
              >
                About Us
              </Link>
            </li>

            {/* ===== Services Dropdown ===== */}
            <li
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 hover:${
                  scrolled ? "text-gray-600" : "text-gray-200"
                }`}
              >
                Services ▾
              </button>
              {servicesOpen && (
                <ul className="absolute left-0 top-full w-56 bg-white shadow-lg text-sm text-black z-50">
                  <li>
                    <Link
                      to="/services/ACP"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      ACP
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/Aluminum_Windows"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      Aluminum Windows
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/MS_Structure"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      MS Structure
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/Railings"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      Railings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/Skylight"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      Skylight
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/Stone_Cladding"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      Stone Cladding
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/Structural_Glazing"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      Structural Glazing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/Tensile_Fabrics"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      Tensile Fabric
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* ===== Projects Dropdown ===== */}
            <li
              className="relative"
              onMouseEnter={() => setProjectOpen(true)}
              onMouseLeave={() => setProjectOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 hover:${
                  scrolled ? "text-gray-600" : "text-gray-200"
                }`}
              >
                Projects ▾
              </button>
              {projectOpen && (
                <ul className="absolute left-0 top-full w-56 bg-white shadow-lg text-sm text-black z-50">
                  {/* <li>
                    <Link
                      to="/projects/Detail_project"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      Project Detail
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      to="/projects/Project_list"
                      className="block px-4 py-2 hover:text-orange-500"
                    >
                      Project List
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/ContactUs"
                className={`hover:${
                  scrolled ? "text-gray-600" : "text-gray-200"
                }`}
              >
                Contacts
              </Link>
            </li>
          </ul>

          {/* ===== Mobile Toggle ===== */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl ml-4 text-blue-800"
          >
            ☰
          </button>
        </motion.div>
      </div>

      {/* ===== Mobile Menu ===== */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-6 py-4 space-y-3 font-semibold uppercase text-white">
          <Link to="/" className="block">
            Home
          </Link>
          <Link to="/Aboutus" className="block">
            About Us
          </Link>

          <details>
            <summary className="cursor-pointer">Services</summary>
            <ul className="ml-4 space-y-2 text-sm">
              <li>
                <Link to="/services/ACP">ACP</Link>
              </li>
              <li>
                <Link to="/services/Aluminum_Windows">Aluminum Windows</Link>
              </li>
              <li>
                <Link to="/services/MS_Structure">MS Structure</Link>
              </li>
              <li>
                <Link to="/services/Railings">Railings</Link>
              </li>
              <li>
                <Link to="/services/Skylight">Skylight</Link>
              </li>
              <li>
                <Link to="/services/Stone_Cladding">Stone Cladding</Link>
              </li>
              <li>
                <Link to="/services/Structural_Glazing">
                  Structural Glazing
                </Link>
              </li>
              <li>
                <Link to="/services/Tensile_Fabrics">Tensile Fabric</Link>
              </li>
            </ul>
          </details>

          <details>
            <summary className="cursor-pointer">Projects</summary>
            <ul className="ml-4 space-y-2 text-sm">
              <li>
                <Link to="/projects/Detail_project">Project Detail</Link>
              </li>
              <li>
                <Link to="/projects/Project_list">Project List</Link>
              </li>
            </ul>
          </details>

          <Link to="/contact" className="block">
            Contacts
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
