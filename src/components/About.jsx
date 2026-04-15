import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiZap, FiBriefcase, FiUsers, FiTrendingUp } from 'react-icons/fi';

const About = () => {
    const features = [
        { title: 'Web Development', icon: <FiCode size={24} className="text-accent" /> },
        { title: 'Problem Solving', icon: <FiZap size={24} className="text-accent" /> },
        { title: 'Modern Technologies', icon: <FiCpu size={24} className="text-accent" /> },
        { title: 'Project Management', icon: <FiBriefcase size={24} className="text-accent" /> },
        { title: 'Leadership', icon: <FiUsers size={24} className="text-accent" /> },
        { title: 'Research & Innovation', icon: <FiTrendingUp size={24} className="text-accent" /> }
    ];

    return (
        <section id="about" className="py-20 bg-[#1e293b]/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center gap-12">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="md:w-1/2 flex justify-center"
                    >
                        <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-2xl overflow-hidden">
                            <img
                                src="/ak.jpg"
                                alt="Akhilesh A M"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="md:w-1/2 text-gray-300"
                    >
                        <p className="text-lg leading-relaxed mb-6">
                            A passionate Computer Science Engineering student and Software Developer based in Bengaluru.
                            I focus on building modern web applications and solving real-world problems using technology.
                            Currently working on technology innovation and leading the R&D and technical team at Vayu Aarambh Innovations.
                        </p>

                        <div className="bg-[#0f172a] p-4 rounded-lg border border-[#ffffff1a]">
                            <h4 className="text-white font-semibold mb-1">Education</h4>
                            <p className="text-gray-400">
                                B.E. in Computer Science Engineering <br />
                                AMC Engineering College,Bengaluru <br />
                                2022 – 2026
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-4 bg-[#0f172a] p-4 rounded-xl shadow-md border border-[#ffffff0a]">
                                    <div className="p-3 bg-accent/10 rounded-lg">
                                        {feature.icon}
                                    </div>
                                    <span className="font-medium text-white">{feature.title}</span>
                                </div>
                            ))}
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
