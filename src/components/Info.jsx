import { motion } from 'framer-motion'
import TypewriterEffect from "./TypeWriter"

const Info = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mt-6 flex flex-col lg:flex-row items-center lg:justify-between gap-10 px-6"
    >
      {/* Text Section */}
      <div className="text-center lg:text-left space-y-4 max-w-xl">
        <h1 className="text-3xl font-bold text-gray-800">
          Hi, I'm Prathmesh <span className="wave text-blue-500">👋</span>
        </h1>
        <h3 className="text-md text-gray-600">
          Software Engineer turned Entrepreneur. <br />
          I love building things and helping people. <br />
          Very active on Twitter.
        </h3>
        <TypewriterEffect />
      </div>

      {/* Image Section */}
      <div className="mt-6 lg:mt-0">
        <motion.img
          src="https://i.ibb.co/v6pnmvH3/Chat-GPT-Image-Apr-24-2025-10-28-24-PM.png"
          alt="Profile Pic"
          className="rounded-full w-32 h-32 object-cover shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        />
      </div>
    </motion.section>
  )
}

export default Info
