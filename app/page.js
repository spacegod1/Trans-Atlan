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
import React from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
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
    <section className="relative h-full pt-6 text-white scrollbar-custom overflow-y-auto">
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
          className={`text-2xl sm:text-[4rem] lg:text-[2.5rem] ${montserrat.className} 
          max-w-[20rem] sm:max-w-none mx-auto sm:mx-0`}
        >
          Transforming Global Energy Resources
        </h3>
        <button 
          onClick={() => router.push("/services")}
          className={`${poppins.className} px-4 sm:px-6 py-2 sm:py-3 
          flex justify-center items-center bg-[#D84040] rounded-3xl 
          mt-4 gap-3 sm:gap-5 
          hover:bg-transparent hover:border hover:border-[#D84040] 
          transition-all duration-500 focus:outline-none
          mx-auto sm:mx-0`}
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
          <p className={`${poppins.className} text-center md:text-left`}>
            TransAtlan Energy delivers comprehensive solutions across three key
            sectors: Exploration & Production (E&P), Engineering Services, and
            Consulting. Our E&P division handles everything from exploration to
            abandonment, while our Engineering team provides end-to-end services
            including feasibility studies, FEED, and detailed engineering
            design. Our Consulting arm offers specialized advisory services,
            project development support, and manpower solutions for the energy
            sector.
          </p>

          <button 
            onClick={() => router.push("/services")}
           className="px-4 py-3 flex justify-center items-center bg-[#D84040] rounded-3xl mt-6 gap-5 hover:bg-transparent hover:border hover:border-[#D84040] transition-all duration-500 focus:outline-none mx-auto lg:mx-0"
          >
            <FaArrowRightLong size={15} /> Explore Our Services
          </button>
        </div>
      </section>

      <section className="bg-white text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h3 className={`${montserrat.className} text-2xl sm:text-3xl lg:text-4xl text-black mb-4`}>
              Latest News
            </h3>
            {/* <div className="w-20 h-1 bg-[#D84040] mx-auto"></div> */}
          </div>

          {/* Coming Soon Content */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg p-12 lg:p-20 max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Content */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <h4 className={`${montserrat.className} text-2xl lg:text-3xl text-[#23486A] mb-6`}>
                  News Updates Coming Soon
                </h4>
                <p className={`${poppins.className} text-gray-600 mb-8 lg:pr-8`}>
                  Stay tuned for the latest updates and news about TransAtlan {`Energy's`} projects, 
                  innovations, and contributions to the energy sector in Africa.
                </p>
              </div>

              {/* Right Content - Newsletter Form */}
              <div className="lg:w-1/2 w-full">
                <form className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex flex-col gap-4">
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className={`${poppins.className} w-full px-6 py-4 border border-gray-200 rounded-full focus:outline-none focus:border-[#D84040] focus:ring-1 focus:ring-[#D84040] bg-gray-50`}
                    />
                    <button 
                      type="submit"
                      className="w-full px-6 py-4 bg-[#D84040] text-white rounded-full hover:bg-[#23486A] transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                    >
                      Notify Me
                    </button>
                  </div>
                  <p className={`${poppins.className} text-xs text-gray-500 text-center mt-4`}>
                    {`We'll`} notify you when we have news to share. No spam, we promise!
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
