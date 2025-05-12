import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = ({ theme }) => {
  return (
    <footer
    className={`py-8 ${
      theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
    }`}
  >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          {/* Left Side: Text and Copyright */}
          <div className="mb-4 sm:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Prathmesh Bhopale. All rights reserved.
            </p>
          </div>

          {/* Right Side: Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/pratham107"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/prathmesh-bhopale-70b091212"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedin size={20} />
            </a>
            {/* <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaTwitter size={20} />
            </a> */}
            {/* <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaInstagram size={20} />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
