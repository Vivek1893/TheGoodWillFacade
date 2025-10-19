// // src/components/ContactSection.jsx
// import React from "react";
// import { Phone, Mail, MapPin } from "lucide-react";
// import { motion } from "framer-motion";

// const ContactSection = () => {
//   return (
//     <section id="contact" className="bg-gray-50">
//       {/* Hero Banner */}
//       <div className="relative w-full h-[75vh]">
//         <img
//           src="/contact us.jpg"
//           alt="Glass Railing System"
//           className="w-full h-full object-cover"
//         />

//         {/* Centered Heading */}
//         <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-3xl md:text-3xl font-bold text-white mb-4 tracking-wide"
//           >
//             <span className="text-white"> Contact </span>{" "}
//             <span className="text-orange-400">Us</span>
//           </motion.h1>

//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
//           ></motion.div>
//         </div>
//       </div>

//       {/*     
//       <div className="container mx-auto px-6 py-20">
        
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
//             Get In Touch
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Ready to transform your architectural vision? Contact us today for a
//             consultation.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
       
//           <div className="p-8 bg-white border border-yellow-600/20 shadow-lg rounded-xl">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-6">
//               Send us a Message
//             </h3>
//             <form className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   placeholder="Your Name"
//                   className="w-full border border-gray-300 focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 p-3 rounded outline-none transition"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="w-full border border-gray-300 focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 p-3 rounded outline-none transition"
//                 />
//               </div>
//               <input
//                 placeholder="Subject"
//                 className="w-full border border-gray-300 focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 p-3 rounded outline-none transition"
//               />
//               <textarea
//                 placeholder="Your Message"
//                 rows={6}
//                 className="w-full border border-gray-300 focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 p-3 rounded resize-none outline-none transition"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-lg transition shadow-md"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

        
//           <div className="space-y-10">
            
//             <div>
//               <h3 className="text-2xl font-semibold text-gray-800 mb-6">
//                 Contact Information
//               </h3>
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <Phone className="h-6 w-6 text-yellow-600 mt-1" />
//                   <div>
//                     <h4 className="font-semibold text-gray-800">Phone</h4>
//                     <p className="text-gray-600">+91 9892118052</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <Mail className="h-6 w-6 text-yellow-600 mt-1" />
//                   <div>
//                     <h4 className="font-semibold text-gray-800">Email</h4>
//                     <p className="text-gray-600">Thegoodwill@gmail.com</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

           
//             <div className="space-y-6">
//               <h4 className="text-xl font-semibold text-gray-800">
//                 Our Offices
//               </h4>

//               <div className="p-6 bg-yellow-50 border border-yellow-600/20 rounded-xl shadow-sm hover:shadow-md transition">
//                 <div className="flex items-start space-x-4">
//                   <MapPin className="h-6 w-6 text-yellow-600 mt-1" />
//                   <div>
//                     <h5 className="font-semibold text-gray-800 mb-2">
//                       Mumbai Office
//                     </h5>
//                     <p className="text-gray-600 leading-relaxed">
//                       Disha C.H.S., Opp. Joggers Park, Chikoowadi, Borivali
//                       West, Mumbai - 400 092.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-6 bg-yellow-50 border border-yellow-600/20 rounded-xl shadow-sm hover:shadow-md transition">
//                 <div className="flex items-start space-x-4">
//                   <MapPin className="h-6 w-6 text-yellow-600 mt-1" />
//                   <div>
//                     <h5 className="font-semibold text-gray-800 mb-2">
//                       Surat Office
//                     </h5>
//                     <p className="text-gray-600 leading-relaxed">
//                       55, The Galleria Shopping Hub, Near Sanjivkumar
//                       Auditorium, Opp. kitchen 37, Rto, Pal, Surat - 395009
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}

