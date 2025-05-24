import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 px-[12vw] md:px-[7vw] lg:px-[20vw] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-transparent"></div>
      
      {/* Floating circles */}
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-900 opacity-20 blur-xl"></div>
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-pink-900 opacity-20 blur-xl"></div>
      
      <div className="container mx-auto text-center relative z-10">
        {/* Name / Logo with animation */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2"
        >
          Rana Sheikh
        </motion.h2>
        
        <p className="text-gray-400 text-sm mb-6">Full Stack Developer & Problem Solver</p>

        {/* Navigation Links - Responsive with hover effects */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 mb-8">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleScroll(item.id)}
              whileHover={{ scale: 1.1, color: "#a855f7" }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-purple-400 text-sm sm:text-base transition-colors font-medium"
            >
              {item.name}
            </motion.button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive with animations */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6 mt-6 mb-8">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/md.rana.sheikh.598370" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/md-rofikul-islam-82460432b/" },
            { icon: <FaYoutube />, link: "https://www.youtube.com/@codewithrana6424" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.2,
                color: "#a855f7",
                y: -5 
              }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl text-gray-400 hover:text-purple-400 transition-all"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Back to top button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, backgroundColor: "#6b21a8" }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 bg-purple-700 text-white p-3 rounded-full shadow-lg z-50"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </motion.button>

        {/* Copyright Text with subtle animation */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-gray-500 mt-8 border-t border-gray-800 pt-6"
        >
          © {new Date().getFullYear()} Rana Sheikh. All rights reserved.<br />
          Crafted with ❤️ and React
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;