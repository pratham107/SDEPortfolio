import { motion } from 'framer-motion'
import TypewriterEffect from "./TypeWriter"
import { Badge } from './ui/badge'
import Badges from './Badges'
import { Button } from './ui/button'
import { FaAnglesDown } from "react-icons/fa6";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

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
          <Drawer className="bg-black">
            <DrawerTrigger asChild>
              <Button variant="outline" className="border rounded-2xl border-blue-400">
                Hire me <MdOutlineConnectWithoutContact />
              </Button>
            </DrawerTrigger>

            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Contact Me</DrawerTitle>
                  <DrawerDescription>Let’s build something great together.</DrawerDescription>
                </DrawerHeader>

                {/* You can replace this with your contact form or info */}
                <div className="p-4">
                  <p className="text-center text-gray-600">
                    Email: pbhopale107@gmail.com / work.prathm@gmail.com <br />
                    LinkedIn: linkedin.com/in/prathamesh
                  </p>
                </div>

                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
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

