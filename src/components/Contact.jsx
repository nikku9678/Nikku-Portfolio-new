import React from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto m-4 mb-12 rounded-[30px] md:rounded-[60px] flex items-center justify-center p-2 md:p-10 bg-[#202124]" id='contact'>
      <div className="text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl md:text-4xl font-semibold mb-8">Feel free to contact us</h2>
        <div className="flex justify-center space-x-4">
          
          <a href="https://github.com/nikku9678/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl text-blue-400 hover:text-blue-600" />
          </a>
          <a href="https://www.instagram.com/_nikku_9678/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl text-pink-500 hover:text-pink-700" />
          </a>
          <a href="https://www.linkedin.com/in/nikku-kumar-das-b6955121b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-900" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
