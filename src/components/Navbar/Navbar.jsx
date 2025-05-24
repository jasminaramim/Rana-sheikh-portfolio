import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiContactsBookLine } from "react-icons/ri";
import logo from "../../assets/rana.jpg"; // Import your logo image
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - 300 &&
          window.scrollY < sectionTop + sectionHeight - 300
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section with ID "${sectionId}" not found.`);
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }, // Capitalized for consistency
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 sm:px-6 lg:px-8 xl:px-12 ${
        isScrolled
          ? "bg-[#050414]/90 backdrop-blur-md shadow-lg border-b border-purple-900/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3">
        {/* Logo with Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => handleMenuItemClick("home")}
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500/50 group-hover:border-purple-400 transition-all">
            <img src={logo} alt="Rana Sheikh" className="w-full h-full object-cover" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-lg font-bold text-white">Rana Sheikh</span>
            <span className="text-xs text-purple-400">Flutter Developer</span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`relative px-2 py-1 text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 ml-6">
            <a
              href="https://github.com/ranasheikh6424"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-rofikul-islam-82460432b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="#contact"
              className="flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              onClick={() => handleMenuItemClick("contact")}
            >
              <RiContactsBookLine className="mr-1" size={14} />
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FiX className="text-2xl text-purple-400" />
          ) : (
            <FiMenu className="text-2xl text-purple-400" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#050414] border-t border-purple-900/30 shadow-xl"
        >
          <ul className="py-4 px-6 space-y-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? "bg-purple-900/30 text-purple-400"
                      : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-center space-x-6 py-4 border-t border-purple-900/30">
            <a
              href="https://github.com/ranasheikh6424"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-purple-400 rounded-full hover:bg-gray-800/50 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-rofikul-islam-82460432b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-purple-400 rounded-full hover:bg-gray-800/50 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#contact"
              className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium"
              onClick={() => handleMenuItemClick("contact")}
            >
              <RiContactsBookLine className="mr-1" size={16} />
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;