//       {/* Contact Info Section */}
//       <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Call */}
//         <a
//           href="tel:+918097998000"
//           className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center block "
//         >
//           <div className="flex justify-center mb-4">
//             <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center">
//               <Phone className="text-pink-600 w-7 h-7" />
//             </div>
//           </div>
//           <h3 className="text-xl font-semibold mb-2">Call us directly</h3>
//           <p className="text-gray-700 text-lg">+91 8097998000</p>
//         </a>

//         {/* Mail */}
//         <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center block ">
//           <div className="flex justify-center mb-4">
//             <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center">
//               <Mail className="text-pink-600 w-7 h-7" />
//             </div>
//           </div>
//           <h3 className="text-xl font-semibold mb-4">Mail us</h3>
//           <div className="flex flex-col gap-2 text-lg">
//             <a
//               href="mailto:mnacapital@example.com"
//               className="text-gray-700 hover:text-[#EC7310] transition-colors"
//             >
//               <span className="font-semibold text-black">For Enquiry:</span>{" "}
//               accounts@mnacaps.com
//             </a>
//             <a
//               href="mailto:hr@mnacaps.com"
//               className="text-gray-700 hover:text-[#EC7310] transition-colors"
//             >
//               <span className="font-semibold text-black">For Careers:</span>{" "}
//               hr@mnacaps.com
//             </a>
//           </div>
//         </div>

//         {/* Address */}
//         <a
//           href="https://www.google.com/maps/place/MNA+Capital+Advisors+LLP/@19.2186832,72.855759,15z"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center block "
//         >
//           <div className="flex justify-center mb-4">
//             <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center">
//               <MapPin className="text-pink-600 w-7 h-7" />
//             </div>
//           </div>
//           <h3 className="text-xl font-semibold mb-2">Visit our office</h3>
//           <p className="text-gray-700 text-justify">
//             506, A Wing, Western Edge II (Behind Metro Cash & Carry - Metro
//             Mall), Western Express Highway, Borivali (East), Mumbai 400 066
//           </p>
//         </a>
        
//       </div>
//       <div className="space-y-6">
//   <h4 className="text-xl font-semibold text-gray-800">Our Offices</h4>

//   {/* 2 Column Responsive Layout */}
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     {/* Mumbai Office */}
//     <div className="p-6 bg-yellow-50 border border-yellow-600/20 rounded-xl shadow-sm hover:shadow-md transition">
//       <div className="flex items-start space-x-4">
//         <MapPin className="h-6 w-6 text-yellow-600 mt-1" />
//         <div>
//           <h5 className="font-semibold text-gray-800 mb-2">Mumbai Office</h5>
//           <p className="text-gray-600 leading-relaxed">
//             Disha C.H.S., Opp. Joggers Park, Chikoowadi, Borivali West,
//             Mumbai - 400 092.
//           </p>
//         </div>
//       </div>
//     </div>

//     {/* Surat Office */}
//     <div className="p-6 bg-yellow-50 border border-yellow-600/20 rounded-xl shadow-sm hover:shadow-md transition">
//       <div className="flex items-start space-x-4">
//         <MapPin className="h-6 w-6 text-yellow-600 mt-1" />
//         <div>
//           <h5 className="font-semibold text-gray-800 mb-2">Surat Office</h5>
//           <p className="text-gray-600 leading-relaxed">
//             55, The Galleria Shopping Hub, Near Sanjivkumar Auditorium,
//             Opp. kitchen 37, Rto, Pal, Surat - 395009
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>


//       {/* Map Section */}
//       <div className="w-full h-[400px]">
//         <iframe
//           title="Google Map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3942498238756!2d72.94929187519115!3d19.13437948208821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b902f1adfd45%3A0xfbe26d1c6750c5a!2sMulund%20West%2C%20Mumbai%2C%20Maharashtra%20400080!5e0!3m2!1sen!2sin!4v1695200000000!5m2!1sen!2sin"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

















