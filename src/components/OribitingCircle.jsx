// import { motion } from "framer-motion";
// import { FaReact, FaJs, FaCss3Alt, FaNodeJs, FaGitAlt, FaDatabase } from "react-icons/fa"; // React Icons

// // Sample skills data (you should replace this with your actual data)
// const skills = [
//   { name: "React", icon: <FaReact />, color: "blue" },
//   { name: "JavaScript", icon: <FaJs />, color: "yellow" },
//   { name: "CSS", icon: <FaCss3Alt />, color: "green" },
//   { name: "Node.js", icon: <FaNodeJs />, color: "red" },
//   { name: "Git", icon: <FaGitAlt />, color: "purple" },
//   { name: "MongoDB", icon: <FaDatabase />, color: "orange" },
// ];

// function SkillIcon({ icon, color }) {
//   return (
//     <div
//       className={`w-12 h-12 bg-${color}-500 text-white flex items-center justify-center rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:scale-125`}
//     >
//       {icon}
//     </div>
//   );
// }

// export default function OrbitingSkills() {
//   return (
//     <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//       {/* Orbiting Path */}
//       <motion.div
//         className="absolute w-[60vh] h-[60vh] border-2 border-white/20 rounded-full flex items-center justify-center"
//         animate={{
//           rotate: [0, 360],
//           transition: {
//             duration: 30,
//             repeat: Infinity,
//             ease: "linear",
//           },
//         }}
//       >
//         <div className="relative w-full h-full flex items-center justify-center">
//           {/* Orbiting Skill Items */}
//           {skills.map((skill, index) => {
//             const angle = (index / skills.length) * 360; // Determine the angle for each item
//             const xPosition = Math.cos((angle * Math.PI) / 180) * 120; // Adjust distance from center
//             const yPosition = Math.sin((angle * Math.PI) / 180) * 120; // Adjust distance from center

//             return (
//               <motion.div
//                 key={index}
//                 className="absolute flex items-center justify-center w-20 h-20 bg-white/80 backdrop-blur-xl rounded-full"
//                 style={{
//                   transform: `translate(${xPosition}px, ${yPosition}px)`,
//                 }}
//                 whileHover={{ scale: 1.1, rotate: 15 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <SkillIcon icon={skill.icon} color={skill.color} />
//                 {/* Skill Name */}
//                 <div className="absolute bottom-0 translate-y-1/2 text-white font-bold text-lg">{skill.name}</div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </motion.div>
//     </div>
//   );
// }
