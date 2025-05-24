import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";
import { FaComment, FaWhatsapp, FaLinkedin, FaFacebookMessenger } from "react-icons/fa";
import { motion } from "framer-motion";

const App = () => {
  // State for chatbot social icons visibility
  const [isSocialIconsVisible, setSocialIconsVisible] = useState(false);
  // Ref to detect clicks outside the chatbot button
  const buttonRef = useRef(null);

  // Social links for chatbot button
  const socialLinks = [
    {
      icon: <FaFacebookMessenger className="text-xl sm:text-2xl" />,
      url: "https://www.facebook.com/md.rana.sheikh.598370",
      label: "Chat on Messenger",
      color: "#00B2FF",
    },
    {
      icon: <FaWhatsapp className="text-xl sm:text-2xl" />,
      url: "https://wa.me/8801613475871",
      label: "Chat on WhatsApp",
      color: "#25D366",
    },
    {
      icon: <FaLinkedin className="text-xl sm:text-2xl" />,
      url: "https://www.linkedin.com/in/md-rofikul-islam-82460432b/",
      label: "Connect on LinkedIn",
      color: "#0A66C2",
    },
  ];

  // Handle clicks outside the chatbot button to close social icons
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setSocialIconsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#050414] relative">
      {/* BlurBlob component */}
      <BlurBlob position={{ top: "35%", left: "20%" }} size={{ width: "30%", height: "40%" }} />

      {/* Existing grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-1"></div>

      {/* Content */}
      <div className="relative z-10 pt-20">
        <Navbar />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>

      {/* Floating Chatbot Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-[1000]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        ref={buttonRef}
      >
        {/* Main Message Icon */}
        <motion.div
          className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-[0_0_15px_rgba(128,69,236,0.7)] transition-all duration-300 relative cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            scale: [1, 1.05, 1], // Pulsing animation
            transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          }}
          onClick={() => setSocialIconsVisible(!isSocialIconsVisible)}
        >
          <FaComment className="text-xl sm:text-2xl" />
        </motion.div>

        {/* Social Icons (visible on click) */}
        {isSocialIconsVisible && (
          <motion.div
            className="absolute bottom-16 sm:bottom-20 right-0 flex flex-col items-center space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, staggerChildren: 0.1 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-md hover:shadow-[0_0_10px] transition-all duration-300"
                style={{ backgroundColor: social.color }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default App;