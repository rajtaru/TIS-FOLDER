import React from "react";

const Navbtn = (props) => {
  const { tab, activeTab, setActiveTab } = props;

  const handler = () => {
    setActiveTab(tab.id);
  };

  const isActive = activeTab === tab.id;

  return (
    <a
      href={`#${tab.id}`}
      className={`py-2 px-6 rounded-xl cursor-pointer transition-colors dark:bg-black dark:text-white ${
        isActive
          ? "bg-blue-950 text-lime-50 border border-blue-950"
          : "bg-white text-gray-700 border border-white hover:border-gray-300 hover:bg-gray-100 hover:text-black"
      }`}
      onClick={handler}
    >
      {tab.name}
    </a>
  );
};

export default Navbtn;
