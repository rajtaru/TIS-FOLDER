import React, { useState } from "react";
import {
  Sun,
  CloudRain,
  Wind,
  Droplets,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion } from "motion/react";

const sustainabilityItems = [
  {
    id: "solar",
    title: "Solar Panels",
    description: "Clean energy generation for the entire school campus.",
    details:
      "Our solar panel installation provides renewable energy to power classrooms, lighting, and electrical equipment, significantly reducing our carbon footprint.",
    icon: Sun,
    color: "bg-amber-50 text-amber-600",
  },
  {
    id: "rainwater",
    title: "Rainwater Harvesting",
    description:
      "Advanced collection systems to preserve and recharge groundwater.",
    details:
      "Captures rooftop rainwater, filtering and channeling it into underground storage tanks to support green landscaping and daily conservation.",
    icon: CloudRain,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: "ventilation",
    title: "Daylight & Ventilation",
    description: "Architectural design maximizing natural light and airflow.",
    details:
      "Classrooms are strategically oriented to harness natural sunlight and cross-ventilation, reducing the need for artificial lighting and air conditioning.",
    icon: Wind,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "water-mgmt",
    title: "Water Management",
    description: "Smart recycling and efficient consumption across facilities.",
    details:
      "Greywater recycling systems and automated efficient fixtures ensure optimal water usage and zero wastage across hostels, cafeterias, and labs.",
    icon: Droplets,
    color: "bg-cyan-50 text-cyan-600",
  },
];

const Sustainability = () => {
  const [openIds, setOpenIds] = useState([]);

  const toggleCard = (id) => {
    setOpenIds((prevOpenIds) => {
      if (prevOpenIds.includes(id)) {
        return prevOpenIds.filter((itemKey) => itemKey !== id);
      } else {
        return [...prevOpenIds, id];
      }
    });
  };

  return (
    <motion.section
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
      className="bg-white dark:bg-gray-900 container mx-auto px-4 py-16  space-y-12"
    >
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-3xl dark:text-white sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Sustainability in Action
        </h1>
        <p className="text-base dark:text-white sm:text-lg text-gray-600 leading-relaxed">
          The school’s award-winning green campus features comprehensive water
          harvesting, solar power arrays, and student-led conservation programs
          that turn environmental sustainability into a daily way of life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sustainabilityItems.map((item) => {
          const IconComponent = item.icon;
          const isOpen = openIds.includes(item.id);

          return (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.2 }}
              key={item.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 flex flex-col justify-between dark:bg-gray-600"
            >
              <div className="p-6 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-lg dark:text-white font-bold text-gray-900">
                      {item.title}
                    </h2>
                    <p className="text-sm dark:text-white text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => toggleCard(item.id)}
                  className="p-2 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors cursor-pointer shrink-0 mt-1"
                  aria-label="Toggle details"
                >
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
              </div>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 border-t dark:bg-gray-600 border-gray-100 space-y-1.5 bg-gray-50/50">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 pt-2  dark:text-white">
                    How it works
                  </h3>
                  <p className="text-sm dark:text-white text-gray-600 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Sustainability;
