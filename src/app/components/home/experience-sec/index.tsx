"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2023",
            title: "AI & IoT Project Developer (Project Support)",
            company: "Independent / Freelance",
            type: "Fulltime",
            description: "Independent project developer specializing in AI & IoT solutions. Designed and sold custom robotics & IoT academic projects. Delivered practical automation and robotics solutions with documentation and demos."
        },
        {
            year: "2024",
            title: "AI Project Internship",
            company: "ShenAi Private Software Solutions",
            type: "Internship",
            description: "Completed an internship focused on developing practical AI solutions and contributing to real-world software projects."
        },
        {
            year: "2025 - 2026",
            title: "AI & ML Intern",
            company: "SearchFirst Technologies",
            type: "Internship",
            description: "Successfully completed an internship in Artificial Intelligence & Machine Learning, applying new concepts in real-world scenarios and demonstrating professional conduct."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16"
                    >
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </motion.div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div 
                                key={index} 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: { staggerChildren: 0.2 }
                                    }
                                }}
                                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative group"
                            >
                                {/* Left Side: Year and Title */}
                                <motion.div 
                                    variants={{
                                        hidden: { opacity: 0, x: -30 },
                                        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } }
                                    }}
                                >
                                    <h3 className="font-bold mb-2 text-primary transition-transform duration-300 group-hover:translate-x-2 inline-block">
                                        {exp.year}
                                    </h3>
                                    <h4 className="text-lg font-medium">{exp.title}</h4>
                                </motion.div>

                                {/* Middle: Timeline Graphic and Company Context */}
                                <div className="relative">
                                    {/* Animated Line that draws down */}
                                    <motion.div 
                                        variants={{
                                            hidden: { height: 0 },
                                            visible: { height: index < experiences.length - 1 ? "160px" : "120px", transition: { duration: 0.8, ease: "easeOut" } }
                                        }}
                                        className="absolute left-0 top-3 w-[1px] bg-softGray transition-colors duration-500 group-hover:bg-primary z-0"
                                    />

                                    {/* Animated Dot that pops in */}
                                    <motion.div 
                                        variants={{
                                            hidden: { scale: 0 },
                                            visible: { scale: 1, transition: { type: "spring", bounce: 0.5, delay: 0.2 } }
                                        }}
                                        className="no-print absolute left-0 top-1.5 transform -translate-x-1/2 z-10"
                                    >
                                        <div className="w-3.5 h-3.5 rounded-full border-[1.5px] border-black bg-white flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_8px_rgba(254,67,0,0.5)]">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>
                                        </div>
                                    </motion.div>

                                    <motion.div 
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
                                        }}
                                        className="pl-5 lg:pl-7"
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-medium transition-colors duration-300 group-hover:text-primary">
                                                {exp.company}
                                            </span>
                                        </div>
                                        <p className="text-base font-normal text-gray-500">{exp.type}</p>
                                    </motion.div>
                                </div>

                                {/* Right Side: Description */}
                                <motion.div 
                                    variants={{
                                        hidden: { opacity: 0, x: 30 },
                                        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } }
                                    }}
                                    className="pl-8 sm:pl-0"
                                >
                                    <p className="leading-relaxed text-base text-black/70 group-hover:text-black transition-colors duration-300">
                                        {exp.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;