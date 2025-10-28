import { motion } from 'framer-motion'

// eslint-disable-next-line
const About = ({ theme }) => {
  return (
    <motion.section
      className="p-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h4
        className={`text-xl font-bold font-sans mb-4 hover:underline ${
          theme === 'light' ? 'text-black' : 'text-white'
        }`}
      >
        About
      </h4>
      <p
        className={`text-sm leading-relaxed ${
          theme === 'light' ? 'text-gray-700' : 'text-gray-300'
        }`}
      >
        I’m a passionate <span className="font-semibold text-blue-500">Full Stack Developer </span> 
        with a strong focus on creating high-performance, scalable, and intuitive web applications. 
        I specialize in the <span className="font-semibold text-green-500">MERN stack </span>  
        (MongoDB, Express.js, React.js, Node.js) and enjoy building complete solutions — from 
        designing responsive user interfaces to developing robust backend systems. 
        <br /><br />
        My goal is to write clean, efficient code that not only solves problems but also enhances 
        user experience and business value. I’m always eager to learn new technologies, 
        optimize performance, and contribute to impactful projects that make a real difference.
      </p>
    </motion.section>
  )
}

export default About
