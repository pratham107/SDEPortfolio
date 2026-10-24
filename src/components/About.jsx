import { motion } from 'framer-motion'

// eslint-disable-next-line
const About = ({ theme }) => {
  const isDark = theme === 'dark'

  return (
    <motion.section
      className="p-6 sm:p-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <h2 className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
          About me
        </h2>
        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-300">
          1.7+ years of experience
        </span>
      </div>

      <div className={`max-w-3xl space-y-4 text-sm leading-7 sm:text-base ${
        isDark ? 'text-zinc-300' : 'text-slate-600'
      }`}>
        <p>
          I’m a passionate <span className="font-semibold text-blue-500">Full Stack Developer</span> with 1.7+ years of experience building high-performance, scalable, and intuitive web applications. I work across the stack, from crafting responsive user interfaces to developing reliable backend services and APIs.
        </p>
        <p>
          My core experience is with the <span className="font-semibold text-emerald-500">MERN stack</span>, and I’m interested in the systems behind dependable products—from thoughtful system design to containerized deployments. I value clean, maintainable code and practical solutions that improve user experience and deliver real impact.
        </p>
      </div>

    </motion.section>
  )
}

export default About
