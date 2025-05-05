import { motion, useScroll } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "left",
      }}
      className="fixed top-0 left-0 right-0 h-1 bg-red-500 z-50"
    />
  );
};

export default ScrollIndicator;
