import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-16 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom relative overflow-hidden"
  >
    {/* Animated background elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-purple-600 blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-indigo-600 blur-3xl animate-float-delay"></div>
    </div>

    {/* Section Title */}
    <div className="text-center mb-10 relative z-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
          SKILLS
        </span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#8245ec] to-[#c04dfd] mx-auto mt-3 rounded-full"></div>
      <p className="text-gray-300 mt-5 text-lg font-medium max-w-2xl mx-auto">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-6 lg:gap-8 py-8 justify-center relative z-10">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900/80 backdrop-blur-lg px-6 sm:px-8 py-6 w-full sm:w-[48%] lg:w-[45%] rounded-2xl border border-gray-700/50 
          hover:border-purple-500/30 transition-all duration-300 shadow-[0_0_30px_1px_rgba(130,69,236,0.2)] hover:shadow-[0_0_40px_2px_rgba(130,69,236,0.3)] 
          flex flex-col items-center transform hover:-translate-y-1"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-200">
              {category.title}
            </span>
          </h3>

          {/* Skill Items - Dynamic grid with auto height */}
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.03}
            transitionSpeed={1500}
            gyroscope={true}
            className="w-full"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 auto-rows-auto w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-gray-800/50 hover:bg-gray-700/60 border border-gray-700/50 hover:border-purple-500/40 
                  rounded-2xl py-3 px-3 text-center transition-all duration-300 group"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>

    {/* Add some global styles for animations */}
    <style jsx>{`
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0px); }
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

export default Skills;