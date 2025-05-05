import { motion } from 'framer-motion'
import TypewriterEffect from "./TypeWriter"
import { Badge } from './ui/badge'
import Badges from './Badges'
import { Button } from './ui/button'
import { FaAnglesDown } from "react-icons/fa6";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { BsLinkedin } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'

const Info = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mt-6 flex flex-col lg:flex-row items-center lg:justify-between gap-10 px-6"
    >
      {/* Text Section */}
      <div className="text-center lg:text-left space-y-4 max-w-xl">
        <h1 className="text-3xl font-bold text-gray-800">
          Hi, I'm Prathmesh <span className="wave text-blue-500">👋</span>
        </h1>
        <h3 className="text-md text-gray-600">
          Software Engineer turned Entrepreneur. <br />
          I love building things and helping people. <br />
          Very active on Twitter.
        </h3>
        <TypewriterEffect />

        <div className="mt-3">
          <Badges />
        </div>
        <div className="mt-3 flex gap-2">
          <Button variant="outline" className="border rounded-2xl border-blue-400">
            Download CV <FaAnglesDown />
          </Button>
          <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="border rounded-2xl border-blue-400">
          Hire me <MdOutlineConnectWithoutContact className="ml-2" />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="bg-white dark:bg-zinc-900">
        <div className="mx-auto w-full max-w-md px-6 py-4">
          <DrawerHeader>
            <DrawerTitle className="text-xl font-bold text-gray-800 dark:text-white">Contact Me</DrawerTitle>
            <DrawerDescription className="text-sm text-gray-600 dark:text-gray-300">
              Let’s build something great together. Feel free to connect 👇
            </DrawerDescription>
          </DrawerHeader>

          <div className="mt-6 flex flex-col gap-4 items-center">
            <Badge className="px-4 py-2 bg-red-500 text-white hover:bg-red-600">
              <a href="mailto:pbhopale107@gmail.com" className="flex items-center gap-2">
                <SiGmail /> pbhopale107@gmail.com
              </a>
            </Badge>

            <Badge className="px-4 py-2 bg-red-500 text-white hover:bg-red-600">
              <a href="mailto:work.prathm@gmail.com" className="flex items-center gap-2">
                <SiGmail /> work.prathm@gmail.com
              </a>
            </Badge>

            <Badge className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700">
              <a
                href="https://linkedin.com/in/prathmesh-bhopale-70b091212"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <BsLinkedin /> LinkedIn
              </a>
            </Badge>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-6 lg:mt-0">
        <motion.img
          src="https://i.ibb.co/v6pnmvH3/Chat-GPT-Image-Apr-24-2025-10-28-24-PM.png"
          alt="Profile Pic"
          className="rounded-full w-32 h-32 object-cover shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        />
      </div>
    </motion.section>
  )
}

export default Info

