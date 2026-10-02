import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Navbtn from "../components/Navbtn";
import Hero from "../components/Hero";
import OverView from "../components/OverView";
import OurApproach from "../components/OurApproach";
import Sustainability from "../components/Sustainabulity";
import LearningModel from "../components/LearningModel";
import CommunityAndPartners from "../components/CommunityAndPartners";
import GetInvolved from "../components/GetInvolved";
import FAQ from "../components/FAQ";
import ContactAndLocation from "../components/ContactAndLocation";
import Footer from "../components/Footer";
import { motion } from "motion/react";
import ScrollProgress from "../components/ScrollProgress";

// IDs now strictly match the wrapper IDs below
const navList = [
  {
    name: "Overview",
    id: "Overview",
  },
  {
    name: "Sustainability",
    id: "Sustainability",
  },
  {
    name: "Learning Model",
    id: "LearningModel",
  },
  {
    name: "Impact",
    id: "Impact",
  },
  {
    name: "Get Involved",
    id: "GetInvolved",
  },
  {
    name: "FAQ",
    id: "FAQ",
  },
  {
    name: "Contact",
    id: "Contact",
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState(navList[0].id);

  return (
    <div className="bg-light dark:bg-slate-950 scroll-smooth">
      <ScrollProgress />
      <Navbar />

      <div className="px-20 py-5 text-gray-500">
        Home / Initiatives /{" "}
        <span className="text-black dark:text-white">
          Tula's International School
        </span>
      </div>

      {/* Navigation Sub-bar */}
      <div className="bg-white overflow-x-auto md:px-12 flex items-center gap-3 py-2 px-4 whitespace-nowrap  top-20 z-40 border-b border-gray-100 shadow-xs dark:bg-black">
        {navList.map((item) => {
          return (
            <Navbtn
              key={item.id}
              tab={item}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          );
        })}
      </div>

      {/* Hero Section */}
      <Hero />

      {/* OVER VIEW */}
      <div id="Overview">
        <OverView />
      </div>

      {/* OUR APPROACH */}
      <div id="Impact">
        <OurApproach />
      </div>

      {/* SUSTAINABILITY */}
      <div id="Sustainability">
        <Sustainability />
      </div>

      {/* LEARNING MODEL */}
      <div id="LearningModel">
        <LearningModel />
      </div>

      {/* COMMUNITY AND PARTNERS */}
      <div id="community-partners">
        <CommunityAndPartners />
      </div>

      {/* GET INVOLVED */}
      <div id="GetInvolved">
        <GetInvolved />
      </div>

      {/* FAQ */}
      <div id="FAQ">
        <FAQ />
      </div>

      {/* CONTACT AND LOCATION */}
      <div id="Contact">
        <ContactAndLocation />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
