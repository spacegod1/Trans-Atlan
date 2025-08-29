"use client";

import { Montserrat, Poppins } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Containers from "../../public/containers.jpg";

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

const services = [
    {
        title: "International Logistics",
        description: "Comprehensive global shipping and logistics solutions for businesses of all sizes. We provide end-to-end delivery services with real-time tracking, customs clearance, and international trade expertise across air and sea freight networks.",
        image: "/air_delivery.jpg",
        subServices: [
            "Air Freight Services",
            "Sea Freight Operations", 
            "Heavy Cargo Deliveries",
            "Express International Delivery",
            "International Trade Consulting",
            "Cross-Border E-commerce Solutions"
        ]
    },
    {
        title: "Valuable Asset Protection",
        description: "Specialized secure transport and storage solutions for high-value items including precious metals, diamonds, documents, and sensitive cargo requiring maximum security protocols and comprehensive insurance coverage.",
        image: "/secure-1.jpg",
        subServices: [
            "Precious Metals Transport",
            "Diamond & Jewelry Security",
            "Important Document Protection",
            "High-Value Cargo Insurance",
            "Armored Vehicle Transport",
            "Climate-Controlled Storage",
            "Chain of Custody Documentation",
            "Biometric Access Control",
            "24/7 Monitoring Systems"
        ]
    },
    {
        title: "Door-to-Door Services",
        description: "Complete end-to-end delivery solutions with full accountability from pickup to final destination. Our comprehensive service includes professional packaging, careful handling, real-time tracking, and specialized final mile delivery.",
        image: "/tracking.jpg",
        subServices: [
            "Same-Day Delivery",
            "Next-Day Express Service",
            "White Glove Delivery",
            "Installation & Setup Services",
            "Reverse Logistics",
            "Proof of Delivery Systems",
            "Real-Time GPS Tracking",
            "Signature Confirmation",
            "Packaging & Crating Services"
        ]
    },
    {
        title: "Security Services",
        description: "Professional security solutions for events, facilities, and specialized transport operations. Our trained security personnel provide comprehensive protection services tailored to your specific requirements and risk assessment needs.",
        image: "/security.jpg",
        subServices: [
            "Safe Keeping & Vault Storage",
            "Private Event Security",
            "Secured Delivery Operations",
            "Executive Protection Services",
            "Facility Security Management",
            "Risk Assessment & Consulting",
            "24/7 Monitoring Services",
            "Emergency Response Teams",
            "Personal Security Details"
        ]
    }
];

export default function Services() {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-[40vh] lg:h-[60vh] min-h-[300px] bg-[#23486A] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={Containers}
                        alt="Shipping containers"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                </div>
                <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-0">
                    <div className="text-center text-white w-full max-w-5xl mx-auto">
                        <h1 className={`${montserrat.className} text-4xl md:text-6xl lg:text-7xl mb-3 leading-tight font-bold`}>
                            Our Services
                        </h1>
                        <p className={`${poppins.className} text-md md:text-2xl max-w-4xl mx-auto leading-relaxed`}>
                         Providing logistics and security solutions across the globe
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-12 sm:py-16 md:py-20 px-6 sm:px-4 w-full">
                <div className="mx-auto grid gap-12 sm:gap-16 md:gap-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4 sm:gap-6 md:gap-12 items-start md:items-center w-full`}
                        >
                            {/* Content - Now comes first on mobile */}
                            <div className="w-full md:w-1/2 order-1 md:order-none">
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="w-full"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 sm:w-12 h-[2px] bg-[#D84040]"></div>
                                        <span className={`${poppins.className} text-[#D84040] uppercase tracking-wider text-xs sm:text-sm`}>
                                            Our Services
                                        </span>
                                    </div>
                                    <h2 className={`${montserrat.className} text-2xl sm:text-3xl lg:text-4xl text-[#23486A] mb-4 sm:mb-6`}>
                                        {service.title}
                                    </h2>
                                    <p className={`${poppins.className} text-base sm:text-lg text-gray-600 mb-6 sm:mb-8`}>
                                        {service.description}
                                    </p>
                                    <ul className={`${poppins.className} space-y-2 sm:space-y-3 text-gray-600 w-full grid md:grid-cols-2 gap-x-4`}>
                                        {service.subServices.map((subService, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: 0.1 * idx }}
                                                className="flex items-center gap-2 sm:gap-3 group cursor-default"
                                            >
                                                <span className="text-sm sm:text-base group-hover:text-[#23486A] transition-colors duration-300">{subService}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>

                            {/* Image container - Now comes second on mobile */}
                            <div className="relative w-full md:w-1/2 group order-2 md:order-none mt-8 md:mt-0">
                                <div className="relative aspect-[4/3] transform group-hover:scale-[1.02] transition-transform duration-300">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover rounded-lg shadow-xl"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className={`absolute ${index % 2 === 0 ? '-right-2 sm:-right-4' : '-left-2 sm:-left-4'} -bottom-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#D84040] rounded-full z-[-1]`}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why Choose TransAtlan Section */}
            <section className="py-14 md:py-32 w-full bg-gradient-to-b from-white via-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                        <span className={`${poppins.className} text-[#D84040] uppercase tracking-wider text-sm mb-4 block`}>
                            Why Choose Us
                        </span>
                        <h2 className={`${montserrat.className} text-3xl sm:text-4xl md:text-5xl text-[#23486A] mb-6`}>
                            Setting the Standard in Secure Logistics
                        </h2>
                        <p className={`${poppins.className} text-gray-600 text-lg`}>
                            We combine advanced security protocols with global logistics expertise to deliver exceptional results
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#23486A] opacity-5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-300"></div>
                            <div className="relative">
                                <div className="w-14 h-14 bg-[#23486A] rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                                    <span className="text-white text-2xl transform -rotate-3">🛡️</span>
                                </div>
                                <h3 className={`${montserrat.className} text-xl text-[#23486A] mb-4`}>
                                    Advanced Security
                                </h3>
                                <p className={`${poppins.className} text-gray-600`}>
                                    State-of-the-art security protocols and tracking technology ensuring maximum protection for your valuable assets and cargo.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D84040] opacity-5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-300"></div>
                            <div className="relative">
                                <div className="w-14 h-14 bg-[#D84040] rounded-2xl flex items-center justify-center mb-6 transform -rotate-3">
                                    <span className="text-white text-2xl transform rotate-3">👥</span>
                                </div>
                                <h3 className={`${montserrat.className} text-xl text-[#23486A] mb-4`}>
                                    Reliable Service
                                </h3>
                                <p className={`${poppins.className} text-gray-600`}>
                                    Consistent, dependable logistics and security services with 24/7 support, real-time tracking, and transparent communication throughout.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#23486A] opacity-5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-300"></div>
                            <div className="relative">
                                <div className="w-14 h-14 bg-[#23486A] rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                                    <span className="text-white text-2xl transform -rotate-3">🌍</span>
                                </div>
                                <h3 className={`${montserrat.className} text-xl text-[#23486A] mb-4`}>
                                    Global Reach
                                </h3>
                                <p className={`${poppins.className} text-gray-600`}>
                                    Extensive international network with local expertise, committed to providing seamless logistics and security solutions across all continents.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
