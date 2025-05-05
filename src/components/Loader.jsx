import { motion } from 'framer-motion'

const codeLines = [
  'const loading = true;',
  'while(loading) {',
  '  show("Loading...");',
  '}',
]

const lineVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.4 },
  }),
}

const CodingLoader = () => {
  return (
    <div className="h-screen w-screen bg-black text-green-400 font-mono text-sm sm:text-base flex items-center justify-center">
      <div className="space-y-1 text-left">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={lineVariants}
          >
            {line}
          </motion.div>
        ))}
        {/* Blinking cursor */}
        <motion.span
          className="inline-block w-1 h-4 bg-green-400 ml-1"
          animate={{ opacity: [0, 1] }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  )
}

export default CodingLoader
