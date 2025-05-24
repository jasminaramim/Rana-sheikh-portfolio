import React from "react";
import { education } from "../../constants";

const Education = () => (
  <section
    id="education"
    className="py-20 sm:py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/30 to-black"
  >
    {/* Background overlay with subtle gradient circles */}
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-purple-600/20 blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-indigo-600/20 blur-2xl"></div>
    </div>

    {/* Section Title */}
    <div className="text-center mb-12 sm:mb-16 relative z-10">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          EDUCATION
        </span>
      </h2>
      <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 rounded-full shadow-md"></div>
      <p className="text-gray-200 mt-4 text-lg sm:text-xl lg:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
        A journey of learning and growth through my academic achievements.
      </p>
    </div>

    {/* Education Timeline */}
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1  h-full sm:block hidden"></div>

      {/* Education Entries */}
      {education.map((edu, index) => (
        <div
          key={edu.id}
          className={`flex flex-col sm:flex-row items-center mb-12 sm:mb-16 ${
            index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
          } relative z-10`}
        >
          {/* Timeline Circle */}
          <div className="absolute left-1/2 transform -translate-x-1/2 sm:-translate-x-0  border-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center shadow-lg">
         
          </div>

          {/* Content Section */}
          <div
            className={`w-full sm:max-w-md p-4 sm:p-6 rounded-xl shadow-lg border border-white/20  backdrop-blur-sm hover:border-purple-500 transition-all duration-300 ${
              index % 2 === 0 ? "sm:ml-20" : "sm:mr-20"
            } ${index % 2 === 0 ? "sm:order-1" : "sm:order-2"}`}
          >
            <div className="flex items-center space-x-4 sm:space-x-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-lg overflow-hidden">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <h4 className="text-sm sm:text-base text-gray-400">
                  {edu.school}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {edu.date}
                </p>
              </div>
            </div>
            <p className="mt-4 text-gray-300 font-medium">Grade: {edu.grade}</p>
            <p className="mt-2 text-gray-400 text-sm sm:text-base">{edu.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Education;