import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaExternalLinkAlt } from "react-icons/fa"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const blogs = [
  {
    title: "Understanding OAuth",
    description:
      "A deep dive into OAuth — a modern authorization protocol that enhances security by allowing applications to access user data without sharing passwords.",
    link: "https://prathmesh-oauth.hashnode.dev/understanding-oauth-what-it-is-and-how-it-differs-from-traditional-authentication",
    date: "May 2025",
  },
  {
    title: "JavaScript Best Practices for 2025",
    description:
      "Discover key JavaScript best practices and coding standards to write clean, efficient, and future-ready code in 2025.",
    link: "https://javascript-best-practices-for-2025.hashnode.dev/javascript-best-practices-for-2025-write-clean-modern-and-performant-code",
    date: "May 2025",
  },
  {
    title: "Building RESTful APIs with Node.js and Express.js",
    description:
      "Learn how to design and develop secure, scalable RESTful APIs using Node.js and Express.js, following industry best practices.",
    link: "https://javascript-best-practices-for-2025.hashnode.dev/javascript-best-practices-for-2025-write-clean-modern-and-performant-code",
    date: "May 2025",
  },
]

const Blog = ({ theme }) => {
  return (
    <section className="p-6">
      <h2
        className={`text-xl font-bold mb-6 hover:underline ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        Blogs
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            <Card
              className={`shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[340px] w-full rounded-2xl ${
                theme === "light"
                  ? "bg-white text-black"
                  : "bg-neutral-900 text-white"
              }`}
            >
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-semibold leading-tight">
                    {blog.title}
                  </CardTitle>
                  <Badge
                    className={`text-xs ${
                      theme === "light"
                        ? "bg-gray-200 text-gray-800"
                        : "bg-gray-800 text-gray-300"
                    }`}
                  >
                    {blog.date}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <p
                  className={`text-sm leading-relaxed line-clamp-5 ${
                    theme === "light" ? "text-gray-700" : "text-gray-400"
                  }`}
                >
                  {blog.description}
                </p>
              </CardContent>

              <div className="flex justify-center items-center p-3 border-t border-gray-700/20">
                {blog.link && (
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                      theme === "light"
                        ? "text-blue-600 hover:text-blue-800"
                        : "text-blue-400 hover:text-blue-300"
                    }`}
                  >
                    <FaExternalLinkAlt /> Read Blog
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

export default Blog
