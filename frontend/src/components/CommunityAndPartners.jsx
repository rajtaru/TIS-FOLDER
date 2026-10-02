import React from "react";
import { Award, Globe, GraduationCap, Users, BookOpen } from "lucide-react";
import { motion } from "motion/react";

const partnersAndCommunity = [
  {
    id: 1,
    title: "Trinity College London",
    category: "Performing Arts Partner",
    description:
      "Global examinations and certifications in music, drama, and communication arts.",
    icon: Award,
    color: "bg-purple-50 text-purple-600",
  },
  {
    id: 2,
    title: "IAYP (Duke of Edinburgh)",
    category: "Youth Achievement",
    description:
      "International Award for Young People focusing on adventure, skills, and service.",
    icon: Globe,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: 3,
    title: "Global University Tie-ups",
    category: "Higher Education",
    description:
      "Strategic partnerships offering seamless pathways to premier international universities.",
    icon: GraduationCap,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    id: 4,
    title: "Multicultural Community",
    category: "Student Body",
    description:
      "A vibrant, inclusive campus welcoming students from diverse cultural and geographic backgrounds.",
    icon: Users,
    color: "bg-amber-50 text-amber-600",
  },
  {
    id: 5,
    title: "Exchange & Global Programs",
    category: "Cross-Cultural Learning",
    description:
      "Collaborative learning initiatives broadening global perspectives and leadership skills.",
    icon: BookOpen,
    color: "bg-cyan-50 text-cyan-600",
  },
];

const CommunityAndPartners = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="py-16 overflow-hidden dark:bg-gray-900 bg-white"
    >
      <div className="container mx-auto px-4 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-3xl dark:text-white sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Community & Partners
          </h1>
          <p className="text-base dark:text-white sm:text-lg text-gray-600 leading-relaxed">
            The school fosters a diverse, multicultural student community while
            offering global exposure through tie-ups with leading international
            universities and prestigious global programs like Trinity College
            London and the International Award for Young People (IAYP).
          </p>
        </div>

        <div className="relative w-full overflow-hidden py-4">
          {/* Gradient Fade Edges for Smooth Look */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-scroll gap-6 hover:[animation-play-state:paused]">
            {[...partnersAndCommunity, ...partnersAndCommunity].map(
              (item, index) => {
                const IconComponent = item.icon;

                return (
                  <div
                    key={`${item.id}-${index}`}
                    className="w-75 sm:w-87.5 bg-white dark:bg-gray-600 dark:text-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between shrink-0"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}
                        >
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 bg-gray-100 dark:bg-gray-600 dark:text-white text-gray-600 rounded-full">
                          {item.category}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <h2 className="text-lg dark:text-white font-bold text-gray-900">
                          {item.title}
                        </h2>
                        <p className="text-sm dark:text-white text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </div>

      {/* Embedded CSS for Infinite Marquee Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </motion.section>
  );
};

export default CommunityAndPartners;
