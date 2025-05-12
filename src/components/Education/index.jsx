import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const educationData = [
  {
    year: "2024 - Passout 👨‍🎓",
    Degree: "Bachelor of Engineering",
    Branch:"Computer Science and Technology",
    institution: "College of Engineering and Technology, Akola",
    description: "Focused on software engineering, data structures, and full-stack web development.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Education = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6 ">Education</h2>
      <div className="relative border-l-2 border-gray-300 ml-4">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="mb-10 ml-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={fadeInUp}
          >
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 top-1.5" />
            <Card className="shadow-md">
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">{edu.year}</p>
                <h3 className="text-lg font-semibold">{edu.title}</h3>
                <h3 className="text-lg font-semibold">{edu.Degree}</h3>
                <p className="text-sm text-gray-600">{edu.Branch}</p>
                <p className="text-sm text-gray-600">{edu.institution}</p>
                <p className="mt-2 text-sm text-gray-700">{edu.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
