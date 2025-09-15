// // import React from "react";
// // import { Award } from "lucide-react"; // for certified icon (optional)

// // const About = () => {
// //   return (
//     <section className="w-full bg-white">
//       {/* 🔹 Quick Service Request */}

//       {/* 🔹 About Company Section */}
//       <div className="max-w-8xl h-[800px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-60 items-center">
//         {/* Left Side - Images */}
//         <div className="relative ">
//           <img
//             src="./Structural-Glazing-Works.webp"
//             alt="Roof House"
//             className="shadow-lg h-[450px] w-[600px] transition-all duration-300 hover:scale-105"
//           />
//           <img
//             src="./pixlr.png"
//             alt="Roof Worker"
//             className="absolute -bottom-35 -right-40  h-[300px] w-[320px]  shadow-lg transition-all duration-600 hover:scale-105"
//           />
//         </div>

// //         {/* Right Side - Text */}
// //         <div>
// //           <p className="gradient-text text-5xl font-semibold">About Company</p>
// //           <h2 className="text-1xl font-bold text-gray-900 mb-4">
// //             Professional FACADE Contractors
// //           </h2>
// //           <p className="text-gray-600 mb-4">
// //             THE GOODWILL FACADE is a specialist facade design and engineering
// //             group dedicated to delivering innovative, sustainable, and reliable
// //             solutions in architectural facades and building maintenance. With a
// //             skilled team of designers and engineers, we provide comprehensive
// //             services to developers, architects, and contractors, creating modern
// //             and aesthetically appealing systems that combine design excellence
// //             with engineering precision.
// //           </p>
// //           <p className="text-gray-600 mb-6">
// //             We ensure quality at every stage, from concept to execution, and
// //             have a proven track record across residential, commercial, and
// //             industrial projects. Along with design and installation, we offer
// //             long-term maintenance strategies to ensure durability and
// //             performance.
// //           </p>

// //           <button className="gradient-bg text-white px-6 py-2 rounded-md font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:gradient-bg cursor-pointer">
// //             READ MORE
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default About;

import React from "react";
import { CheckCircle2 } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="w-full bg-white">
      {/* 🔹 Quick Service Request */}

      {/* 🔹 About Company Section */}
      <div className="max-w-7xl h-[800px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-60 items-center">
        {/* Left Side - Images */}
        <div className="relative ">
          <img
            src="./Structural-Glazing-Works.webp"
            alt="Roof House"
            className="shadow-lg h-[450px] w-[600px] transition-all duration-300 hover:scale-105"
          />
          <img
            src="./pixlr.png"
            alt="Roof Worker"
            className="absolute -bottom-35 -right-40  h-[300px] w-[320px]  shadow-lg transition-all duration-600 hover:scale-105"
          />
        </div>

        {/* Right - Text */}
        <div>
          <p className="text-sm font-semibold text-gray-500 tracking-wider mb-3">
            ABOUT US
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted Local <br /> Construction Partner in{" "}
            <span className="text-orange-500">India.</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            THE GOODWILL FACADE is A Specialist Facade Design & Engineering
            Group Providing Extensive Services To Developers, Architects, Facade
            Contactors And Main Contactor In The Field Of Architectural Facades
            & Building Maintenance Solutions.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-green-600 w-6 h-6" />
              150+ Projects
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-green-600 w-6 h-6" />
              Licensed & ISO Certified
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-green-600 w-6 h-6" />
              Experienced Team
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
