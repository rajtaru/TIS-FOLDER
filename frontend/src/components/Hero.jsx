import React from "react";
import tulas_school from "../assets/tulas_school.jpg";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 3 }}
      className="container mx-auto px-4 py-12 lg:py-20"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
      >
        {/* Left Content (Text & Buttons) */}
        <div className="flex-1 space-y-6 text-center lg:text-left lg:p-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight dark:text-slate-50">
            Tulas International School
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 dark:text-slate-50">
            Tulas International School was established in 2012 under the aegis
            of Rishabh Educational Trust to impart education through seamless
            opportunities.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-white hover:text-black text-lime-50 font-medium py-3 px-8 rounded-xl shadow-md transition-colors cursor-pointer dark:bg-amber-100 dark:text-black"
            >
              Support the build
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-black hover:text-light text-gray-800 font-medium py-3 px-8 rounded-xl border border-gray-300 shadow-sm transition-colors cursor-pointer"
            >
              Explore the school
            </motion.button>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none">
          <motion.img
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: false, amount: 0.2 }}
            src={tulas_school}
            alt="Tulas International School Campus"
            className="rounded-2xl shadow-2xl w-full h-auto object-cover max-h-122.5"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
