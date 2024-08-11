import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link, ScrollLink } from 'react-scroll';
import { CiLocationArrow1 } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const whatsappNumber = "7631770210"; 
  const message = "Hello! I'd like to talk with you.";

  const handleClick = () => {
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <nav className="bg-white bg-opacity-90 text-black fixed top-0 left-0 w-full z-20">
      <div className="max-w-6xl py-1 mx-auto px-4 sm:px-0 lg:px-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-black text-2xl font-semibold ml-4 md:mx-0">Nikku kumar Das</a>
          </div>
          <div className="hidden md:flex flex-grow justify-center items-center">
            <div className="flex items-baseline space-x-2">
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="text-black hover:bg-black transition duration-200 hover:text-white py-1 px-5 rounded-3xl text-lg  cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-black hover:bg-black hover:text-white py-2 px-4 rounded-3xl text-lg  cursor-pointer"
              >
                About
              </Link>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className="text-black hover:bg-black hover:text-white py-2 px-4 rounded-3xl text-lg  cursor-pointer"
              >
                Experience
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="text-black hover:bg-black hover:text-white px-3 py-2 px-4 rounded-3xl text-lg  cursor-pointer"
              >
                Projects
              </Link>
              <Link
            to="contact"
            smooth={true}
                duration={500}
                className="text-black hover:bg-black hover:text-white px-3 py-2 px-4 rounded-3xl text-lg cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4 ml-6">
        

            <button className='bg-black flex justify-center items-center gap-3 rounded-3xl text-white px-6 py-3'onClick={handleClick} >Let's talk <CiLocationArrow1 color='yellow'fontSize={'20px'} fontWeight={'1000'}/></button>
          </div>
          <div className="-mr flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden fixed top-16 left-0 w-3/4 h-full bg-white text-black transform transition-transform duration-300 ease-in-out z-10`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="text-black hover:bg-gray-200 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="text-black hover:bg-gray-200 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
          >
            About
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="text-black hover:bg-gray-200 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="text-black hover:bg-gray-200 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            onClick={closeMenu}
            className="text-black hover:bg-gray-200 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
        </div>
        <button className='bg-black mx-4 flex justify-center items-center gap-3 rounded-3xl text-white px-6 py-2' >Let's talk <CiLocationArrow1 color='yellow'fontSize={'20px'} fontWeight={'1000'}/></button>
      </div>
    </nav>
  );
};

export default Navbar;
