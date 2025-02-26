"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowRightLong,
} from "react-icons/fa6";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Engineer from "../public/petroleum_engineer.jpg";
import { Poppins } from "next/font/google";
import News from "../public/engineer.jpg";
import Logo from "../public/TransAtlanLogo.png";
import React from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "800",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});

export default function Home() {
  const images = useMemo(
    () => ["/oil-rig-off.jpg", "/oil-rig-on.jpg", "/oil-rig-landscape.jpg"],
    []
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const startTimeRef = useRef(null);
  const duration = 10000; // 10 seconds for full progress

  const textContent = useMemo(
    () => [
      {
        title:
          "Leading provider of offshore drilling solutions in 30+ countries.",
        highlight: "30+ countries",
      },
      {
        title: "We have over 80 years of experience in building pipe systems.",
        highlight: "over 80 years",
      },

      {
        title:
          "Committed to sustainable energy practices with zero carbon goals.",
        highlight: "zero carbon",
      },
    ],
    []
  );

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = images[nextIndex];
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [currentImageIndex]);

  useEffect(() => {
    let animationFrame;

    const updateProgress = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const newProgress = Math.min((elapsed / duration) * 100, 100);

      if (newProgress >= 100) {
        setProgress(0);
        startTimeRef.current = null;
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      } else {
        setProgress(newProgress);
        progressRef.current = requestAnimationFrame(updateProgress);
      }
    };

    progressRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (progressRef.current) {
        cancelAnimationFrame(progressRef.current);
      }
    };
  }, [currentImageIndex, images.length, duration]);

  const handleNav = (direction) => {
    // Reset all animation and progress states
    if (progressRef.current) {
      cancelAnimationFrame(progressRef.current);
    }
    setProgress(0);
    startTimeRef.current = null;

    // Update the image index
    if (direction === "next") {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    } else {
      setCurrentImageIndex(
        (prev) => (prev - 1 + images.length) % images.length
      );
    }
  };

  return (
    <section className="relative h-full pt-6 text-white scrollbar-custom overflow-y-auto bg-white">
      {/* Hero Text Section */}
      <div
        className="absolute z-10 px-4 sm:px-10 
        top-60 sm:top-40 lg:top-80 
        left-1/2 sm:left-6 lg:left-6 
        transform -translate-x-1/2 sm:translate-x-0
        w-full sm:w-auto
        text-center sm:text-left"
      >
        <h3
          className={`text-2xl text-black sm:text-[4rem] lg:text-[2.5rem] ${montserrat.className} 
          max-w-[20rem] sm:max-w-none mx-auto sm:mx-0`}
        >
          Transforming Global Energy Resources
        </h3>
        <button
          className="px-4 sm:px-6 py-2 sm:py-3 
          flex justify-center items-center bg-[#D84040] rounded-3xl 
          mt-4 gap-3 sm:gap-5 
          hover:bg-transparent hover:border hover:border-[#D84040] 
          transition-all duration-500 focus:outline-none
          mx-auto sm:mx-0"
        >
          <FaArrowRightLong size={15} /> Our Services
        </button>
      </div>

      {/* Background Image Section */}
      <div
        className="w-full lg:w-[76%] h-[90dvh] 
        absolute right-0 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.28)), url(${images[currentImageIndex]})`,
          backgroundPosition: "center",
        }}
      >
        <div className="relative h-full">
          {/* Carousel Info Box */}
          <div
            className="absolute right-4 bottom-8 
            text-black w-[90%] sm:w-96 p-6 sm:p-8 
            bg-gray-50 shadow-sm rounded-sm
            left-1/2 transform -translate-x-1/2 
            sm:left-auto sm:transform-none"
            style={{
              borderBottom: "1px solid #e5e7eb",
              backgroundImage: `linear-gradient(to right, #dc2626 ${progress}%, #e5e7eb ${progress}%)`,
              backgroundSize: "100% 2px",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h4
              className={`text-base sm:text-xl font-normal mb-6 ${poppins.className}`}
            >
              {textContent[currentImageIndex].title
                .split(textContent[currentImageIndex].highlight)
                .map((part, index, array) =>
                  index === array.length - 1 ? (
                    part
                  ) : (
                    <React.Fragment key={index}>
                      {part}
                      <span className="text-red-600 font-medium">
                        {textContent[currentImageIndex].highlight}
                      </span>
                    </React.Fragment>
                  )
                )}
            </h4>

            <div className="flex gap-6 justify-center sm:justify-start">
              <button
                onClick={() => handleNav("prev")}
                className="hover:text-gray-600 transition-colors p-2"
              >
                <FaChevronLeft size={15} />
              </button>
              <button
                onClick={() => handleNav("next")}
                className="hover:text-gray-600 transition-colors p-2"
              >
                <FaChevronRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Maintain height */}
      <div className="h-[90dvh]"></div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-[18rem] bg-white text-black py-8 sm:py-12 lg:py-[6rem] text-center">
        <h3
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[#D84040] my-4 ${montserrat.className}`}
        >
          Pioneering Oil and Gas Solutions Across Africa
        </h3>
        <p
          className={`mt-4 text-sm sm:text-base ${poppins.className} max-w-4xl mx-auto`}
        >
          TransAtlan Energy specializes in innovative oil and gas solutions
          across the complete energy value chain. With state-of-the-art
          technology and industry-leading expertise, we deliver exceptional
          results in exploration, production, and distribution while maintaining
          the highest standards of safety and environmental responsibility.
        </p>
      </div>

      <section className="flex flex-col lg:flex-row justify-center items-center px-4 sm:px-8 py-12">
        <Image
          src={Engineer}
          alt="Petroleum engineer"
          className="h-[20rem] sm:h-[25rem] lg:h-[30rem]"
        />
        <div className="px-[4rem] mt-8 lg:mt-0">
          <h3 className={`${montserrat.className} text-3xl mb-5 `}>
            Our Operations
          </h3>
          <p className={`${poppins.className}`}>
            TransAtlan Energy delivers comprehensive solutions across three key
            sectors: Exploration & Production (E&P), Engineering Services, and
            Consulting. Our E&P division handles everything from exploration to
            abandonment, while our Engineering team provides end-to-end services
            including feasibility studies, FEED, and detailed engineering
            design. Our Consulting arm offers specialized advisory services,
            project development support, and manpower solutions for the energy
            sector.
          </p>

          <button className="px-4 py-3 flex justify-center items-center bg-[#D84040] rounded-3xl mt-6 gap-5 hover:bg-transparent hover:border hover:border-[#D84040] transition-all duration-500 focus:outline-none mx-auto lg:mx-0">
            <FaArrowRightLong size={15} /> Explore Our Services
          </button>
        </div>
      </section>

      <section className="bg-white text-black items-center py-14">
        <div className="w-full px-4 sm:px-8 lg:px-[14rem] flex justify-between items-center">
          <h3 className={`${montserrat.className} text-xl sm:text-2xl`}>
            Latest News
          </h3>
          <button className="px-3 sm:px-4 py-2 sm:py-3 flex justify-center items-center border border-[#D84040] rounded-3xl gap-2 sm:gap-3 transition-all duration-500 focus:outline-none">
            <FaArrowRightLong size={15} /> More News
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-[4rem] mt-8 sm:mt-[5rem] px-4 sm:px-8">
          <div className="w-full sm:w-[20rem] max-w-[20rem]">
            <Image src={News} alt="News" className="w-full h-auto" />
            <h5
              className={`${montserrat.className} text-sm my-4 text-[#D84040]`}
            >
              {`Small Steps: TransAtlan Energy's Journey to Zero Carbon`}
            </h5>
            <button className="text-sm border-[#D84040] border mt-4 p-3 rounded-full">
              <FaArrowRightLong size={15} />
            </button>
          </div>
          <div className="w-full sm:w-[20rem] max-w-[20rem]">
            <Image src={News} alt="News" className="w-full h-auto" />
            <h5
              className={`${montserrat.className} text-sm my-4 text-[#D84040]`}
            >
              {`Innovating to produce to tomorrow's energy solutions`}
            </h5>
            <button className="text-sm border-[#D84040] border mt-4 p-3 rounded-full">
              <FaArrowRightLong size={15} />
            </button>
          </div>
          <div className="w-full sm:w-[20rem] max-w-[20rem]">
            <Image src={News} alt="News" className="w-full h-auto" />
            <h5
              className={`${montserrat.className} text-sm my-4 text-[#D84040]`}
            >
              LNG, deep offshore: A world-renowned expertise.
            </h5>
            <button className="text-sm border-[#D84040] border mt-4 p-3 rounded-full">
              <FaArrowRightLong size={15} />
            </button>
          </div>
        </div>
      </section>

      <footer
        className={`bg-[#0F172A] text-white py-8 sm:py-16 ${poppins.className}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-2">
          {/* Mobile Layout */}
          <div className="flex flex-col sm:grid sm:grid-cols-[12rem_1fr] sm:gap-20">
            {/* Logo Column */}
            <div className="mb-8 sm:mb-0 text-center sm:text-left">
              <Image
                src={Logo}
                alt="TransAtlan Energy"
                className="w-[12rem] h-[6rem] mx-auto sm:mx-0"
              />
              <h1
                className={`${montserrat.className} text-md text-center text-[#D84040]`}
              >
                TransAtlan <span className="text-green-400">Energy</span>
              </h1>
            </div>

            {/* Other columns wrapper */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6">
              {/* Empty column for spacing - hidden on mobile */}
              <div className="hidden md:block"></div>

              {/* Solutions Column */}
              <div>
                <h4 className="font-semibold text-lg mb-4">Solutions</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Analytics
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Automation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Commerce
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Insights
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h4 className="font-semibold text-lg mb-4">Company</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Press
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal Column */}
              <div className="col-span-2 md:col-span-1">
                <h4 className="font-semibold text-lg mb-4">Legal</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Terms of service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      License
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
