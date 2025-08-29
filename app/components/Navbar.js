"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/aldervault_logo.png";
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
      className={`fixed w-full z-[100] transition-all duration-300 bg-[#F5F1E8]`}
    >
      <div className=" mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" onClick={handleLinkClick}>
          <Image src={Logo} alt="Company Logo" className="w-[10rem] h-[9rem]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center items-center gap-[3.5rem]">
            <ul className="flex justify-center items-center gap-[3.5rem] text-[14px] text-[#6B5B47]">
              <Link href="/about">
                <li                 className={`flex justify-center items-center gap-1 cursor-pointer relative group ${
                  isActivePage('/about') ? 'text-[#D4A574]' : 'hover:text-[#D4A574]'
                }`}>
                  ABOUT
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#D4A574] group-hover:w-full transition-all duration-300"></span>
                </li>
              </Link>
              <Link href="/services">
                <li                 className={`flex justify-center items-center gap-2 cursor-pointer relative group ${
                  isActivePage('/services') ? 'text-[#D4A574]' : 'hover:text-[#D4A574]'
                }`}>
                  SERVICES
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#D4A574] group-hover:w-full transition-all duration-300"></span>
                </li>
              </Link>
            </ul>
            
            {/* Track Cargo Button */}
            <div className="flex items-center">
              <Link href="/track">
                <button className="bg-[#D4A574] text-white px-6 py-2 rounded-md text-[14px] font-medium hover:bg-[#C19B65] transition-colors duration-300 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                  TRACK CARGO
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleIsOpen}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#6B5B47] hover:text-[#D4A574] focus:outline-none transition-colors duration-300"
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
        } fixed top-0 left-0 w-[60%] h-full bg-[#F5F1E8] transform transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col pt-20 px-6">
          <ul className={`${prompt.className} flex flex-col gap-6 text-[#6B5B47]`}>
            <Link href="/about" onClick={handleLinkClick}>
              <li className={`cursor-pointer transition-colors duration-300 ${
                isActivePage('/about') ? 'text-[#D4A574]' : 'hover:text-[#D4A574]'
              }`}>
                ABOUT
              </li>
            </Link>
            <Link href="/services" onClick={handleLinkClick}>
              <li className={`cursor-pointer transition-colors duration-300 ${
                isActivePage('/services') ? 'text-[#D4A574]' : 'hover:text-[#D4A574]'
              }`}>
                SERVICES
              </li>
            </Link>
          </ul>
          
          {/* Mobile Track Cargo Button */}
          <div className="mt-8">
            <Link href="/track" onClick={handleLinkClick}>
              <button className="w-full bg-[#D4A574] text-white px-6 py-3 rounded-md text-[16px] font-medium hover:bg-[#C19B65] transition-colors duration-300 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
                TRACK CARGO
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
