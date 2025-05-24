import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/rana.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-8 lg:px-16 xl:px-32 font-sans overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 20% 50%, rgba(130, 69, 236, 0.1) 0%, rgba(0, 0, 0, 0) 50%)'
      }}
    >
      {/* Background elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple-900/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-pink-900/10 blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2">
            {/* Greeting with animated underline */}
            <div className="relative inline-block mb-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Hi, I am
              </h1>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
            
            {/* Name with gradient text */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              RANA SHEIKH
            </h2>
            
            {/* Typing effect with improved styling */}
            <div className="mb-8 h-12 sm:h-14 md:h-16 flex items-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                I am a{' '}
                <span className="relative inline-block">
                  <ReactTypingEffect
                    text={[
                      'Flutter Developer',
                      'App Developer',
                      'Mobile Specialist',
                      'UI/UX Enthusiast'
                    ]}
                    speed={100}
                    eraseSpeed={50}
                    typingDelay={500}
                    eraseDelay={2000}
                    cursorRenderer={(cursor) => (
                      <span className="text-purple-400">{cursor}</span>
                    )}
                    displayTextRenderer={(text) => (
                      <span className="text-purple-400 font-bold">{text}</span>
                    )}
                  />
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></span>
                </span>
              </h3>
            </div>
            
            {/* About text with animated border */}
            <div className="relative group">
              <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed border-l-4 border-purple-500/30 pl-6 py-2 transition-all duration-500 group-hover:border-purple-500/80">
                I am a passionate Flutter developer with a strong interest in building cross-platform mobile applications. 
                I specialize in using Flutter and Dart to create seamless user experiences on both iOS and Android. 
                With a solid understanding of mobile app development principles, I aim to build high-quality and 
                performance-optimized apps that meet user needs.
              </p>
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-purple-900/20 to-pink-900/20 opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-500"></div>
            </div>
            
            {/* Download CV button with hover effect */}
            <a
              href="https://drive.google.com/file/d/1SLZ0QFKfTLYeoB5a9e5nrVU8BEiY5zYg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-bold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #8245ec 0%, #a855f7 50%, #c084fc 100%)',
                boxShadow: '0 4px 15px rgba(130, 69, 236, 0.4)',
              }}
            >
              <span>DOWNLOAD CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <Tilt
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.05}
              transitionSpeed={2000}
              gyroscope={true}
            >
              <div className="absolute inset-0 rounded-full border-4 border-purple-500/30 shadow-[0_0_30px_rgba(130,69,236,0.3)] transition-all duration-500 hover:border-purple-500/70 hover:shadow-[0_0_50px_rgba(130,69,236,0.5)]"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-900/20 to-pink-900/20 blur-md opacity-70"></div>
              <img
                src={profileImage}
                alt="Rana Sheikh"
                className="relative z-10 w-full h-full rounded-full object-cover border-4 border-transparent"
              />
              {/* Floating circles decoration */}
              <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-purple-500/10 blur-md"></div>
              <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-pink-500/10 blur-md"></div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;