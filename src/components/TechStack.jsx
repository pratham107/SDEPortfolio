import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaJava,
} from "react-icons/fa"
import {
  SiNextdotjs, SiExpress, SiMysql, SiPostgresql, SiTailwindcss, SiJsonwebtokens,
  SiTypescript,
} from "react-icons/si"
import { TbApi } from "react-icons/tb"
import { motion } from "framer-motion"

const techStackGroups = [
  {
    title: "Frontend",
    stacks: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />, level: 95 },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 93 },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, level: 80 },
      { name: "React.js", icon: <FaReact className="text-cyan-400" />, level: 92 },
      { name: "Next.js", icon: <SiNextdotjs className="text-black" />, level: 85 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, level: 90 },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-700" />, level: 80 },
    ],
  },
  {
    title: "Backend",
    stacks: [
      { name: "Java", icon: <FaJava className="text-red-600" />, level: 85 },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: 88 },
      { name: "Express.js", icon: <SiExpress className="text-gray-700" />, level: 86 },
    ],
  },
  {
    title: "Database",
    stacks: [
      { name: "MySQL", icon: <SiMysql className="text-blue-700" />, level: 87 },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-900" />, level: 80 },
    ],
  },
  {
    title: "Other Tools",
    stacks: [
      { name: "REST API", icon: <TbApi className="text-indigo-500" />, level: 90 },
      { name: "JWT", icon: <SiJsonwebtokens className="text-pink-500" />, level: 85 },
    ],
  },
  {
    title: "DSA (Java)",
    stacks: [
      { name: "Data Structures", icon: <FaJava className="text-red-600" />, level: 80 },
      { name: "Algorithms", icon: <FaJava className="text-red-600" />, level: 78 },
    ],
  },
]

//eslint-disable-next-line
const TechStack = ({theme}) => {
  return (
    <section className="p-6">
      <h2
  className={`text-xl font-bold mb-6 hover:underline ${
    theme === 'light' ? 'text-black' : 'text-white'
  }`}
>Tech Stack</h2>

      <Accordion type="multiple" className="w-full space-y-4">
        {techStackGroups.map((group) => (
          <AccordionItem key={group.title} value={group.title}>
           <AccordionTrigger
            className={`text-lg font-semibold ${
                theme === 'light' ? 'text-black' : 'text-white'
            }`}
            >
              {group.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {group.stacks.map((stack) => (
                  <div
                    key={stack.name}
                    className={`p-4 rounded-xl shadow hover:shadow-md transition ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white border border-white'}`}

                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-2xl">{stack.icon}</div>
                        <span className="font-medium">{stack.name}</span>
                      </div>
                      <span className="text-sm font-semibold">{stack.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded">
                      <motion.div
                        className="h-2 bg-green-500 rounded"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stack.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export default TechStack
