
import { motion } from 'framer-motion'

// eslint-disale-next-line
const About = ({ theme }) => {
  return (
    <motion.section
      className="p-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h4 className={`text-xl font-bold font-sans mb-4 hover:underline ${theme === 'light' ? 'text-black' : 'text-white'}`}>
        About
      </h4>
      <p className={`text-sm leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
        I’m a passionate software developer with a knack for problem-solving and a deep enthusiasm
        for crafting efficient, scalable, and user-friendly solutions. Specializing in the MERN
        stack (MongoDB, Express.js, Node.js), I enjoy building end-to-end web applications that
        deliver seamless user experiences.
      </p>
    </motion.section>
  )
}

export default About