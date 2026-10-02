import React from "react";
import { Compass, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const OurApproach = () => {
  return (
    <motion.section
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container mx-auto px-4 py-16 max-w-4xl text-center space-y-6"
    >
      <h1 className="text-3xl dark:text-white sm:text-4xl font-extrabold text-gray-900 tracking-tight">
        Our Approach
      </h1>

      <p className="text-base dark:text-white sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
        At Tulas, we believe in bringing out the best in every student—whether
        it’s academics, music, art, or drama. With the right support and
        inspiration, creativity finds its way. For us, school isn’t just about
        lessons, it’s about endless opportunities waiting to be explored.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-xl border border-gray-300 shadow-sm transition-colors cursor-pointer w-full sm:w-auto"
        >
          <Compass className="w-5 h-5" />
          Explore More
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-xl border border-gray-300 shadow-sm transition-colors cursor-pointer w-full sm:w-auto"
        >
          See Learning Model
          <ArrowRight className="w-5 h-5 text-gray-500" />
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default OurApproach;
