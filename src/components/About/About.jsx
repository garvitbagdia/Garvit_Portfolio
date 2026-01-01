import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-10 px-[6vw] md:px-[8vw] lg:px-[15vw] font-sans mt-20"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
           Garvit Bagdia
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'UI/UX Designer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg 
              text-gray-300 
              leading-8 
              mt-6 mb-10 
              max-w-xl">
  I am a full-stack developer with a primary focus on backend development. 
I specialize in designing robust APIs, managing databases, and building scalable server-side 
applications using the MERN stack and modern web technologies.

</p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1w6NfEq3qAXSabFDeU7iPRr6Ck9wkSgAq/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
  <Tilt
    className="w-56 h-56 sm:w-72 sm:h-72 md:w-[26rem] md:h-[26rem]
               rounded-full flex items-center justify-center
               bg-gradient-to-r from-purple-600 to-violet-500 p-1"
    tiltMaxAngleX={15}
    tiltMaxAngleY={15}
    perspective={1000}
    scale={1.05}
    transitionSpeed={1000}
    gyroscope={true}
  >
    <img
      src={profileImage}
      alt="Garvit Bagdia"
      className="w-full h-full rounded-full object-cover bg-black
                 shadow-[0_0_40px_rgba(130,69,236,0.6)]"
    />
  </Tilt>
</div>
      </div>
    </section>
  );
};

export default About;
