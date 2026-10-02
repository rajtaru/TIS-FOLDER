import React from "react";
import { GraduationCap, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl space-y-12">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Mission (Takes up 2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Tula's International School
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Nurturing well-rounded, conscious individuals through holistic
              education, academic excellence, and sustainable campus
              initiatives.
            </p>
          </div>

          {/* Quick Links: Connect / Get Involved */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Get Involved
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#volunteer"
                  className="hover:text-white transition-colors"
                >
                  Volunteer
                </a>
              </li>
              <li>
                <a
                  href="#partner"
                  className="hover:text-white transition-colors"
                >
                  Partner with Us
                </a>
              </li>
              <li>
                <a
                  href="#donate"
                  className="hover:text-white transition-colors"
                >
                  Support the Build
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Info / Location */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Campus
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-500 shrink-0 mt-1" />
                <span>Dehradun, Uttarakhand, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500 shrink-0" />
                <a
                  href="mailto:info@tis.edu.in"
                  className="hover:text-white transition-colors"
                >
                  info@tis.edu.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500 shrink-0" />
                <span>+91-9837983791</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Tula's International School. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="hover:text-gray-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
