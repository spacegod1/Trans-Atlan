"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/TransAtlanLogo.png";
import { GoPlus } from "react-icons/go";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Prompt } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const prompt = Prompt({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const isActivePage = (path) => {
    return pathname === path;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-[#23486A]`}
    >
      <div className=" mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" onClick={handleLinkClick}>
          <Image src={Logo} alt="Company Logo" className="w-[12rem] h-[6rem]" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex justify-center items-center gap-[3.5rem] text-[14px] text-white">
          <Link href="/about">
            <li className={`flex justify-center items-center gap-1 cursor-pointer transition-colors duration-300 ${
              isActivePage('/about') ? 'text-yellow-400' : 'hover:text-yellow-400'
            }`}>
              ABOUT
            </li>
            </Link>
            <Link href="#">
            <li className="flex justify-center items-center gap-2 hover:text-yellow-400 cursor-pointer transition-colors duration-300">
              PROJECTS <FaChevronDown size={10} />
            </li>
            </Link>
            <Link href="/services">
            <li className={`flex justify-center items-center gap-2 cursor-pointer transition-colors duration-300 ${
              isActivePage('/services') ? 'text-yellow-400' : 'hover:text-yellow-400'
            }`}>
              SERVICES
              <FaChevronDown size={10} />
            </li>
            </Link>
            <Link href="#">
            <li className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">CAREERS</li>
            </Link>
            <Link href="#">
            <li className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
              NEWS RELEASE
            </li>
            </Link>
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleIsOpen}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 focus:outline-none transition-colors duration-300"
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
          <Link href="/about" onClick={handleLinkClick}>
            <li className={`cursor-pointer transition-colors duration-300 ${
              isActivePage('/about') ? 'text-yellow-400' : 'hover:text-yellow-400'
            }`}>
              ABOUT
            </li>
            </Link>
            <Link href="#">
            <li className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer transition-colors duration-300">
              PROJECTS <FaChevronDown size={10} />
            </li>
            </Link>
            <Link href="/services" onClick={handleLinkClick}>
            <li className={`flex items-center gap-2 cursor-pointer transition-colors duration-300 ${
              isActivePage('/services') ? 'text-yellow-400' : 'hover:text-yellow-400'
            }`}>
              SERVICES <FaChevronDown size={10} />
            </li>
            </Link>
            <Link href="#">
            <li className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">CAREERS</li>
            </Link>
            <Link href="#">
            <li className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
              NEWS RELEASE
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
