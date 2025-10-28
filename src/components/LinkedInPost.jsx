import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { FaExternalLinkAlt } from "react-icons/fa"
import { Badge } from "./ui/badge"

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

const scrollVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 60,
        ease: "linear",
      },
    },
  },
}

const LinkedInPost = ({ theme }) => {
  return (
    <section className="p-8 overflow-hidden">
      {/* Heading */}
      <h2
        className={`text-xl font-bold mb-6 hover:underline ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        Tech Stack
      </h2>

      {/* Auto-scroll container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 w-max"
          variants={scrollVariants}
          animate="animate"
        >
          {linkedinPosts.concat(linkedinPosts).map((post, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card
                className={`flex flex-col justify-between h-[360px] w-[320px] rounded-2xl border border-transparent shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  theme === "light"
                    ? "bg-white text-gray-900 hover:border-blue-300"
                    : "bg-gradient-to-b from-neutral-900 to-neutral-800 text-gray-100 hover:border-blue-500/30"
                }`}
              >
                <CardHeader className="p-5">
                  <div className="flex justify-between items-start gap-3">
                    <CardTitle className="text-lg font-semibold leading-tight hover:text-blue-500 transition-colors duration-300">
                      {post.title}
                    </CardTitle>
                    <Badge
                      className={`text-xs px-2 py-1 rounded-md ${
                        theme === "light"
                          ? "bg-gray-100 text-gray-700"
                          : "bg-gray-700 text-gray-300"
                      }`}
                    >
                      {post.date}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="px-5 pb-5 flex-1">
                  <p
                    className={`text-sm leading-relaxed line-clamp-5 ${
                      theme === "light" ? "text-gray-700" : "text-gray-400"
                    }`}
                  >
                    {post.description}
                  </p>
                </CardContent>

                <div
                  className={`flex justify-center items-center gap-2 text-sm font-medium py-3 border-t ${
                    theme === "light"
                      ? "border-gray-200 text-blue-600 hover:text-blue-800"
                      : "border-gray-700 text-blue-400 hover:text-blue-300"
                  } transition-colors duration-300`}
                >
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FaExternalLinkAlt size={14} /> View Post
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default LinkedInPost
