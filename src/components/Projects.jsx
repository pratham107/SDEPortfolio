import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Hospital Management System",
    tech: ["React", "PHP", "MySQL", "TailwindCSS"],
    description:
      "A full-featured system to manage patient admissions, OT prescriptions, and discharge summaries with role-based access.",
    github: "https://github.com/yourusername/hospital-management",
    live: "https://hospital-demo.vercel.app",
  },
  {
    title: "Portfolio Website",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    description:
      "Personal portfolio website showcasing my skills, projects, and experience with beautiful animations.",
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourname.vercel.app",
  },
  {
    title: "Blog API with JWT",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    description:
      "Secure REST API for managing blog posts and user authentication with JWT.",
    github: "https://github.com/yourusername/blog-api",
    live: "",
  },
]

const Project = ({theme}) => {
  return (
    <section className="p-6">
      <h2
        className={`text-xl font-bold mb-6 hover:underline ${
            theme === 'light' ? 'text-black' : 'text-white'
        }`}
        >
            Projects
        </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.03 }}
          >
           <Card
            className={`shadow hover:shadow-lg transition min-h-[300px] max-w-[300px] flex flex-col ${
                theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
            }`}
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="capitalize">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
              </CardContent>
              <div className="flex gap-4 p-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-green-600 hover:underline"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
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
