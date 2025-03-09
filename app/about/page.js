"use client";

import { Montserrat, Poppins } from "next/font/google";
import Image from "next/image";
import OilWorker from "../../public/rig-worker.jpg";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";

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

const executives = [
    {
        name: "Femi Otukoya",
        position: "Chief Executive Officer",
        image: "/femi.jpg",
        linkedin: "#",
        bio: "25+ years of experience in energy sector leadership, driving sustainable growth and innovation."
    },
    {
        name: "Ochuko Erivwo",
        position: "Chief Technical Director",
        image: "/ochuko.jpg",
        linkedin: "#",
        bio: "Expert in operational excellence with proven track record in optimizing oil & gas operations."
    },
    {
        name: "Ferdinand Agbottah",
        position: "Business Development Manager",
        image: "/Agbottah.jpg",
        linkedin: "#",
        bio: "Pioneer in implementing cutting-edge technologies for energy exploration and production."
    }
];

export default function About() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] bg-[#23486A] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={OilWorker}
                        alt="Oil and gas operations"
                        fill
                        className="object-cover opacity-20"
                    />
                </div>
                <div className="relative h-full flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className={`${montserrat.className} text-4xl sm:text-5xl lg:text-6xl mb-6`}>
                            About TransAtlan Energy
                        </h1>
                        <p className={`${poppins.className} text-lg sm:text-xl max-w-3xl mx-auto`}>
                            Pioneering sustainable energy solutions across Africa
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-20 px-4 sm:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className={`${montserrat.className} text-3xl sm:text-4xl text-[#D84040] mb-6`}>
                                Our Story
                            </h2>
                            <div className={`${poppins.className} space-y-4 text-gray-700`}>
                                <p>
                                    TransAtlan Energy was founded with a vision to transform {`Africa's`} energy landscape. 
                                    We combine decades of expertise with innovative solutions to deliver sustainable 
                                    energy projects that power progress across the continent.
                                </p>
                                <p>
                                    Our commitment to excellence, environmental stewardship, and community development 
                                    has established us as a trusted partner in the energy sector, serving over 30 countries 
                                    with state-of-the-art solutions.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#23486A] p-8 rounded-lg text-white text-center">
                                <h3 className={`${montserrat.className} text-4xl mb-2`}>30+</h3>
                                <p className={poppins.className}>Countries Served</p>
                            </div>
                            <div className="bg-[#D84040] p-8 rounded-lg text-white text-center">
                                <h3 className={`${montserrat.className} text-4xl mb-2`}>80+</h3>
                                <p className={poppins.className}>Years Experience</p>
                            </div>
                            <div className="bg-[#D84040] p-8 rounded-lg text-white text-center">
                                <h3 className={`${montserrat.className} text-4xl mb-2`}>500+</h3>
                                <p className={poppins.className}>Projects Completed</p>
                            </div>
                            <div className="bg-[#23486A] p-8 rounded-lg text-white text-center">
                                <h3 className={`${montserrat.className} text-4xl mb-2`}>1000+</h3>
                                <p className={poppins.className}>Team Members</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Executive Team */}
            <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className={`${montserrat.className} text-3xl sm:text-4xl text-center text-[#23486A] mb-16`}>
                        Executive Leadership
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {executives.map((exec, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white overflow-hidden shadow-lg"
                            >
                                <div className="relative h-80">
                                    <Image
                                        src={exec.image}
                                        alt={exec.name}
                                        fill
                                        className="object-cover object-top"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        priority={index < 3}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className={`${montserrat.className} text-xl text-[#23486A] mb-2`}>
                                        {exec.name}
                                    </h3>
                                    <p className={`${poppins.className} text-[#D84040] mb-4`}>
                                        {exec.position}
                                    </p>
                                    <p className={`${poppins.className} text-gray-600 mb-4`}>
                                        {exec.bio}
                                    </p>
                                    <a
                                        href={exec.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-[#23486A] hover:text-[#D84040] transition-colors"
                                    >
                                        <FaLinkedin size={24} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-4 sm:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className={`${montserrat.className} text-3xl sm:text-4xl text-center text-[#23486A] mb-16`}>
                        Our Values
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#D84040] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🌱</span>
                            </div>
                            <h3 className={`${montserrat.className} text-xl mb-3`}>Sustainability</h3>
                            <p className={`${poppins.className} text-gray-600`}>
                                Committed to environmental stewardship and sustainable practices
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#23486A] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">💡</span>
                            </div>
                            <h3 className={`${montserrat.className} text-xl mb-3`}>Innovation</h3>
                            <p className={`${poppins.className} text-gray-600`}>
                                Driving progress through cutting-edge solutions
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#D84040] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🤝</span>
                            </div>
                            <h3 className={`${montserrat.className} text-xl mb-3`}>Partnership</h3>
                            <p className={`${poppins.className} text-gray-600`}>
                                Building lasting relationships with stakeholders
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#23486A] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">⭐</span>
                            </div>
                            <h3 className={`${montserrat.className} text-xl mb-3`}>Excellence</h3>
                            <p className={`${poppins.className} text-gray-600`}>
                                Maintaining the highest standards in all operations
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
