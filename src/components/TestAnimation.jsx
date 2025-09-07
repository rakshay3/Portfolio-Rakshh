import React from "react";
import { motion } from "framer-motion";

export default function TestAnimation() {
  return (
    <div className="flex justify-center items-center h-40">
      <motion.button
        className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        Bounce Me 🚀
      </motion.button>
    </div>
  );
}
