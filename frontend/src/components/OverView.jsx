import React from "react";
import Features from "./Features";
import { motion } from "motion/react";

const OverView = () => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="container mx-auto px-4 py-12 lg:py-20 bg-white dark:bg-gray-900"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col gap-5 justify-center items-center md:px-10"
      >
        <h1 className="text-3xl sm:text-4xl font-medium dark:text-white text-gray-900 tracking-tight leading-tight">
          Overview
        </h1>
        <p className="text-base dark:text-white sm:text-lg text-gray-600 leading-relaxed max-w-5xl mx-auto lg:mx-0 md:text-center text-left">
          Tula's International School is a premium co-educational, fully
          residential CBSE school for Grades 4 through 12, situated on a serene
          22-acre campus along Chakrata Road in Dehradun. Established in 2012
          and often described as a "modern Gurukul," it blends traditional
          Indian values with top-tier infrastructure, featuring a highly
          personalized learning experience driven by an intimate 6:1
          student-teacher ratio.
        </p>
        <p className="text-base dark:text-white sm:text-lg text-gray-600 leading-relaxed max-w-5xl mx-auto lg:mx-0 md:text-center text-left">
          Alongside interactive digital classrooms and rigorous academics, the
          school provides professional training in over 16 sports—including
          horse riding and swimming—along with diverse arts, music, and hobby
          clubs. With an estimated annual fee ranging between ₹9.45 Lakh and
          ₹10.85 Lakh, the campus provides a safe, nurturing home-away-from-home
          environment with 24/7 medical care and dedicated resident
          housemasters.
        </p>
        <p className="text-base dark:text-white sm:text-lg text-gray-600 leading-relaxed max-w-5xl mx-auto lg:mx-0 md:text-center text-left">
          If you would like to look closer, let me know if you want the exact
          fee breakdown for a specific class or want to compare it with other
          top boarding schools in Dehradun. Beyond the classroom, the school
          emphasizes leadership and global readiness through structured
          personality development programs and international cultural exchanges.
          This ensures that students graduate not just with strong academic
          marks, but as confident, independent individuals ready for university
          life.
        </p>
      </motion.div>
      <div>
        <Features />
      </div>
    </motion.div>
  );
};

export default OverView;