// src/components/ContactSection.jsx
import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call us directly",
      description: "+91 91 9892118052",
      action: "tel:+91 9892118052",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      hoverColor: "hover:bg-blue-50"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp us",
      description: "Start a conversation",
      action: "https://wa.me/+91 9892118052",
      color: "bg-green-100",
      iconColor: "text-green-600",
      hoverColor: "hover:bg-green-50"
    },
    {
      icon: Mail,
      title: "Email us",
      description: "thegoodwill@gmail.com",
      action: "mailto:thegoodwill@gmail.com",
      color: "bg-pink-100",
      iconColor: "text-pink-600",
      hoverColor: "hover:bg-pink-50"
    }
  ];

  const offices = [
    {
      city: "Mumbai Office",
      address: "Society No -374 , Gala no - D45, AKASH CHSL , SECTOR 3 , PUNJAB NATIONAL BANK LANE , CHARKOP, KANDIVALI WEST , MUMBAI - 400 067",
      mapUrl: "https://maps.google.com/maps?q=Society+No+-374+,+Gala+no+-+D45,+AKASH+CHSL+,+SECTOR+3+,+PUNJAB+NATIONAL+BANK+LANE+,+CHARKOP,+KANDIVALI+WEST+,+MUMBAI+-+400+067"
    },
    {
      city: "Surat Office", 
      address: "55, The Galleria Shopping Hub, Near Sanjivkumar Auditorium, Opp. kitchen 37, Rto, Pal, Surat - 395009",
      mapUrl: "https://maps.google.com/maps?q=55,+The+Galleria+Shopping+Hub,+Near+Sanjivkumar+Auditorium,+Opp.+kitchen+37,+Rto,+Pal,+Surat+-+395009"
    }
  ];

  // Updated Google Maps embed URL with the specific address
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.123456789012!2d72.844321!3d19.205456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzE5LjYiTiA3MsKwNTAnNDMuNiJF!5e0!3m2!1sen!2sin!4v1234567890";

  return (
    <section id="contact" className="bg-gray-50">
      {/* Hero Banner */}
      <div className="relative w-full h-[75vh]">
        <img
          src="/contact us.jpg"
          alt="Glass Railing System"
          className="w-full h-full object-cover"
        />

        {/* Centered Heading */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-3xl font-bold text-white mb-4 tracking-wide"
          >
            <span className="text-white"> Contact </span>{" "}
            <span className="text-orange-400">Us</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
          ></motion.div>
        </div>
      </div>

      {/* Contact Methods - 3 Boxes */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.action}
              target={method.action.startsWith('http') ? "_blank" : "_self"}
              rel={method.action.startsWith('http') ? "noopener noreferrer" : ""}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center block border-2 border-transparent ${method.hoverColor} hover:border-gray-200`}
            >
              <div className="flex justify-center mb-4">
                <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center`}>
                  <method.icon className={`${method.iconColor} w-8 h-8`} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{method.title}</h3>
              <p className="text-gray-600 text-lg">{method.description}</p>
              <div className="mt-4">
                <span className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                  Click to connect →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Offices Section */}
        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Our Offices
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <motion.a
                key={index}
                href={office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-yellow-200 hover:bg-yellow-50"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">{office.city}</h4>
                    <p className="text-gray-600 leading-relaxed">{office.address}</p>
                    <div className="mt-4">
                      <span className="text-sm text-yellow-600 hover:text-yellow-700 transition-colors">
                        View on map →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

       
      </div>
       {/* Map Section - Full Screen */}
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.7 }}
  className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg"
>
  <iframe
    title="Google Map - AKASH CHSL, Kandivali West"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.123456789012!2d72.844321!3d19.205456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7a5a6a6a6a6%3A0x3be7b7a5a6a6a6a6!2sSociety%20No%20-374%20%2C%20Gala%20no%20-%20D45%2C%20AKASH%20CHSL%20%2C%20SECTOR%203%20%2C%20PUNJAB%20NATIONAL%20BANK%20LANE%20%2C%20CHARKOP%2C%20KANDIVALI%20WEST%20%2C%20MUMBAI%20-%20400%20067!5e0!3m2!1sen!2sin!4v1234567890"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</motion.div>

    </section>
  );
};

export default ContactSection;