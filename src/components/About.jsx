import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="about" className="w-full px-4 sm:px-[5%] md:px-[10%] lg:px-[12%] py-16 md:py-20 mt-10 md:mt-20 scroll-mt-2 text-black">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">About Me</h2>

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 my-10">
        <div className="w-full lg:w-auto max-w-xs mx-auto lg:mx-0 relative">
          <img
            src="img2.jpg"
            alt="User"
            className="w-64 sm:w-72 md:w-80 lg:w-84 rounded-3xl"
          />

          <div className="w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
            {/* Additional content or icons can be placed here */}
          </div>
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl text-[15px] md:text-lg">
            I am an aspiring software developer pursuing a B.Tech in Computer Science & Engineering, with experience in building scalable web applications using Java and the MERN stack. Through internships, I have optimized performance, implemented component-based architecture, and enhanced user interfaces. I am passionate about creating innovative solutions and eager to grow within a dynamic team.
          </p>

          <div className="flex items-center border-2 border-gray-500 rounded-2xl p-3 animate-slide-in-right">
            <img src="nsec.png" alt="College" className="w-20 h-full rounded-lg object-cover mr-4" />
            <div>
              <h2 className="text-md font-bold md:text-xl">Netaji Subhash Engineering College Kolkata</h2>
              <p className="text-gray-700 md:text-lg text-sm">B.Tech in Computer Science & Engineering</p>
              <p className="text-gray-700 md:text-lg text-sm">Expected Graduation: 2025</p>
              <p className="text-gray-700 md:text-lg text-sm">CGPA: 8.33</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
