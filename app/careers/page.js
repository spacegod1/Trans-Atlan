"use client";

import { Montserrat, Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

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

export default function Careers() {
    return (    
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[40vh] lg:h-[50vh] min-h-[300px]">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url("/recruit.jpg")' }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#23486A]/90 to-[#1a3550]/90" />
                <div className="relative h-full flex items-center justify-center px-4">
                    <div className="text-center text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className={`${montserrat.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6`}>
                                Join Our Team
                            </h1>
                            <p className={`${poppins.className} text-base sm:text-lg md:text-xl max-w-3xl mx-auto`}>
                                Shape the future of energy in Africa
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center mb-12"
                    >
                        <h2 className={`${montserrat.className} text-2xl sm:text-3xl text-[#23486A] mb-6`}>
                            Build Your Career With Us
                        </h2>
                        <p className={`${poppins.className} text-gray-600 mb-8`}>
                            {`We're`} always looking for talented professionals who share our passion 
                            for innovation and excellence in the energy sector. If {`you're`} interested 
                            in joining our team, {`we'd`} love to hear from you.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-gray-50 rounded-xl p-8 sm:p-10 text-center"
                    >
                        <div className="w-16 h-16 bg-[#D84040] rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaEnvelope className="text-white text-2xl" />
                        </div>
                        <h3 className={`${montserrat.className} text-xl text-[#23486A] mb-4`}>
                            Submit Your Application
                        </h3>
                        <p className={`${poppins.className} text-gray-600 mb-6`}>
                            Please send your CV and a brief cover letter detailing your 
                            experience and interest in joining TransAtlan Energy to:
                        </p>
                        <a 
                            href="mailto:fagbottah@gmail.com"
                            className="inline-block bg-[#23486A] text-white px-8 py-3 rounded-full hover:bg-[#1a3550] transition-colors duration-300"
                        >
                            fagbottah@gmail.com
                        </a>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
