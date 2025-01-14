import React from 'react'
import { motion } from "framer-motion";

const Motion = ({
  children,
  myVariants,
  initial = "hidden",
  whileInView = "visible",
  viewport = { once: true, amount: 0.5 },
  transition = { duration: 0.8 },
  className
}) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      variants={myVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Motion;

