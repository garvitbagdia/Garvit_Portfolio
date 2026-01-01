import React from "react";
import { education } from "../../constants";

const Education = () => {
  // Only take 3 education entries
  const educationData = education.slice(0, 3);

  return (
    <section
      id="education"
      className="py-20 px-[8vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-28 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic journey from school to graduation
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line (shorter for 3 cards) */}
        <div className="absolute left-8 top-4 w-1 bg-white h-[85%]"></div>

        {/* Education Cards */}
        {educationData.map((edu) => (
          <div key={edu.id} className="flex items-start mb-12 relative">
            {/* Timeline Circle */}
            <div className="w-14 h-14 rounded-full bg-gray-800 border-4 border-[#8245ec] flex items-center justify-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Card */}
            <div className="ml-10 w-full p-6 rounded-2xl bg-gray-900 border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105">
              <div className="flex items-center gap-5">
                {/* School Logo */}
                <div className="w-20 h-14 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">
                    {edu.school}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {edu.date}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-gray-400 font-bold">
                Grade: {edu.grade}
              </p>
              <p className="mt-2 text-gray-400">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
