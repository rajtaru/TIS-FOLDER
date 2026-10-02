import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

const ContactAndLocation = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="container mx-auto px-4 py-16 max-w-6xl space-y-12"
    >
      <div className="space-y-3">
        <h1 className="text-3xl dark:text-white sm:text-4xl font-medium text-gray-900 tracking-tight">
          Contact & Location
        </h1>
        <p className="text-base dark:text-white sm:text-lg text-gray-600 leading-relaxed">
          Ready to learn more or get involved? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="text-gray-700 mt-1">
              <Mail className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h2 className="text-sm dark:text-white font-medium uppercase tracking-wider text-gray-400">
                Email Us
              </h2>
              <a
                href="mailto:info@tis.edu.in"
                className="text-base dark:text-white text-gray-900 hover:text-blue-700 transition-colors"
              >
                info@tis.edu.in
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="text-gray-700  mt-1">
              <Phone className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h2 className="text-sm dark:text-white font-medium uppercase tracking-wider text-gray-400">
                Call Us
              </h2>
              <p className="text-base dark:text-white  text-gray-900">
                +91-9837983791
              </p>
              <p className="text-sm dark:text-white text-gray-600">
                Landline: 0135-2699444 / 666
              </p>
            </div>
          </div>

          {/* Location details */}
          <div className="flex items-start gap-4">
            <div className="text-gray-700 mt-1">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h2 className="text-sm dark:text-white font-medium uppercase tracking-wider text-gray-400">
                School Location
              </h2>
              <p className="text-base dark:text-white text-gray-900">
                Tula's International School
              </p>
              <p className="text-sm dark:text-white text-gray-600 leading-relaxed">
                Village Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun -
                248011, Uttarakhand, India
              </p>
            </div>
          </div>
        </div>

        {/* Right side location feature card */}
        <div className="bg-white dark:bg-gray-600 border border-gray-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="text-xl dark:text-white font-medium text-gray-900">
              Plan a Visit to TIS
            </h2>
            <p className="text-sm dark:text-white text-gray-600 leading-relaxed">
              Located in the scenic foothills of Dehradun, our green campus
              welcomes prospective students, parents, and partners to experience
              our world-class facilities firsthand.
            </p>
          </div>

          <div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Tula's+International+School+Dehradun"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-black hover:bg-white hover:text-black text-white font-semibold py-3.5 px-6 rounded-2xl transition-all text-sm shadow-sm cursor-pointer group"
            >
              Open in Google Maps
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactAndLocation;
