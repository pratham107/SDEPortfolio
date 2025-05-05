import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaExternalLinkAlt } from "react-icons/fa"
import { motion } from "framer-motion"

const linkedinPosts = [
  {
    title: "How I Built My Portfolio with Next.js",
    description:
      "A detailed guide on building a portfolio website using Next.js, TailwindCSS, and Framer Motion for animations.",
    link: "https://www.linkedin.com/posts/yourname/how-i-built-my-portfolio-with-nextjs-activity-1234567890",
    date: "April 2025",
  },
  {
    title: "Mastering Node.js and Express.js for Backend Development",
    description:
      "In this post, I share my experience and learning about backend development using Node.js and Express.js.",
    link: "https://www.linkedin.com/posts/yourname/mastering-nodejs-and-expressjs-activity-1234567890",
    date: "March 2025",
  },
  {
    title: "Top 5 Web Development Tools Every Developer Should Know",
    description:
      "A collection of the best tools for web developers in 2025, including frameworks, libraries, and other useful resources.",
    link: "https://www.linkedin.com/posts/yourname/top-5-web-development-tools-activity-1234567890",
    date: "February 2025",
  },
]

const LinkedInPost = ({theme}) => {
  return (
    <section className="p-6">
      <h2 className={`text-xl font-bold mb-6 hover:underline ${theme === 'light' ? 'text-black' : 'text-white'}`}>LinkedIn Posts</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {linkedinPosts.map((post, index) => (
          <motion.div
            key={post.title}
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
                <CardTitle>{post.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4 text-sm text-muted-foreground">{post.description}</p>
              </CardContent>
              <div className="flex gap-4 p-4">
                {post.link && (
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
                  >
                    <FaExternalLinkAlt /> View Post
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

export default LinkedInPost
