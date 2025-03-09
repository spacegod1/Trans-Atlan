"use client";

import { Montserrat, Poppins } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt, FaChartLine, FaBookmark } from "react-icons/fa";

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

const projects = [
    {
        title: "Well Design & Technology Implementation",
        location: "Land Niger Delta",
        improvement: "32%",
        reference: "SPE 67225",
        details: "This project involved the application of advanced well design and technology in the Niger Delta region, resulting in a 32% improvement in efficiency or cost savings.",
    },
    {
        title: "Project Concept Optimisation & Well Engineering Design",
        location: "Shallow Offshore Niger Delta",
        improvement: "60%",
        reference: "SPE 79860",
        details: "This project focused on optimizing project concepts and engineering designs for wells in the shallow offshore areas of the Niger Delta, achieving a significant 60% improvement.",
    },
    {
        title: "Exploration Well & Engineered Risk Management",
        location: "Land Niger Delta",
        improvement: "50%",
        reference: "SPE 97449",
        details: "This project involved managing risks associated with exploration wells through engineered solutions, leading to a 50% improvement in risk management efficiency.",
    },
    {
        title: "Technology Application (MLT) in Well Construction",
        location: "Land Niger Delta",
        improvement: "30%",
        reference: "SPE 90423",
        details: "The application of Multi-Lateral Technology (MLT) in well construction in the Niger Delta resulted in a 30% improvement in construction efficiency or cost savings.",
    },
    {
        title: "Brownfield Well Design & Technology Implementation",
        location: "Shallow Offshore Southeast Asia",
        improvement: "33%",
        reference: "SPE 156054",
        details: "This project involved the redesign and implementation of new technologies in brownfield wells in Southeast Asia, achieving a 33% improvement.",
    },
    {
        title: "Exploration Wells & Well Delivery Process Application",
        location: "Deepwater Latin America",
        improvement: "1% NPT",
        reference: "Proprietary",
        details: "This project focused on improving the well delivery process for exploration wells in deepwater regions of Latin America, reducing non-productive time by 1%.",
    },
    {
        title: "Brownfield Wells Delivery Project Management",
        location: "Land Niger Delta",
        improvement: "Optimized",
        reference: "NPDC",
        details: "This project involved managing the delivery of brownfield wells in the Niger Delta, implementing best practices in project management and delivery optimization.",
    }
];

export default function Projects() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[40vh] lg:h-[50vh] min-h-[300px] bg-gradient-to-br from-[#23486A] to-[#1a3550]">
                <div className="relative h-full flex items-center justify-center px-4">
                    <div className="text-center text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className={`${montserrat.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6`}>
                                Project Portfolio
                            </h1>
                            <p className={`${poppins.className} text-base sm:text-lg md:text-xl max-w-3xl mx-auto`}>
                                Innovative solutions driving industry excellence
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <div className="space-y-12">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex flex-col space-y-4">
                                    <div className="flex items-center gap-3 text-sm text-[#D84040]">
                                        <FaMapMarkerAlt className="flex-shrink-0" />
                                        <span className={`${poppins.className} uppercase tracking-wider`}>
                                            {project.location}
                                        </span>
                                    </div>
                                    
                                    <h2 className={`${montserrat.className} text-xl sm:text-2xl text-[#23486A]`}>
                                        {project.title}
                                    </h2>

                                    <p className={`${poppins.className} text-gray-600`}>
                                        {project.details}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-100">
                                        <div className="flex items-center gap-2">
                                            <FaChartLine className="text-[#D84040]" />
                                            <span className={`${poppins.className} text-sm font-medium`}>
                                                Improvement: {project.improvement}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaBookmark className="text-[#23486A]" />
                                            <span className={`${poppins.className} text-sm`}>
                                                Ref: {project.reference}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Summary Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#23486A] rounded-2xl p-8 sm:p-12 text-white"
                    >
                        <h2 className={`${montserrat.className} text-2xl sm:text-3xl mb-4`}>
                            Project Excellence
                        </h2>
                        <p className={`${poppins.className} text-lg opacity-90 max-w-2xl mx-auto`}>
                            Our portfolio demonstrates consistent achievement in improving operational efficiency, 
                            reducing costs, and implementing innovative solutions across diverse energy projects.
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
