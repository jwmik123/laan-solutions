"use client";

import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <>
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}
