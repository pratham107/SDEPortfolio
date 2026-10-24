import { motion } from 'framer-motion'
import { BriefcaseBusiness, MapPin, Network, Workflow } from 'lucide-react'
import {
  SiAmazonwebservices,
  SiAmazons3,
  SiAnthropic,
  SiDocker,
  SiKubernetes,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

const experiences = [
  {
    company: 'CentraLogic',
    location: 'Pune, Maharashtra',
    role: 'Software Engineer',
    dates: 'December 2025 – Present',
    start: { year: 2025, month: 11 },
    current: true,
    highlights: [
      'Develop backend components and REST APIs using Node.js, NestJS, TypeScript, and PostgreSQL to meet functional requirements.',
      'Design database schemas and optimize SQL queries, indexes, and database operations to improve data consistency and performance.',
      'Build reliable asynchronous workflows with RabbitMQ, including message acknowledgments, retries, dead-letter queues, and failure handling.',
      'Debug and test APIs with Postman, and improve performance through caching, indexing, and query optimization—reducing API response time by 40%.',
      'Collaborate with senior engineers and cross-functional teams through code reviews and GitHub workflows to deliver features on schedule.',
    ],
    technologies: [
      'Node.js',
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'RabbitMQ',
      'REST APIs',
      'AWS',
      'Redis',
      'Docker',
      'Kubernetes',
      'Claude Code',
    ],
  },
  {
    company: 'Tech Solve',
    role: 'Software Developer',
    dates: 'June 2024 – July 2025',
    start: { year: 2024, month: 5 },
    end: { year: 2025, month: 6 },
    current: false,
    highlights: [
      'Developed and maintained responsive user interfaces.',
      'Collaborated with backend teams to integrate APIs.',
      'Improved cross-browser compatibility and application performance.',
    ],
    technologies: [
      'React',
      'Redux',
      'Tailwind CSS',
      'API Integration',
      'REST APIs',
      'Docker',
      'CDN',
      'Amazon S3',
    ],
  },
]

const technologyIcons = {
  'Node.js': { Icon: SiNodedotjs, color: 'text-green-600' },
  NestJS: { Icon: SiNestjs, color: 'text-red-500' },
  TypeScript: { Icon: SiTypescript, color: 'text-blue-600' },
  PostgreSQL: { Icon: SiPostgresql, color: 'text-sky-700' },
  RabbitMQ: { Icon: SiRabbitmq, color: 'text-orange-600' },
  'REST APIs': { Icon: Network, color: 'text-violet-500' },
  AWS: { Icon: SiAmazonwebservices, color: 'text-orange-500' },
  Redis: { Icon: SiRedis, color: 'text-red-600' },
  Docker: { Icon: SiDocker, color: 'text-sky-500' },
  Kubernetes: { Icon: SiKubernetes, color: 'text-blue-600' },
  'Claude Code': { Icon: SiAnthropic, color: 'text-orange-700' },
  React: { Icon: SiReact, color: 'text-sky-500' },
  Redux: { Icon: SiRedux, color: 'text-violet-600' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: 'text-cyan-500' },
  'API Integration': { Icon: Workflow, color: 'text-emerald-600' },
  CDN: { Icon: Network, color: 'text-indigo-500' },
  'Amazon S3': { Icon: SiAmazons3, color: 'text-emerald-600' },
}

const getTenure = ({ start, end }) => {
  const today = new Date()
  const endYear = end?.year ?? today.getUTCFullYear()
  const endMonth = end?.month ?? today.getUTCMonth()
  const totalMonths = Math.max(0, (endYear - start.year) * 12 + endMonth - start.month)
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  if (years === 0) return `${months} ${months === 1 ? 'month' : 'months'}`
  if (months === 0) return `${years} ${years === 1 ? 'year' : 'years'}`
  return `${years} ${years === 1 ? 'year' : 'years'} ${months} ${months === 1 ? 'month' : 'months'}`
}

// eslint-disable-next-line react/prop-types
const Experience = ({ theme }) => {
  const isDark = theme === 'dark'

  return (
    <section className="p-4 sm:p-6" aria-labelledby="experience-heading">
      <h2
        id="experience-heading"
        className={`mb-8 text-2xl font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}
      >
        Experience
      </h2>

      <div className="flex flex-col gap-8">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.company}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.15 }}
            className="min-w-0"
          >
            <div
              className={`min-w-0 pb-1 ${
                isDark ? 'text-zinc-300' : 'text-slate-600'
              }`}
            >
              <div className="grid w-full grid-cols-1 gap-y-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-x-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {experience.company}
                    </h3>
                    {experience.current && (
                      <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                        Current
                      </span>
                    )}
                  </div>
                  <p className={`mt-1 flex items-center gap-2 text-sm font-medium ${
                    isDark ? 'text-blue-300' : 'text-blue-700'
                  }`}>
                    <BriefcaseBusiness size={15} aria-hidden="true" />
                    {experience.role}
                  </p>
                </div>

                <div className={`flex flex-col items-start gap-1 text-sm sm:col-start-2 sm:row-start-1 sm:min-w-52 sm:items-end sm:text-right ${
                  isDark ? 'text-zinc-400' : 'text-slate-500'
                }`}>
                  <span className="font-medium">{experience.dates}</span>
                  <span
                    className={`inline-flex w-fit self-start items-center rounded-full border px-3 py-1 text-xs font-semibold sm:self-end ${
                      isDark
                        ? 'border-emerald-400/30 bg-emerald-400/15 text-emerald-200'
                        : 'border-emerald-300 bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    Tenure: {getTenure(experience)}
                  </span>
                  {experience.location && (
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} aria-hidden="true" />
                      {experience.location}
                    </span>
                  )}
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm leading-6">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span
                      className="shrink-0 text-lg font-bold leading-6 text-blue-600"
                      aria-hidden="true"
                    >
                      •
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${experience.company} technologies`}>
                {experience.technologies.map((technology) => (
                  <li
                    key={technology}
                    title={technology}
                    aria-label={technology}
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${
                      isDark ? 'bg-zinc-800' : 'bg-slate-100'
                    }`}
                  >
                    {(() => {
                      const { Icon, color } = technologyIcons[technology]
                      return <Icon className={`h-4 w-4 ${color}`} aria-hidden="true" />
                    })()}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Experience
