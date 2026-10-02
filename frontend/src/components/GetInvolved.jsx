import React from "react";
import { Heart, Users, Handshake, MapPin, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const involvementOptions = [
  {
    id: "donate",
    title: "Donate",
    description:
      "Support our infrastructure development and sustainability initiatives.",
    actionText: "Donate Now",
    icon: Heart,
  },
  {
    id: "volunteer",
    title: "Volunteer",
    description: "Share your skills and time to directly impact student lives.",
    actionText: "Join Us",
    icon: Users,
  },
  {
    id: "partner",
    title: "Partner",
    description:
      "Collaborate with us on educational or sustainability initiatives.",
    actionText: "Partner",
    icon: Handshake,
  },
  {
    id: "visit",
    title: "Visit",
    description: "See our progress firsthand and meet our community.",
    actionText: "Plan Visit",
    icon: MapPin,
  },
];

const GetInvolved = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="container mx-auto px-4 py-16 max-w-6xl space-y-12"
    >
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-3xl dark:text-white sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Get Involved
        </h1>
        <p className="text-base dark:text-white sm:text-lg text-gray-600 leading-relaxed">
          Join us in building a sustainable future through education. There are
          many ways to contribute to the school's mission.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {involvementOptions.map((item) => {
          const IconComponent = item.icon;

          return (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-600 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center `}
                >
                  <IconComponent className="h-6 w-6" />
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl dark:text-white font-bold text-gray-900">
                    {item.title}
                  </h2>
                  <p className="text-sm dark:text-white text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <a
                  href={`#${item.id}`}
                  className="inline-flex dark:text-white items-center gap-2 text-sm font-semibold text-blue-950 hover:text-blue-700 transition-colors group"
                >
                  {item.actionText}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center">
        <button className="bg-black dark:bg-amber-100 dark:text-black hover:bg-gray-100 hover:text-black text-white font-semibold px-6 py-3 rounded-xl transition-colors shrink-0 shadow-sm cursor-pointer">
          Support Now
        </button>
      </div>
    </motion.section>
  );
};

export default GetInvolved;
