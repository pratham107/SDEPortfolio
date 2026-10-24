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

// eslint-disable-next-line react/prop-types
const Info = ({ theme }) => {
  const isDark = theme === 'dark'
  const cvButtonClass =
    'h-11 w-36 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-4 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700'
  const contactButtonClass =
    'h-11 w-36 rounded-md bg-gradient-to-r from-emerald-600 to-teal-500 px-4 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:from-emerald-700 hover:to-teal-600'

  return (
    <motion.section
      id="top"
      aria-labelledby="page-title"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`mt-6 grid items-center gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_180px] lg:gap-10 ${
        isDark ? 'text-white' : 'text-slate-900'
      }`}
    >
      <div className="space-y-4 text-center lg:text-left">
        <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>
          Software Engineer
        </p>
        <h1 id="page-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
          Hi, I&apos;m Prathmesh <span className="wave inline-block text-blue-500" aria-hidden="true">👋</span>
          <span className="sr-only">, Full-Stack Developer</span>
        </h1>
        <p className={`mx-auto max-w-xl text-sm leading-6 sm:text-base lg:mx-0 ${isDark ? 'text-zinc-300' : 'text-slate-600'}`}>
          I build impactful products and intuitive web experiences, and enjoy sharing what I learn with the developer community.
        </p>
        <div className="flex justify-center lg:justify-start">
          <TypewriterEffect theme={theme} />
        </div>

        <div className="flex justify-center lg:justify-start">
          <Badges theme={theme} />
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-1 lg:justify-start">
          <Button
            asChild
            className={cvButtonClass}
          >
            <a
              href="https://drive.google.com/file/d/1piyTAJNDYYc9NNMJ-yR9nQVPKcgXBXAl/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my CV <FaAnglesDown className="ml-1" aria-hidden="true" />
            </a>
          </Button>
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                className={contactButtonClass}
              >
                Get in touch <MdOutlineConnectWithoutContact className="ml-1" aria-hidden="true" />
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

                <div className="mt-6 flex flex-col items-center gap-4">
                  <Badge className="bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                    <a href="mailto:pbhopale107@gmail.com" className="flex items-center gap-2">
                      <SiGmail aria-hidden="true" /> pbhopale107@gmail.com
                    </a>
                  </Badge>

                  <Badge className="bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                    <a href="mailto:work.prathm@gmail.com" className="flex items-center gap-2">
                      <SiGmail aria-hidden="true" /> work.prathm@gmail.com
                    </a>
                  </Badge>

                  <Badge className="bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                    <a
                      href="https://linkedin.com/in/prathmesh-bhopale-70b091212"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <BsLinkedin aria-hidden="true" /> LinkedIn
                    </a>
                  </Badge>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      <div className="mx-auto mt-2 w-36 sm:w-40 lg:mt-0">
        <motion.img
          src="https://lh3.googleusercontent.com/a/ACg8ocJwkylBbJpz_SUuWBFqT3XmGAKFdLK9i8nyr4R4y7UcK-tbrxHw=s120-c"
          alt="Illustrated portrait of Prathmesh Bhopale"
          width="256"
          height="256"
          className={`aspect-square w-full rounded-full border-4 object-cover shadow-md ${
            isDark ? 'border-zinc-800' : 'border-white'
          }`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </motion.section>
  )
}

export default Info
