// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-[#121212] text-gray-300">
//       {/* Subscribe Section */}
//       {/* <div className="max-w-6xl mx-auto px-6 py-10">
//         <div className="bg-[#1e1e1e] rounded-md p-10 flex flex-col md:flex-row items-center justify-between shadow-lg">
//           <div>
//             <p className="text-yellow-500 font-semibold">Subscribe & Follow us</p>
//             <h3 className="text-2xl md:text-3xl font-bold text-white">
//               Subscribe & Get More Information
//             </h3>
//           </div>
//           <div className="flex mt-6 md:mt-0">
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="px-4 py-2 rounded-l-md w-64 focus:outline-none text-black"
//             />
//             <button className="bg-yellow-500 text-black px-6 py-2 rounded-r-md font-semibold hover:bg-yellow-600">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div> */}

//       {/* Footer Content */}
//       <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
//         {/* Quick Links */}
//         <div>
//           <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
//           <ul className="space-y-2">
//             <li><a href="#" className="hover:text-yellow-500">Home</a></li>
//             <li><a href="#" className="hover:text-yellow-500">About</a></li>
//             <li><a href="#" className="hover:text-yellow-500">Services</a></li>
//             <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
//           </ul>
//         </div>

//         {/* Other Pages */}
//         <div>
//           <h4 className="text-lg font-semibold text-white mb-4">Other Pages</h4>
//           <ul className="space-y-2">
//             <li><a href="#" className="hover:text-yellow-500">FAQ</a></li>
//             <li><a href="#" className="hover:text-yellow-500">Blog</a></li>
//             <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
//             <li><a href="#" className="hover:text-yellow-500">Terms & Condition</a></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
//           <ul className="space-y-3">
//             <li className="flex items-center gap-2">
//               <FaMapMarkerAlt className="text-yellow-500" /> 
//               Disha C.H.S., Opp. Joggers Park, Chikoowadi, Borivali
//                       West, Mumbai - 400 092.
              
//             </li>
//             <li className="flex items-center gap-2">
//               <FaPhoneAlt className="text-yellow-500" /> 
//               (+91) 9892118052
//             </li>
//             <li className="flex items-center gap-2">
//               <FaEnvelope className="text-yellow-500" /> 
//               goodwill@domain.com
//             </li>
//             <li>Mon - Fri : 9:00 am - 5:00 pm</li>
//           </ul>
//         </div>

//         {/* Appointment */}
//         <div>
//           <h4 className="text-lg font-semibold text-white mb-4">Make an Appointment</h4>
//           <p className="text-sm mb-4">
//             Getting an accurate diagnosis can be one of the most impactful experiences that you can have.
//           </p>
//           <div className="flex items-center bg-yellow-500 text-black p-3 rounded-md gap-3 font-semibold">
//             <FaPhoneAlt /> Call Us Today <br /> 91 9892118052
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-700 py-6 px-6 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <img
//             src="/logo.png"
//             alt="Logo"
//             className="w-10 h-10"
//           />
//           {/* <h2 className="text-xl font-bold text-white">GoodWill</h2> */}
//         </div>

//         {/* Social Links */}
//         <div className="flex gap-4 mt-4 md:mt-0">
//           <a href="#" className="p-2 bg-[#1e1e1e] rounded-md hover:bg-yellow-500"><FaFacebookF /></a>
//           <a href="#" className="p-2 bg-[#1e1e1e] rounded-md hover:bg-yellow-500"><FaWhatsapp /></a>
//           <a href="#" className="p-2 bg-[#1e1e1e] rounded-md hover:bg-yellow-500"><FaInstagram /></a>
         
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="text-center py-4 text-sm border-t border-gray-700">
//         © 2025 GoodWill By Skillbridge Developer.
//       </div>
//     </footer>
//   );
// }



import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Left Section - Brand & Social */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/logo.png"
                className="h-20 w-auto "
                alt="The Goodwill Logo"
              />
              <span className="ml-3 text-3xl font-bold bg-white bg-clip-text text-transparent">
                The Goodwill
              </span>
            </div>
            <p className="text-white mb-6 leading-relaxed max-w-md">
              Leading providers of premium ACP cladding solutions. We transform spaces with innovative designs and exceptional craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                <span className="text-white text-sm">
                  Society No -374 , Gala no - D45, AKASH CHSL , SECTOR 3 , PUNJAB NATIONAL BANK LANE , CHARKOP, KANDIVALI WEST , MUMBAI - 400 067
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-400 flex-shrink-0" size={16} />
                <a href="tel:+919892118052" className="text-white hover:text-white transition-colors">
                  +91 9892118052
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400 flex-shrink-0" size={16} />
                <a href="mailto:info@thegoodwill.com" className="text-white hover:text-white transition-colors">
                  thegoodwillfacade@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white text-sm">
              © 2025 The Goodwill. All Rights Reserved.
            </div>
            <div className="flex space-x-6 text-sm text-white">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
     <motion.a
      href="https://wa.me/919892118052"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg z-50"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <FaWhatsapp size={24} className="text-white" />
    </motion.a>
    </footer>
  );
};

export default Footer;