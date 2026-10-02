import React from "react";
import { motion } from "motion/react";

// Destructure 'icon' and rename it with an uppercase 'Icon' so JSX recognizes it as a component
const Card = ({ title, description, icon: Icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white dark:bg-gray-600 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 w-full flex flex-col justify-center items-center cursor-pointer"
    >
      {/* Icon Container */}
      <div className="w-12 h-12 bg-blue-50 text-blue-950 rounded-xl flex items-center justify-center mb-4">
        {Icon && <Icon className="w-6 h-6" />}
      </div>

      {/* Heading */}
      <h1 className="text-lg dark:text-white font-medium  text-gray-900 mb-2">
        {title}
      </h1>

      {/* Paragraph */}
      <p className=" dark:text-white text-gray-600 text-sm text-center leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default Card;
