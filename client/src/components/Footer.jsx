import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-gray-300">
      {/* Subscribe Section */}
      {/* <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-[#1e1e1e] rounded-md p-10 flex flex-col md:flex-row items-center justify-between shadow-lg">
          <div>
            <p className="text-yellow-500 font-semibold">Subscribe & Follow us</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Subscribe & Get More Information
            </h3>
          </div>
          <div className="flex mt-6 md:mt-0">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-l-md w-64 focus:outline-none text-black"
            />
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-r-md font-semibold hover:bg-yellow-600">
              Subscribe
            </button>
          </div>
        </div>
      </div> */}

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-500">Home</a></li>
            <li><a href="#" className="hover:text-yellow-500">About</a></li>
            <li><a href="#" className="hover:text-yellow-500">Services</a></li>
            <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
          </ul>
        </div>

        {/* Other Pages */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Other Pages</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-500">FAQ</a></li>
            <li><a href="#" className="hover:text-yellow-500">Blog</a></li>
            <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-500">Terms & Condition</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-500" /> 
              Borivali West, Mumbai, Maharashtra 400092
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-500" /> 
              (+62) 81 487 1843
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-500" /> 
              goodwill@domain.com
            </li>
            <li>Mon - Fri : 9:00 am - 5:00 pm</li>
          </ul>
        </div>

        {/* Appointment */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Make an Appointment</h4>
          <p className="text-sm mb-4">
            Getting an accurate diagnosis can be one of the most impactful experiences that you can have.
          </p>
          <div className="flex items-center bg-yellow-500 text-black p-3 rounded-md gap-3 font-semibold">
            <FaPhoneAlt /> Call Us Today <br /> (+62) 81 487 1843
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6 px-6 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10"
          />
          {/* <h2 className="text-xl font-bold text-white">GoodWill</h2> */}
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="p-2 bg-[#1e1e1e] rounded-md hover:bg-yellow-500"><FaFacebookF /></a>
          <a href="#" className="p-2 bg-[#1e1e1e] rounded-md hover:bg-yellow-500"><FaTwitter /></a>
          <a href="#" className="p-2 bg-[#1e1e1e] rounded-md hover:bg-yellow-500"><FaInstagram /></a>
          <a href="#" className="p-2 bg-[#1e1e1e] rounded-md hover:bg-yellow-500"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 text-sm border-t border-gray-700">
        © 2025 GoodWill By Skillbridge Developer.
      </div>
    </footer>
  );
}
