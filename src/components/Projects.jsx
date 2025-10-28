import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { motion } from "framer-motion"
import { Button } from "./ui/button"

const projects = [
  {
  title: "Advance Auth",
  tech: ["React.js", "Express.js", "MongoDB", "JWT"],
  description:
    "A secure and scalable full-stack authentication system built using the MERN stack. It includes user registration, login, password reset, and protected routes with role-based access control. The system ensures data privacy through JWT authentication and bcrypt encryption, offering a seamless and secure login experience for users.",
  github: "https://github.com/yourusername/hospital-management",
  live: "https://hospital-demo.vercel.app",
},
 {
  title: "Portfolio Website",
  tech: ["React.js", "TailwindCSS", "Framer Motion"],
  description:
    "A modern, fully responsive portfolio website built with React.js and TailwindCSS to showcase my skills, experience, and projects. It features smooth Framer Motion animations, a dark/light theme toggle, and a clean, user-friendly interface focused on performance and accessibility.",
  github: "https://github.com/yourusername/portfolio",
  live: "https://yourname.vercel.app",
},
  {
  title: "Eassy Apply",
  tech: ["React.js", "Node.js", "Express", "MySQL", "JWT"],
  description:
    "A full-stack job application platform that simplifies the hiring process. Built with React.js and Node.js, it features secure JWT-based authentication, role management for recruiters and applicants, and MySQL integration for efficient data handling. The system allows users to create profiles, post jobs, and track applications seamlessly.",
  github: "https://github.com/yourusername/blog-api",
  live: "https://yourname.vercel.app",
},
]

const Project = ({ theme }) => {
  return (
    <section className="p-6">
      <h2
        className={`text-xl font-bold mb-6 hover:underline ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        Projects
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.03 }}
          >
            <Card
              className={`shadow hover:shadow-lg transition-all duration-300 flex flex-col justify-between
                h-[350px] w-full rounded-2xl ${
                theme === "light"
                  ? "bg-white text-black"
                  : "bg-neutral-900 text-white"
              }`}
            >
              {/* Header */}
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">
                  {project.title}
                </CardTitle>
                <div className="flex flex-wrap gap-2 mt-3">
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
              </CardHeader>

              {/* Description */}
              <CardContent className="flex-1">
                <p
                  className={`text-sm leading-relaxed ${
                    theme === "light"
                      ? "text-gray-700"
                      : "text-gray-400"
                  } line-clamp-4`}
                >
                  {project.description}
                </p>
              </CardContent>

              {/* Footer Buttons */}
              <div className="flex justify-center items-center gap-3 py-3 border-t border-gray-700/20">
                <Button
                  asChild
                  variant="link"
                  className="text-blue-500 hover:text-blue-400"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <FaGithub /> Code
                  </a>
                </Button>

                {project.live && (
                  <>
                    <span className="text-gray-400">|</span>
                    <Button
                      asChild
                      variant="link"
                      className="text-green-500 hover:text-green-400"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <FaExternalLinkAlt /> Live
                      </a>
                    </Button>
                  </>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Project
