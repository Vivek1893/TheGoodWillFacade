import React from "react";
import { Award } from "lucide-react"; // for certified icon (optional)

const About = () => {
  return (
    <section className="w-full bg-white">
      {/* 🔹 Quick Service Request */}
      <div className="max-w-6xl mx-auto -mt-16 px-6 relative z-20">
        <div className="bg-white shadow-lg rounded-lg p-7 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 min-h-[160px]">
          <div>
            <p className="text-red-600 font-semibold text-sm">
              Quick Service Request
            </p>
            <h2 className="text-2xl font-bold text-gray-800">
              Send Inspection Request
            </h2>
          </div>
          <form className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
            <input
              type="text"
              placeholder="Enter your full name"
              className="border rounded-md px-4 py-2 w-full md:w-64"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="border rounded-md px-4 py-2 w-full md:w-64"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md"
            >
              SEND
            </button>
          </form>
        </div>
      </div>

      {/* 🔹 About Company Section */}
      <div className="max-w-6xl h-[800px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-50 items-center">
        {/* Left Side - Images */}
        <div className="relative ">
          <img
            src="./images/ser1.png"
            alt="Roof House"
            className="shadow-lg h-[450px] w-[600px] transition-all duration-300 hover:scale-105"
          />
          <img
            src="./images/ser2.png"
            alt="Roof Worker"
            className="absolute -bottom-35 -right-40  h-[300px] w-[320px]  shadow-lg transition-all duration-600 hover:scale-105"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <p className="gradient-text text-5xl font-semibold">About Company</p>
          <h2 className="text-1xl font-bold text-gray-900 mb-4">
            Professional FACADE Contractors
          </h2>
          <p className="text-gray-600 mb-4">
            THE GOODWILL FACADE is a specialist facade design and engineering
            group dedicated to delivering innovative, sustainable, and reliable
            solutions in architectural facades and building maintenance. With a
            skilled team of designers and engineers, we provide comprehensive
            services to developers, architects, and contractors, creating modern
            and aesthetically appealing systems that combine design excellence
            with engineering precision.
          </p>
          <p className="text-gray-600 mb-6">
            We ensure quality at every stage, from concept to execution, and
            have a proven track record across residential, commercial, and
            industrial projects. Along with design and installation, we offer
            long-term maintenance strategies to ensure durability and
            performance.
          </p>

          {/* Certified Badge */}
          <div className="flex items-center gap-8 mb-6">
            <Award className="text-red-600" size={20} />
            <span className="text-gray-800 font-medium">Certified Company</span>
          </div>

          <button className="gradient-bg text-white px-6 py-2 rounded-md font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:gradient-bg cursor-pointer">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
