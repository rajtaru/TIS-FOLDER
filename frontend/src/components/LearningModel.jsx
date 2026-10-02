import React from "react";
import {
  TrendingUp,
  HeartHandshake,
  Lightbulb,
  Leaf,
  Users,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

const pillars = [
  {
    id: 1,
    title: "Academic Growth",
    description:
      "Excellence in core subjects with innovative teaching methods.",
    icon: TrendingUp,
  },
  {
    id: 2,
    title: "Emotional Intelligence",
    description: "Developing empathy, self-awareness, and social skills.",
    icon: HeartHandshake,
  },
  {
    id: 3,
    title: "Creativity",
    description: "Fostering artistic expression and innovative thinking.",
    icon: Lightbulb,
  },
  {
    id: 4,
    title: "Environmental Stewardship",
    description: "Building awareness and responsibility for our planet.",
    icon: Leaf,
  },
  {
    id: 5,
    title: "Community Engagement",
    description: "Active participation in local and global communities.",
    icon: Users,
  },
];

const LearningModel = () => {
  return (
    <motion.section
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeIn" }}
      className="container mx-auto px-4 py-16 max-w-6xl space-y-12"
    >
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-3xl dark:text-white sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Learning Model Pillars
        </h1>
        <p className="text-base dark:text-white sm:text-lg text-gray-600 leading-relaxed">
          Our holistic education approach is built on foundational pillars that
          nurture well-rounded, conscious individuals ready to make a positive
          impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar) => {
          const IconComponent = pillar.icon;

          return (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              key={pillar.id}
              className="bg-white dark:bg-gray-600  border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <IconComponent className="h-6 w-6 text-gray-800" />
                    <h2 className="text-xl dark:text-white font-bold text-gray-900">
                      {pillar.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm dark:text-white text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div>
                <a
                  href="#examples"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-950 hover:text-gray-600 dark:text-white transition-colors group"
                >
                  See examples
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default LearningModel;
