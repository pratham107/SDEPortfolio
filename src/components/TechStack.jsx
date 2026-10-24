import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Database, GitBranch, TestTube2, Workflow } from 'lucide-react'
import {
  SiAmazonwebservices,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiMongodb,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiRabbitmq,
  SiReact,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

const skillGroups = [
  {
    name: 'Languages',
    description: 'Core technologies',
    dotColor: 'bg-amber-500',
    skills: [
      { name: 'JavaScript (ES6+)', Icon: SiJavascript, color: 'text-yellow-500' },
      { name: 'TypeScript', Icon: SiTypescript, color: 'text-blue-600' },
      { name: 'HTML5', Icon: SiHtml5, color: 'text-orange-600' },
      { name: 'CSS3', Icon: SiCss3, color: 'text-blue-500' },
    ],
  },
  {
    name: 'Frontend',
    description: 'UI & state management',
    dotColor: 'bg-sky-500',
    skills: [
      { name: 'React.js', Icon: SiReact, color: 'text-sky-500' },
      { name: 'Redux Toolkit', Icon: SiRedux, color: 'text-violet-600' },
      { name: 'RTK Query', Icon: SiReactquery, color: 'text-red-500' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: 'text-cyan-500' },
    ],
  },
  {
    name: 'Backend',
    description: 'Services & APIs',
    dotColor: 'bg-violet-500',
    skills: [
      { name: 'Node.js', Icon: SiNodedotjs, color: 'text-green-600' },
      { name: 'Express.js', Icon: SiExpress, color: 'text-zinc-700 dark:text-zinc-200' },
      { name: 'NestJS', Icon: SiNestjs, color: 'text-red-500' },
      { name: 'RESTful API Design & Integration', Icon: TbApi, color: 'text-indigo-500' },
    ],
  },
  {
    name: 'Databases',
    description: 'Storage & data access',
    dotColor: 'bg-emerald-500',
    skills: [
      { name: 'MongoDB', Icon: SiMongodb, color: 'text-green-600' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: 'text-sky-700' },
      { name: 'SQL', Icon: Database, color: 'text-blue-600' },
      { name: 'Redis', Icon: SiRedis, color: 'text-red-600' },
      { name: 'Prisma', Icon: SiPrisma, color: 'text-slate-700 dark:text-slate-200' },
    ],
  },
  {
    name: 'Messaging',
    description: 'Asynchronous communication',
    dotColor: 'bg-orange-500',
    skills: [{ name: 'RabbitMQ', Icon: SiRabbitmq, color: 'text-orange-600' }],
  },
  {
    name: 'Cloud & DevOps',
    description: 'Infrastructure & delivery',
    dotColor: 'bg-teal-500',
    skills: [
      { name: 'AWS', Icon: SiAmazonwebservices, color: 'text-orange-500' },
      { name: 'Docker', Icon: SiDocker, color: 'text-sky-500' },
      { name: 'Jenkins', Icon: SiJenkins, color: 'text-red-600' },
      { name: 'CI/CD', Icon: Workflow, color: 'text-emerald-600' },
    ],
  },
  {
    name: 'Testing & Debugging',
    description: 'Quality & troubleshooting',
    dotColor: 'bg-rose-500',
    skills: [
      { name: 'Postman (API Testing)', Icon: SiPostman, color: 'text-orange-500' },
      { name: 'Manual Testing', Icon: TestTube2, color: 'text-pink-600' },
      { name: 'Debugging', Icon: Workflow, color: 'text-rose-600' },
    ],
  },
  {
    name: 'Tools & Practices',
    description: 'Collaboration & delivery',
    dotColor: 'bg-indigo-500',
    skills: [
      { name: 'Git', Icon: SiGit, color: 'text-orange-600' },
      { name: 'GitHub', Icon: SiGithub, color: 'text-zinc-800 dark:text-zinc-100' },
      { name: 'Version Control', Icon: GitBranch, color: 'text-indigo-600' },
      { name: 'SDLC', Icon: Workflow, color: 'text-blue-600' },
      { name: 'Code Reviews', Icon: GitBranch, color: 'text-violet-600' },
    ],
  },
]

// eslint-disable-next-line react/prop-types
const TechStack = ({ theme }) => {
  const isDark = theme === 'dark'
  const [active, setActive] = useState(0)
  const tabRefs = useRef([])

  // Arrow keys, Home and End move between tabs
  const handleKeyDown = (event) => {
    const last = skillGroups.length - 1
    let next = active
    if (event.key === 'ArrowRight') next = active === last ? 0 : active + 1
    else if (event.key === 'ArrowLeft') next = active === 0 ? last : active - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = last
    else return
    event.preventDefault()
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section className="p-4 sm:p-6" aria-labelledby="skills-heading">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2
          id="skills-heading"
          className={`text-2xl font-bold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Skills
        </h2>
        <p className={`mt-2 text-sm ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}>
          Technologies and practices I use to build and deliver software.
        </p>
      </motion.div>

      <div
        role="tablist"
        aria-label="Skill categories"
        onKeyDown={handleKeyDown}
        className="mt-6 flex flex-wrap gap-2"
      >
        {skillGroups.map((g, index) => {
          const selected = index === active
          return (
            <button
              key={g.name}
              ref={(el) => (tabRefs.current[index] = el)}
              role="tab"
              type="button"
              id={`skills-tab-${index}`}
              aria-selected={selected}
              aria-controls={`skills-panel-${index}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              className={`relative max-w-full rounded-full px-3 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 sm:px-4 sm:text-sm ${
                isDark ? 'focus-visible:ring-offset-zinc-900' : 'focus-visible:ring-offset-white'
              } ${
                selected
                  ? 'isolate text-white shadow-md shadow-indigo-600/20'
                  : isDark
                    ? 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-800'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="skills-active-tab"
                  className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-blue-600 to-violet-600"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative z-10">{g.name}</span>
            </button>
          )
        })}
      </div>

      {skillGroups.map((group, index) => (
        <div
          key={group.name}
          id={`skills-panel-${index}`}
          role="tabpanel"
          aria-labelledby={`skills-tab-${index}`}
          hidden={index !== active}
          className={`mt-4 min-h-[190px] rounded-2xl p-5 ring-1 sm:p-6 ${
            isDark
              ? 'bg-zinc-900/90 ring-zinc-800'
              : 'bg-white shadow-md shadow-slate-900/5 ring-slate-200'
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3
                  className={`flex items-center text-base font-bold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  <span className={`mr-2 inline-block h-2.5 w-2.5 rounded-full ${group.dotColor}`} />
                  {group.name}
                </h3>
                <p className={`mt-1 pl-4 text-xs ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
                  {group.description}
                </p>
              </div>
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
                  isDark ? 'bg-zinc-800 text-zinc-300' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {group.skills.length} {group.skills.length === 1 ? 'skill' : 'skills'}
              </span>
            </div>

            <ul className="mt-5 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 lg:grid-cols-3">
              {group.skills.map(({ name, Icon, color }, skillIndex) => (
                <motion.li
                  key={name}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.22, delay: skillIndex * 0.04 }}
                  className={`flex min-h-12 min-w-0 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    isDark
                      ? 'bg-zinc-800/80 text-zinc-200 hover:bg-zinc-800'
                      : 'bg-slate-50 text-slate-700 ring-1 ring-slate-100 hover:bg-slate-100'
                  }`}
                >
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                    isDark ? 'bg-zinc-700/70' : 'bg-white shadow-sm'
                  }`}>
                    <Icon className={`h-4 w-4 ${color}`} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 break-words">{name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      ))}
    </section>
  )
}

export default TechStack