"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowRightLong,
} from "react-icons/fa6";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Air from "../public/air-freight.jpg";
import { Poppins } from "next/font/google";
import News from "../public/engineer.jpg";
import React from "react";
import { useRouter } from "next/navigation";
import AnimatedText from "./components/AnimatedText";

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
    () => ["/warehouse_packages2.jpg", "/sea_freight.jpg", "/warehouse.jpg"],
    []
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const progressRef = useRef(0);
  const startTimeRef = useRef(null);
  const duration = 10000; // 10 seconds for full progress

  const textContent = useMemo(
    () => [
      {
        title:
          "Leading provider of secure warehousing solutions across 30+ countries.",
        highlight: "30+ countries",
      },
      {
        title: "We have over 15 years of experience in global logistics and security.",
        highlight: "over 15 years",
      },

      {
        title:
          "Advanced sea freight services with 24/7 cargo monitoring and protection.",
        highlight: "24/7 cargo monitoring",
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
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentImageIndex((prev) => (prev + 1) % images.length);
          setTimeout(() => setIsTransitioning(false), 100);
        }, 200);
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
    setIsTransitioning(true);

    // Add transition delay for smooth effect
    setTimeout(() => {
      // Update the image index
      if (direction === "next") {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      } else {
        setCurrentImageIndex(
          (prev) => (prev - 1 + images.length) % images.length
        );
      }
      setTimeout(() => setIsTransitioning(false), 100);
    }, 200);
  };

  return (
    <section className="relative h-full pt-24 text-white scrollbar-custom overflow-y-auto">
      {/* Hero Text Section - Mobile First */}
      <div className="block sm:hidden absolute z-10 top-32 left-0 w-full h-[calc(80dvh-2rem)] flex flex-col justify-center items-center px-4 pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-center space-y-6">
        <h3 className={`text-4xl leading-tight font-black text-white max-w-[320px] text-center ${montserrat.className}`}>
          <AnimatedText
            text="Securing Cargo,"
            className="block"
            tag="span"
            delay={0.08}
            duration={0.8}
            ease="power3.out"
          />
          <AnimatedText
            text="Delivering Trust."
            className="block"
            tag="span"
            delay={0.12}
            duration={0.8}
            ease="power3.out"
          />
        </h3>
        <button 
          onClick={() => router.push("/services")}
          className={`${poppins.className} px-8 py-3 
          flex justify-center items-center bg-[#D4A574] rounded-3xl 
          gap-3 text-white font-medium shadow-lg text-base
          hover:bg-transparent hover:border hover:border-[#D4A574] 
          transition-all duration-500 focus:outline-none
          w-auto min-w-[180px]`}
        >
          <FaArrowRightLong size={15} /> Our Services
        </button>
        </div>
      </div>

      {/* Hero Text Section - Desktop */}
      <div
        className="hidden sm:block absolute z-50 px-10 
        top-48 lg:top-80 
        left-6 lg:left-6 
        w-auto
        text-left
        transition-all duration-300 ease-in-out"
        style={{
          opacity: isTransitioning ? 0.8 : 1,
        }}
      >
        <h3 className={`text-[4rem] lg:text-[2.5rem] ${montserrat.className} leading-tight font-black text-white text-left`}>
          <AnimatedText
            text="Securing Cargo,"
            className="block"
            tag="span"
            delay={0.1}
            duration={0.8}
            ease="power3.out"
          />
          <AnimatedText
            text="Delivering Trust."
            className="block"
            tag="span"
            delay={0.15}
            duration={0.8}
            ease="power3.out"
          />
        </h3>
        <button 
          onClick={() => router.push("/services")}
          className={`${poppins.className} px-6 py-3 
          flex justify-center items-center bg-[#D4A574] rounded-3xl 
          mt-6 gap-5 text-white font-medium shadow-lg
          hover:bg-transparent hover:border hover:border-[#D4A574] 
          transition-all duration-500 focus:outline-none`}
        >
          <FaArrowRightLong size={15} /> Our Services
        </button>
      </div>

      {/* Background Image Section */}
      <div
        className="w-full lg:w-[76%] h-[90dvh] 
        absolute right-0 bg-cover bg-center transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.28)), url(${images[currentImageIndex]})`,
          backgroundPosition: "center",
          opacity: isTransitioning ? 0.8 : 1,
        }}
      >
        <div className="relative h-full">
          {/* Carousel Info Box */}
          <div
            className="absolute right-4 bottom-8 
            text-black w-[90%] sm:w-96 p-6 sm:p-8 
            bg-[#FAF8F4] shadow-sm rounded-sm
            left-1/2 transform -translate-x-1/2 
            sm:left-auto sm:transform-none
            transition-all duration-300 ease-in-out"
            style={{
              borderBottom: "1px solid #e5e7eb",
              backgroundImage: `linear-gradient(to right, #D4A574 ${progress}%, #e5e7eb ${progress}%)`,
              backgroundSize: "100% 2px",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
              opacity: isTransitioning ? 0.3 : 1,
            }}
          >
            <h4
              className={`text-base sm:text-xl font-normal mb-6 ${poppins.className} transition-opacity duration-300 ease-in-out`}
              style={{
                opacity: isTransitioning ? 0.2 : 1,
              }}
            >
              {textContent[currentImageIndex].title
                .split(textContent[currentImageIndex].highlight)
                .map((part, index, array) =>
                  index === array.length - 1 ? (
                    part
                  ) : (
                    <React.Fragment key={index}>
                      {part}
                      <span className="text-[#6B5B47] font-medium">
                        {textContent[currentImageIndex].highlight}
                      </span>
                    </React.Fragment>
                  )
                )}
            </h4>

            <div 
              className="flex gap-6 justify-center sm:justify-start transition-opacity duration-300 ease-in-out"
              style={{
                opacity: isTransitioning ? 0.2 : 1,
              }}
            >
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
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[#6B5B47] my-4 ${montserrat.className}`}
        >
          Pioneering Global Security and Shipping Solutions
        </h3>
        <p
          className={`mt-4 text-sm sm:text-base ${poppins.className} max-w-4xl mx-auto`}
        >
          AlderVault Security & Shipping specializes in comprehensive logistics
          and security solutions across the complete supply chain. With state-of-the-art
          warehousing facilities and industry-leading security protocols, we deliver exceptional
          results in cargo protection, secure storage, and global shipping while maintaining
          the highest standards of safety and reliability.
        </p>
      </div>

      <section className="px-4 sm:px-8 py-12 text-center">
        <Image
          src={Air}
          alt="Shipping operations"
          className="h-[20rem] sm:h-[25rem] lg:h-[30rem] mx-auto mb-8"
        />
        <h3 className={`${montserrat.className} text-3xl mb-5 text-white`}>
          Our Operations
        </h3>
        <p className={`${poppins.className} text-white leading-relaxed max-w-4xl mx-auto`}>
          AlderVault Security & Shipping provides the finest secure logistics solutions 
          including <span className="text-[#D4A574] font-medium">Sea Freight</span>, 
          <span className="text-[#D4A574] font-medium"> Air Freight</span>, and 
          <span className="text-[#D4A574] font-medium"> Vault Storage</span> of valuable 
          items (Gold, Diamonds, Documents, etc.). Our comprehensive services include 
          24/7 monitoring, private security details, and specialized protection for 
          high-value cargo across global trade routes.
        </p>

        <button 
          onClick={() => router.push("/services")}
         className="px-6 py-3 flex justify-center items-center bg-[#D4A574] rounded-3xl mt-8 gap-3 hover:bg-transparent hover:border hover:border-[#D4A574] transition-all duration-500 focus:outline-none mx-auto text-white font-medium"
        >
          <FaArrowRightLong size={15} /> Explore Our Services
        </button>
      </section>

      <section className="bg-white text-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          {/* Header */}
          <div className="mb-12">
            <h3 className={`${montserrat.className} text-2xl sm:text-3xl lg:text-4xl text-[#6B5B47] mb-6`}>
              Stay Updated
            </h3>
            <p className={`${poppins.className} text-gray-600 text-lg max-w-2xl mx-auto`}>
              Get the latest updates on secure logistics solutions, industry insights, 
              and AlderVault's global shipping innovations delivered to your inbox.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="bg-gradient-to-br from-[#FAF8F4] to-[#F5F1E8] rounded-3xl shadow-lg p-6 lg:p-10 max-w-2xl mx-auto">
            <h4 className={`${montserrat.className} text-xl lg:text-2xl text-[#6B5B47] mb-6`}>
              Newsletter Subscription
            </h4>
            
            <form className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className={`${poppins.className} flex-1 px-6 py-4 border border-gray-200 rounded-full focus:outline-none focus:border-[#D4A574] focus:ring-2 focus:ring-[#D4A574]/20 bg-white`}
                />
                <button 
                  type="submit"
                  className="px-8 py-4 bg-[#D4A574] text-white rounded-full hover:bg-[#C19B65] transition-all duration-300 flex items-center justify-center gap-2 font-medium whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <span className={poppins.className}>
                  No spam, unsubscribe anytime. We respect your privacy.
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
}
