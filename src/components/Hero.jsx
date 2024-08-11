import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div id="hero" className="flex flex-col pt-10 h-[100vh] relative w-full">
      <section className="relative bg-gradient-to-r from-violet-50 to-orange-50">
        <img
          src="https://plus.unsplash.com/premium_photo-1683121696175-d05600fefb85?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="absolute -z-10 inline-block h-full w-full object-cover opacity-75"
        />
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20 items-center">
            {/* Image comes first for small devices */}
            <div className="flex justify-center lg:order-2 h-full animate-slide-in-right">
              <img
                src="nikku_image.jpg"
                alt="Nikku"
                className="mx-auto h-auto inline-block w-full max-w-[250px] md:max-w-[350px] lg:max-w-[400px] rounded-2xl object-cover"
              />
            </div>
            {/* Content comes second for small devices */}
            <div className="max-w-[720px] lg:text-left lg:order-1">
              <h1 className="mb-3 pb-4 text-3xl font-bold text-green-700 md:text-5xl">
                <Typewriter
                  words={['Software Developer', 'Coder']}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <p className="mb-6 max-w-[528px] text-md md:text-lg md:mb-10">
                I am an aspiring software developer with expertise in Java and the MERN stack, focused on building scalable web applications and enhancing user interfaces. Currently pursuing a B.Tech in Computer Science & Engineering, I'm passionate about solving problems and eager to contribute to innovative projects.
              </p>
              <div className="flex flex-row justify-start items-center lg:justify-start">
                <a
                  href="https://drive.google.com/drive/u/0/folders/1IixhTfFg9nbdrY_NDOyGpcBfOF5KgiTc"
                  className="mr-5 inline-block rounded-full px-8 py-3 text-center font-bold text-white transition hover:border-black hover:bg-yellow-300 bg-btnColor hover:text-black md:mr-6 lg:mr-8 text-md"
                >
                  Resume
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
