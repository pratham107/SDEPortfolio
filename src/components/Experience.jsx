'use client'

import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Experience = ({theme}) => {
  return (
    <motion.section
      className="p-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
    <h4 className={`text-xl font-bold font-sans mb-4 hover:underline ${theme === 'light' ? 'text-black' : 'text-white'}`}>
        Experience
      </h4>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Card className={`shadow-md border rounded-2xl ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
          <CardHeader>
            <CardTitle className="text-lg">MVD-Tech</CardTitle>
            <CardDescription>
            <Badge
                variant="secondary"
                className={`${
                    theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'
                }`}
                >
                React.js Developer
              </Badge>
            </CardDescription>
          </CardHeader>

          <CardContent
            className={`text-sm ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}
            >
            <p>
              <strong>Roles & Responsibilities:</strong> <br />
              - Developing and maintaining responsive user interfaces. <br />
              - Collaborating with backend teams to integrate APIs. <br />
              - Ensuring cross-browser compatibility and performance optimization.
            </p>
          </CardContent>

          <CardFooter
            className={`text-xs ${
                theme === 'light' ? 'text-gray-500' : 'text-gray-400'
            }`}
            >
            June 2024 – Present
          </CardFooter>
        </Card>
      </motion.div>
    </motion.section>
  )
}

export default Experience
