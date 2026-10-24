import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'

const education = {
  year: 'Batch of 2024',
  degree: 'Bachelor of Engineering',
  branch: 'Computer Science and Engineering',
  institution: 'SSES College of Engineering and Technology',
  location: 'Akola, Maharashtra',
  highlights: [
    'Focused on software engineering principles and practices.',
    'Studied data structures and core computer science concepts.',
    'Built knowledge of full-stack web development.',
    'Applied engineering concepts to designing and developing web applications.',
  ],
}

// eslint-disable-next-line react/prop-types
const Education = ({ theme }) => {
  const isDark = theme === 'dark'

  return (
    <section className="p-4 sm:p-6" aria-labelledby="education-heading">
      <h2
        id="education-heading"
        className={`mb-8 text-2xl font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}
      >
        Education
      </h2>

      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.15 }}
        className="min-w-0"
      >
        <div className="grid w-full grid-cols-1 gap-y-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-x-6">
          <div>
            <h3 className={`text-lg font-bold ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {education.degree}
            </h3>
            <p className={`mt-1 text-sm font-medium ${
              isDark ? 'text-blue-300' : 'text-blue-700'
            }`}>
              {education.branch}
            </p>
            <p className={`mt-3 text-sm font-semibold ${
              isDark ? 'text-zinc-200' : 'text-slate-800'
            }`}>
              {education.institution}
            </p>
            <p className={`mt-1 flex items-center gap-1.5 text-sm ${
              isDark ? 'text-zinc-400' : 'text-slate-500'
            }`}>
              <MapPin size={14} aria-hidden="true" />
              {education.location}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm sm:col-start-2 sm:row-start-1 sm:justify-self-end">
            <GraduationCap
              className={isDark ? 'text-blue-300' : 'text-blue-600'}
              size={18}
              aria-hidden="true"
            />
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
              isDark ? 'bg-blue-400/10 text-blue-300' : 'bg-blue-50 text-blue-700'
            }`}>
              {education.year}
            </span>
          </div>
        </div>

        <ul className={`mt-4 space-y-2 text-sm leading-6 ${
          isDark ? 'text-zinc-300' : 'text-slate-600'
        }`}>
          {education.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-3">
              <span className="shrink-0 text-lg font-bold leading-6 text-blue-600" aria-hidden="true">
                •
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </motion.article>
    </section>
  )
}

export default Education
