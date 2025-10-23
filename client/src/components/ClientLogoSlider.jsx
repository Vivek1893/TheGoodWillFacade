// import React from "react";

// const ClientsSection = () => {
//   const clients = [
//     { name: "abof", logo: "/clientlogo/logo1.jpg" },
//     { name: "abof", logo: "/clientlogo/logo2.jpg" },
//     { name: "abof", logo: "/clientlogo/logo3.jpg" },
//     { name: "abof", logo: "/clientlogo/logo4.jpg" },
//     { name: "abof", logo: "/clientlogo/logo5.jpg" },
//     { name: "abof", logo: "/clientlogo/logo6.jpg" },
//     { name: "abof", logo: "/clientlogo/logo7.jpg" },
//     { name: "abof", logo: "/clientlogo/logo8.jpg" },
//     { name: "abof", logo: "/clientlogo/logo9.jpg" },
//     { name: "abof", logo: "/clientlogo/logo10.jpg" },
//     { name: "abof", logo: "/clientlogo/logo11.jpg" },

//     { name: "abof", logo: "/clientlogo/logo12.jpg" },
//     { name: "abof", logo: "/clientlogo/logo13.jpg" },
//     { name: "abof", logo: "/clientlogo/logo14.jpg" },
//     { name: "abof", logo: "/clientlogo/logo15.jpg" },
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 text-center">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">Our Clients</h2>
//         <p className="text-gray-500 text-lg mb-12">Meet our happy clients</p>

//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
//           {clients.map((client, index) => (
//             <div key={index} className="flex items-center justify-center p-4">
//               <img
//                 src={client.logo}
//                 alt={client.name}
//                 className="max-h-30 object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientsSection;




import React from "react";
import { motion } from "framer-motion";

const ClientLogoGrid = () => {
  const clientLogos = [
    { id: 1, src: "/clientlogo/logo1.jpg", alt: "abof" },
    { id: 2, src: "/clientlogo/logo2.jpg", alt: "Lucubrate" },
    { id: 3, src: "/clientlogo/logo3.jpg", alt: "Restaurant" },
    { id: 4, src: "/clientlogo/logo4.jpg", alt: "Airplane Desert" },
    { id: 5, src: "/clientlogo/logo5.jpg", alt: "cityus" },
    { id: 6, src:"/clientlogo/logo6.jpg", alt: "Trustly" },
    { id: 7, src: "/clientlogo/logo7.jpg", alt: "oldendoff" },
    { id: 8, src:"/clientlogo/logo8.jpg",alt: "grabyo" },
    { id: 9, src:"/clientlogo/logo9.jpg",alt: "grabyo" },
    { id: 10, src:"/clientlogo/logo10.jpg",alt: "grabyo" },
    { id: 11, src:"/clientlogo/logo11.jpg",alt: "grabyo" },
    { id: 12, src:"/clientlogo/logo12.jpg",alt: "grabyo" },
    { id: 13, src:"/clientlogo/logo13.jpg",alt: "grabyo" },
    { id: 14, src:"/clientlogo/logo14.jpg",alt: "grabyo" },
    { id: 15, src:"/clientlogo/logo15.jpg",alt: "grabyo" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Our Clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl text-gray-600 max-w-2xl mx-auto"
          >
            Most our happy clients
          </motion.p>
        </div>

        {/* Logo Grid with Extra Large Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.08 }}
              className="bg-white rounded-xl p-8 flex items-center justify-center h-40 md:h-48 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-28 md:max-h-32 w-auto object-contain filter  transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
         
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogoGrid;