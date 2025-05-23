import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaExternalLinkAlt } from "react-icons/fa"
import { motion } from "framer-motion"

const blogs = [
  {
    title: "Understanding OAuth",
    description:
      "When building modern web or mobile applications, security is a major concern. Among the many tools used to protect user data and identities, OAuth stands out as a powerful and flexible authorization protocol.",
    link: "https://prathmesh-oauth.hashnode.dev/understanding-oauth-what-it-is-and-how-it-differs-from-traditional-authentication",
    date: "May 2025",
  },
  {
    title: "JavaScript Best Practices for 2025",
    description:
      "A collection of the most important JavaScript best practices every developer should follow in 2025.",
    link: "https://javascript-best-practices-for-2025.hashnode.dev/javascript-best-practices-for-2025-write-clean-modern-and-performant-code",
    date: "May 2025",
  },
  {
    title: "Building RESTful APIs with Node.js and Express.js",
    description:
      "This blog guides you through building scalable and secure RESTful APIs with Node.js and Express.js.",
    link: "https://javascript-best-practices-for-2025.hashnode.dev/javascript-best-practices-for-2025-write-clean-modern-and-performant-code",
    date: "May 2025",
  },
]

const Blog = ({theme}) => {
  return (
    <section className="p-6">
      <h2 className={`text-xl font-bold mb-6 hover:underline ${theme === 'light' ? 'text-black' : 'text-white'}`}>Blogs</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.title}
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
                <CardTitle>{blog.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{blog.date}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4 text-sm text-muted-foreground">{blog.description}</p>
              </CardContent>
              <div className="flex gap-4 p-4">
                {blog.link && (
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
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
