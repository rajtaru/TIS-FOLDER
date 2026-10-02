import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "motion/react";

const faqData = [
  {
    id: 1,
    question:
      "How can students apply for admission to Tulas International School?",
    answer:
      "Admissions can be initiated by filling out our online inquiry or application form. Our admissions team will then guide you through the campus tour, interaction sessions, and the enrollment process tailored to the student's grade level.",
  },
  {
    id: 2,
    question:
      "What makes Tulas International School's approach to education unique?",
    answer:
      "Our holistic education approach is built on five core pillars: Academic Growth, Emotional Intelligence, Creativity, Environmental Stewardship, and Community Engagement, ensuring students develop into well-rounded, conscious global citizens.",
  },
  {
    id: 3,
    question: "How does the school ensure inclusivity for all students?",
    answer:
      "Inclusivity is fundamental to our mission. We provide adaptive learning resources, ensure physical accessibility, offer financial assistance programs, and train our educators in inclusive teaching practices to create an environment where every child thrives.",
  },
  {
    id: 4,
    question: "What sustainability features are being implemented on campus?",
    answer:
      "Our green campus features comprehensive rainwater harvesting systems, solar power arrays for clean energy generation, smart water management recycling, and architectural designs optimized for natural daylight and cross-ventilation.",
  },
  {
    id: 5,
    question: "How can I volunteer or support the school?",
    answer:
      "You can support our mission by participating in our community engagement programs, contributing to infrastructure initiatives, or sharing your professional expertise as a volunteer guest speaker or mentor.",
  },
  {
    id: 6,
    question: "Can I visit the school to see the progress and facilities?",
    answer:
      "Yes, absolutely! We welcome parents, alumni, and prospective partners to schedule a campus visit to experience our facilities, green initiatives, and vibrant learning environment firsthand.",
  },
  {
    id: 7,
    question: "How can I stay updated on the school's progress and events?",
    answer:
      "You can stay updated by following our official social media channels, checking our website news portal, or subscribing to our school newsletter for regular updates on student achievements and campus milestones.",
  },
];

const FAQ = () => {
  const [openIds, setOpenIds] = useState([]);

  const toggleFAQ = (id) => {
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
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="container mx-auto px-4 py-16 dark:bg-gray-900 bg-white space-y-12"
    >
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-3xl dark:text-white sm:text-4xl font-medium text-gray-900 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-base dark:text-white sm:text-lg text-gray-600 leading-relaxed">
          Find answers to common questions about Tulas International School, our
          programs, and how to get involved.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="space-y-4  max-w-4xl ">
          {faqData.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-gray-600 border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg dark:text-white font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span className="p-2 rounded-xl bg-gray-50 text-gray-700 shrink-0">
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t dark:bg-gray-600 border-gray-100 bg-gray-50/50">
                    <p className="text-sm sm:text-base dark:text-white text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQ;
