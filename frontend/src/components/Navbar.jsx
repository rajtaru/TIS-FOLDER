import React from "react";
import logo from "../assets/tulas_logo.png";
import menu from "../assets/menu_icon.svg";
import close_icon from "../assets/close_icon.svg";
import { useState } from "react";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32
     py-4 text-gray-600 border-b border-bordercolor transition-all sticky top-0 right-0 left-0 z-50 bg-white dark:bg-black dark:text-white"
    >
      <img className="h-10 w-10" src={logo} alt="logo" />
      <div className="hidden gap-5 items-center sm:flex ">
        <ul className="flex gap-6">
          <li>About</li>
          <li>Initiatives</li>
          <li>Impact</li>
          <li>Contact</li>
        </ul>
        <ThemeToggleBtn />
      </div>

      <button
        className="sm:hidden cursor-pointer"
        aria-label="menu"
        onClick={() => setOpen(!open)}
      >
        <img src={open ? close_icon : menu} alt="menu" />
      </button>

      {/* Mobile Menu */}
      <div
        className={`${open ? "flex" : "hidden"} absolute top-15 left-0 w-full dark:bg-gray-900 bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <a href="#" className="block">
          About
        </a>
        <a href="#" className="block">
          Initiatives
        </a>
        <a href="#" className="block">
          Impact
        </a>
        <a href="#" className="block">
          Contact
        </a>
        <ThemeToggleBtn />
      </div>
    </nav>
  );
};

export default Navbar;
