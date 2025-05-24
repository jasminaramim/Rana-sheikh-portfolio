import React, { useState, useEffect } from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="skills"
      className="relative py-16 min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url('https://i.ibb.co/hFNrgzZb/6881076-3425225.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Floating gradient elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 z-0">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-purple-600 blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-indigo-600 blur-3xl animate-float-delay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              SKILLS
            </span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-gray-200 text-lg sm:text-xl lg:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical expertise, refined through diverse projects and hands-on experiences.
          </p>
        </div>

        {/* Mobile View - Static Grid */}
        {isMobile ? (
          <div className="grid grid-cols-1 gap-6">
            {SkillsInfo.map((category) => (
              <div
                key={category.title}
                className=" backdrop-blur-sm p-6 rounded-2xl border-2 border-purple-500/30 shadow-[0_0_20px_rgba(130,69,236,0.4)]"
              >
                <h3 className="text-xl font-semibold text-white mb-6 text-center">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400">
                    {category.title}
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center space-x-2 bg-gray-800/70 border border-purple-500/20 rounded-lg p-3"
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-6 h-6"
                      />
                      <span className="text-sm text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Desktop View - Marquee Effect */
          <div className="relative overflow-hidden whitespace-nowrap w-full">
            <div className="inline-flex gap-8 py-8 animate-marquee">
              {[1, 2].map((index) =>
                SkillsInfo.map((category) => (
                  <div
                    key={`${category.title}-${index}`}
                    className="backdrop-blur-sm px-6 py-8 w-[320px] min-w-[320px] rounded-2xl border-2 border-purple-500/30 hover:border-purple-400/50   flex flex-col items-center transition-all duration-300"
                  >
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400">
                        {category.title}
                      </span>
                    </h3>
                    <div className="grid grid-cols-2 gap-4 w-full">
                      {category.skills.map((skill) => (
                        <div
                          key={`${skill.name}-${index}`}
                          className="flex items-center justify-center space-x-3 bg-gray-800/70 hover:bg-gray-700/80 border border-purple-500/20 hover:border-purple-400/40 rounded-xl py-4 px-4 text-center transition-all duration-300 group"
                        >
                          <img
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110"
                          />
                          <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
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

export default Skills;