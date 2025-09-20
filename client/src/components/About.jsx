import React from "react";
import { CheckCircle2 } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="w-full bg-white">
      {/* 🔹 About Company Section */}
<<<<<<< Updated upstream
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        
        {/* Left Side - Images */}
        <div className="relative w-full flex justify-center md:justify-start">
=======
      <div className="max-w-7xl min-h-[600px] md:h-[800px] mx-auto px-4 sm:px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-60 items-center">
        {/* Left Side - Images */}
        <div className="relative order-2 md:order-1">
>>>>>>> Stashed changes
          <img
            src="./Structural-Glazing-Works.webp"
            alt="Roof House"
            className="shadow-lg h-[300px] sm:h-[350px] md:h-[450px] w-full max-w-[600px] object-cover transition-all duration-300 hover:scale-105"
          />
          <img
            src="./pixlr.png"
            alt="Roof Worker"
<<<<<<< Updated upstream
            className="absolute bottom-[-40px] right-[-20px] sm:bottom-[-50px] sm:right-[-30px] md:bottom-[-60px] md:right-[-40px] h-[150px] sm:h-[200px] md:h-[300px] w-[150px] sm:w-[250px] md:w-[320px] shadow-lg transition-all duration-500 hover:scale-105"
=======
            className="absolute -bottom-8 -right-8 sm:-bottom-16 sm:-right-16 md:-bottom-35 md:-right-40 h-[200px] sm:h-[250px] md:h-[300px] w-[200px] sm:w-[250px] md:w-[320px] shadow-lg transition-all duration-600 hover:scale-105"
>>>>>>> Stashed changes
          />
        </div>

        {/* Right - Text */}
<<<<<<< Updated upstream
        <div className="text-center md:text-left mt-10 md:mt-0">
          <p className="text-sm font-semibold text-gray-500 tracking-wider mb-3">
            ABOUT US
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted Local <br /> Construction Partner in{" "}
            <span className="text-orange-500">India.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            THE GOODWILL FACADE is a specialist Facade Design & Engineering
            group providing extensive services to developers, architects, facade
            contractors, and main contractors in the field of architectural
            facades & building maintenance solutions.
          </p>

          {/* Bullet Points */}
          {/* <ul className="space-y-4 text-base sm:text-lg text-gray-700">
            <li className="flex items-center justify-center md:justify-start gap-3">
              <CheckCircle2 className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
              150+ Projects
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <CheckCircle2 className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
              Licensed & ISO Certified
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <CheckCircle2 className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
=======
        <div className="order-1 md:order-2 px-4 sm:px-0">
          <p className="text-xs sm:text-sm font-semibold text-gray-500 tracking-wider mb-3">
            ABOUT US
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Trusted Local <br className="hidden sm:block" /> Construction Partner in{" "}
            <span className="text-orange-500">India.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
            THE GOODWILL FACADE is A Specialist Facade Design & Engineering
            Group Providing Extensive Services To Developers, Architects, Facade
            Contactors And Main Contactor In The Field Of Architectural Facades
            & Building Maintenance Solutions.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 md:space-y-4 text-base sm:text-lg text-gray-700">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-green-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              150+ Projects
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-green-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              Licensed & ISO Certified
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-green-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
>>>>>>> Stashed changes
              Experienced Team
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
