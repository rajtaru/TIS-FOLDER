import React from "react";
import Card from "./Card";
import { Users, Zap, CloudRain, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";

const Features = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8"
    >
      <Card
        title="800+"
        description="Students served in our inclusive learning environment."
        icon={Users}
      />

      <Card
        title="Solar Energy"
        description="Clean energy installation in progress."
        icon={Zap}
      />

      <Card
        title="Rain Water Harvesting"
        description="Harvesting system for water conservation."
        icon={CloudRain}
      />

      <Card
        title="Inclusive Environment"
        description="Learning spaces designed for all students."
        icon={HeartHandshake}
      />
    </motion.div>
  );
};

export default Features;
