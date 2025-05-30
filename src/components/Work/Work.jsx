import React, { useState, useEffect } from "react";
import { projects } from "../../constants";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="projects"
      className="relative py-28 px-4 sm:px-6 lg:px-8 xl:px-10 bg-gradient-to-b from-gray-900 via-gray-950 to-black overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://i.ibb.co/Ld5cCc0L/3d-render-modern-background-with-flowing-cyber-particles.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: 0.2,
        }}
      ></div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 z-1">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-purple-900 blur-[100px] animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-900 blur-[120px] animate-float-delay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              My Projects
            </span>
          </h2>
          <div className="w-40 h-1.5 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl font-medium max-w-4xl mx-auto leading-relaxed">
            Explore my portfolio of innovative projects, each demonstrating my expertise across diverse technologies and creative solutions.
          </p>
        </motion.div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              onClick={() => handleOpenModal(project)}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative border border-gray-800 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:bg-purple-900/10 transition-all duration-500 h-full flex flex-col"
            >
              <div className="relative overflow-hidden flex-grow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-white shadow-lg hover:shadow-purple-500/30 transition-all"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-5 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="inline-block bg-gray-700/60 text-xs font-semibold text-purple-300 rounded-full px-3 py-1.5 group-hover:bg-purple-900/30 transition-colors"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {hoveredProject === project.id && (
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl"></div>
                  <div className="absolute -inset-1 rounded-2xl bg-purple-500/20 blur-md"></div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-sm"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-thin z-10 bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <FiX />
              </button>

              <div className="flex flex-col lg:flex-row">
                {/* Slider on the left */}
                <div className="lg:w-1/2 w-full bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 flex flex-col items-center justify-center relative">
                  {/* Logo above the slider */}
                  <motion.img
                    // src={selectedProject.logo}
                    // alt={`${selectedProject.title} Logo`}
                    // className="w-20 h-20 object-contain rounded-full mb-4 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  />
                  <motion.button
                    onClick={handlePrevImage}
                    className="absolute left-4 text-white text-2xl bg-black/50 rounded-full p-2 hover:bg-purple/50 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <BsChevronLeft />
                  </motion.button>
                  <motion.img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} Slide ${currentImageIndex + 1}`}
                    className="w-full h-auto max-h-[350px] object-contain rounded-lg shadow-xl"
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.button
                    onClick={handleNextImage}
                    className="absolute right-4 text-white text-2xl bg-black/50 rounded-full p-2 hover:bg-purple/50 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <BsChevronRight />
                  </motion.button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {selectedProject.images.map((_, index) => (
                      <motion.div
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentImageIndex === index ? "bg-purple" : "bg-gray-500"}`}
                        onClick={() => setCurrentImageIndex(index)}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>
                </div>

                {/* Project details */}
                <div className="lg:w-1/2 w-full p-6 sm:p-8">
                  <motion.h3
                    className="text-2xl sm:text-3xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {selectedProject.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-300 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    {selectedProject.description}
                  </motion.p>

                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.25 + index * 0.05 }}
                          className="bg-gray-800 text-sm font-medium text-purple-300 rounded-full px-3 py-1.5 border border-gray-700"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 mt-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 px-6 py-3 rounded-lg font-semibold transition-colors border border-gray-700"
                    >
                      <FiGithub className="text-lg" />
                      View Code
                    </motion.a>
                    {selectedProject.webapp && (
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={selectedProject.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/30"
                      >
                        <FaDownload className="text-lg" />
                        Install Now !
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 10s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
};

export default Work;