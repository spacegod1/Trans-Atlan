"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/TransAtlanLogo.png";
import { GoPlus } from "react-icons/go";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Prompt } from "next/font/google";

const prompt = Prompt({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white`}>
      <div className=" mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Image src={Logo} alt="Company Logo" className="w-[12rem] h-[6rem]" />

          {/* Desktop Navigation */}
          <ul className="hidden md:flex justify-center items-center gap-[3.5rem] text-[14px] text-black">
            <li className="flex justify-center items-center gap-1 hover:text-yellow-400 cursor-pointer">
              ABOUT
            </li>
            <li className="flex justify-center items-center gap-2 hover:text-yellow-400 cursor-pointer">
              PROJECTS <FaChevronDown size={10} />
            </li>
            <li className="flex justify-center items-center gap-2 hover:text-yellow-400 cursor-pointer">
              SERVICES
              <FaChevronDown size={10} />
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">CAREERS</li>
            <li className="hover:text-yellow-400 cursor-pointer">
              NEWS RELEASE
            </li>
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleIsOpen}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-[60%] h-full bg-[#23486A] transform transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col pt-20 px-6">
          <ul className={`${prompt.className} flex flex-col gap-6 text-white`}>
            <li className="hover:text-yellow-400 cursor-pointer">ABOUT</li>
            <li className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer">
              PROJECTS <FaChevronDown size={10} />
            </li>
            <li className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer">
              SERVICES <FaChevronDown size={10} />
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">CAREERS</li>
            <li className="hover:text-yellow-400 cursor-pointer">
              NEWS RELEASE
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
