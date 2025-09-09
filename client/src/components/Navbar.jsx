import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false); // ✅ added for Projects dropdown

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        scrolled ? "bg-blue-700 shadow-md" : "bg-blue-700"
      }`}
    >
      <div className="flex items-center">
        {/* ===== Left Brand Panel (logo) ===== */}
        <div className="w-56 flex flex-col items-center transition-all duration-300">
          <Link to="/" className="mb-2">
            <img
              src="/logo.png"
              alt="VNV Facades"
              className="w-36 transition-all duration-300 brightness-250"
            />
          </Link>
        </div>

        {/* ===== Center Navigation ===== */}
        <div className="flex-1 flex items-center justify-center h-16">
          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-10 font-medium tracking-wide text-sm text-white">
            <li>
              <Link to="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Aboutus" className="hover:text-gray-200">
                About Us
              </Link>
            </li>

            {/* ===== Services Dropdown ===== */}
            <li
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button type="button" className="hover:text-gray-200 flex items-center gap-1">
                Services ▾
              </button>

              {servicesOpen && (
                <ul className="absolute left-0 top-full w-56 bg-blue-800 shadow-lg text-sm text-white z-50">
                  <li>
                    <Link to="/services/ACP" className="block px-4 py-2 hover:text-gray-200">
                      ACP
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/Aluminum_Windows" className="block px-4 py-2 hover:text-gray-200">
                      Aluminum Windows
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/MS_Structure" className="block px-4 py-2 hover:text-gray-200">
                      MS Structure
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/Railings" className="block px-4 py-2 hover:text-gray-200">
                      Railings
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/Skylight" className="block px-4 py-2 hover:text-gray-200">
                      Skylight
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/Stone_Cladding" className="block px-4 py-2 hover:text-gray-200">
                      Stone Cladding
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/Structural_Glazing" className="block px-4 py-2 hover:text-gray-200">
                      Structural Glazing
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/Tensile_Fabrics" className="block px-4 py-2 hover:text-gray-200">
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
              <button type="button" className="hover:text-gray-200 flex items-center gap-1">
                Projects ▾
              </button>

              {projectOpen && ( // ✅ fixed condition
                <ul className="absolute left-0 top-full w-56 bg-blue-800 shadow-lg text-sm text-white z-50">
                  <li>
                    <Link to="/projects/Detail_project" className="block px-4 py-2 hover:text-gray-200">
                      Project Detail
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects/Project_list" className="block px-4 py-2 hover:text-gray-200">
                      Project List
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/Contact" className="hover:text-gray-200">
                Contacts
              </Link>
            </li>
          </ul>

          {/* ===== Mobile Toggle ===== */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl ml-4 text-white"
          >
            ☰
          </button>
        </div>
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
              <li><Link to="/services/ACP">ACP</Link></li>
              <li><Link to="/services/Aluminum_Windows">Aluminum Windows</Link></li>
              <li><Link to="/services/MS_Structure">MS Structure</Link></li>
              <li><Link to="/services/Railings">Railings</Link></li>
              <li><Link to="/services/Skylight">Skylight</Link></li>
              <li><Link to="/services/Stone_Cladding">Stone Cladding</Link></li>
              <li><Link to="/services/Structural_Glazing">Structural Glazing</Link></li>
              <li><Link to="/services/Tensile_Fabrics">Tensile Fabric</Link></li>
            </ul>
          </details>

          <details>
            <summary className="cursor-pointer">Projects</summary>
            <ul className="ml-4 space-y-2 text-sm">
              <li><Link to="/projects/Detail_project">Project Detail</Link></li>
              <li><Link to="/projects/Project_list">Project List</Link></li>
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
