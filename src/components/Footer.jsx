import { FaGithub, FaLinkedin } from 'react-icons/fa'

// eslint-disable-next-line react/prop-types
const Footer = ({ theme }) => {
  return (
    <footer
    id="contact"
    className={`py-8 ${
      theme === 'light' ? 'bg-transparent text-black' : 'bg-black text-white'
    }`}
  >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          {/* Left Side: Text and Copyright */}
          <div className="mb-4 sm:mb-0">
            <p className="text-sm">
              &copy; {new Date().getUTCFullYear()} Prathmesh Bhopale. All rights reserved.
            </p>
          </div>

          {/* Right Side: Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/pratham107"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className={`transition ${
                theme === 'light' ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-300'
              }`}
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/prathmesh-bhopale-70b091212"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className={`transition ${
                theme === 'light' ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-300'
              }`}
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
