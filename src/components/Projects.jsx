import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { FaGithub } from "react-icons/fa"
import { FiPlus, FiMinus } from "react-icons/fi"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "./ui/button"

const projects = [
  {
    title: "Advance Auth",
    tech: ["React.js", "Express.js", "MongoDB", "JWT"],
    description:
      "A secure and scalable full-stack authentication system built using the MERN stack. It includes user registration, login, password reset, and protected routes with role-based access control. The system ensures data privacy through JWT authentication and bcrypt encryption, offering a seamless and secure login experience for users.",
    github: "https://github.com/yourusername/hospital-management",
  },
  {
    title: "Portfolio Website",
    tech: ["React.js", "TailwindCSS", "Framer Motion"],
    description:
      "A modern, fully responsive portfolio website built with React.js and TailwindCSS to showcase my skills, experience, and projects. It features smooth Framer Motion animations, a dark/light theme toggle, and a clean, user-friendly interface focused on performance and accessibility.",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Eassy Apply",
    tech: ["React.js", "Node.js", "Express", "MySQL", "JWT"],
    description:
      "A full-stack job application platform that simplifies the hiring process. Built with React.js and Node.js, it features secure JWT-based authentication, role management for recruiters and applicants, and MySQL integration for efficient data handling. The system allows users to create profiles, post jobs, and track applications seamlessly.",
    github: "https://github.com/yourusername/blog-api",
  },
]

// eslint-disable-next-line react/prop-types
const Project = ({ theme }) => {
  const [openIndex, setOpenIndex] = useState(0)
  const reduceMotion = useReducedMotion()
  const isLight = theme === "light"

  const toggle = (i) => setOpenIndex((current) => (current === i ? null : i))

  return (
    <section className="p-6">
      <h2
        className={`text-xl font-bold mb-6 hover:underline ${
          isLight ? "text-black" : "text-white"
        }`}
      >
        Projects
      </h2>

      <div
        className={`rounded-2xl overflow-hidden shadow border ${
          isLight
            ? "bg-white text-black border-gray-200"
            : "bg-neutral-900 text-white border-white/10"
        }`}
      >
        {projects.map((project, i) => {
          const isOpen = openIndex === i

          return (
            <div
              key={project.title}
              className={i > 0 ? "border-t border-gray-700/20" : ""}
            >
              <h3>
                <button
                  type="button"
                  id={`project-header-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`project-panel-${i}`}
                  onClick={() => toggle(i)}
                  className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors ${
                    isLight ? "hover:bg-gray-50" : "hover:bg-white/5"
                  }`}
                >
                  <span className="text-lg font-semibold">{project.title}</span>
                  <span
                    className="text-blue-500 shrink-0"
                    aria-hidden="true"
                  >
                    {isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}
                  </span>
                </button>
              </h3>

              <motion.div
                id={`project-panel-${i}`}
                role="region"
                aria-labelledby={`project-header-${i}`}
                aria-hidden={!isOpen}
                inert={isOpen ? undefined : ''}
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: reduceMotion ? 0 : 0.25 }}
                className="overflow-hidden"
              >
                    <div className="px-6 pb-6 flex flex-col gap-4">
                      <p
                        className={`line-clamp-3 text-sm leading-relaxed max-w-prose ${
                          isLight ? "text-gray-700" : "text-gray-400"
                        }`}
                      >
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="capitalize text-xs px-2 py-0.5"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        <Button
                          asChild
                          className="bg-blue-600 hover:bg-blue-500 text-white"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <FaGithub /> Code
                          </a>
                        </Button>
                      </div>
                    </div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Project