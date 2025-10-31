


// import React from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaWhatsapp,
//   FaPhone,
//   FaEnvelope,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0E2C4C]  text-white">
//       {/* 🔹 Main Upper Section */}
//       <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
//           {/* Left Section - Brand & Social */}
//           <div>
//             <div className="flex items-center mb-6">
//               <img
//                 src="/logo.png"
//                 className="h-20 w-auto"
//                 alt="The Goodwill Logo"
//               />
//               <span className="ml-3 text-3xl font-bold bg-white bg-clip-text text-transparent">
//                 The Goodwill Facade
//               </span>
//             </div>
//             <p className="text-white mb-6 leading-relaxed max-w-md">
//               Leading providers of premium ACP cladding solutions. We transform
//               spaces with innovative designs and exceptional craftsmanship.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
//               >
//                 <FaFacebookF size={18} />
//               </a>
//               <a
//                 href="https://www.instagram.com/thegoodwillfacade?utm_source=qr&igsh=MWdvNnAwMmJwNGluNA%3D%3D"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
//               >
//                 <FaInstagram size={18} />
//               </a>
//               <a
//                 href="https://wa.me/919876543210"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
//               >
//                 <FaWhatsapp size={18} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Bottom Bar with Border & Rounded Corners */}
//       <div
//         className="w-full flex flex-col sm:flex-row items-center justify-between 
//         bg-[#0E2C4C] px-4 py-4 sm:px-8 sm:py-5 
//         space-y-3 sm:space-y-0 text-center sm:text-left
//         border-t-4 border-[#F37021] rounded-tl-[40px] rounded-tr-[40px]"
//       >
//         {/* Left - Copyright */}
//         <div className="flex items-center justify-center sm:justify-start">
//           <span className="text-white text-sm sm:text-base">
//             © 2025 The Goodwill Facade. All Rights Reserved.
//           </span>
//         </div>

//         {/* Center - Email */}
//         <div className="flex items-center justify-center space-x-2">
//           <FaEnvelope className="text-[#F37021] flex-shrink-0" size={18} />
//           <a
//             href="mailto:thegoodwillfacade@gmail.com"
//             className="text-white text-sm sm:text-base hover:underline"
//           >
//             thegoodwillfacade@gmail.com
//           </a>
//         </div>

//         {/* Right - Phone */}
//         <div className="flex items-center justify-center sm:justify-end space-x-2">
//           <FaPhone className="text-[#F37021] flex-shrink-0" size={18} />
//           <a
//             href="tel:+919892118052"
//             className="text-white text-sm sm:text-base hover:underline"
//           >
//             +91 9892118052
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full">

      {/* ✅ TOP FOOTER (Black section like screenshot) */}
      <div
        className="w-full  text-white py-8 px-6 
        border-t-4 border-[#F37021] rounded-tl-[40px] rounded-tr-[40px]"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

          {/* LOGO */}
          <div>
            <img src="/logo.png" alt="Goodwill Logo" className="w-70" />
          </div>

          {/* MENU LINKS */}
          <nav className="flex gap-8 text-lg font-medium text-black">
            Leading providers of premium ACP cladding solutions, we transform spaces with innovative designs and exceptional craftsmanship, delivering durable, weather-resistant, and aesthetically striking finishes that redefine modern architectural possibilities for both exterior facades and interior applications.
          </nav>

          {/* SOCIAL ICONS */}
          {/* <div className="flex gap-6 text-3xl">
            <a href="https://wa.me/919892118052" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-green-400 hover:scale-110 duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 hover:scale-110 duration-300" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-blue-500 hover:scale-110 duration-300" />
            </a>
          </div> */}

        </div>
      </div>

      {/* ✅ BOTTOM BLUE COPYRIGHT STRIP (exact like image) */}
      <div className="bg-[#0E2C4C] py-6 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-white text-lg gap-3">

          {/* COPYRIGHT */}
          <span>© 2025 The Goodwill Facade. All Rights Reserved.</span>

          {/* EMAIL */}
          <a
            href="mailto:thegoodwillfacade@gmail.com"
            className="flex items-center gap-2 hover:text-white duration-300"
          >
            <MdEmail className="text-lg text-[#dd671d]" />
            thegoodwillfacade@gmail.com
          </a>

          {/* PHONE */}
          <a
            href="tel:+919892118052"
            className="flex items-center gap-2 hover:text-white duration-300"
          >
            <MdCall className="text-lg text-[#dd671d]" />
            +91 9892118052
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
