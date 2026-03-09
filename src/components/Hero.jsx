import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="md:w-1/2 flex justify-center order-2 md:order-1"
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-64 h-64 md:w-80 md:h-80"
                        >
                            {/* Soft glowing animation behind */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent via-purple-500 to-blue-400 blur-lg opacity-70"
                            />

                            {/* Solid rotating gradient border */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-purple-500 to-accent"
                            />

                            {/* Image container inner mask */}
                            <div className="absolute inset-1.5 md:inset-2 rounded-full overflow-hidden border-4 border-[#0f172a] bg-[#1e293b] z-10">
                                <img
                                    src="/akhilesh.jpg"
                                    alt="Akhilesh A M"
                                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="md:w-1/2 text-center md:text-left order-1 md:order-2"
                    >
                        <h2 className="text-gray-400 font-medium text-xl mb-2 tracking-wide">
                            Hello, it's me
                        </h2>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="hero-name text-5xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight"
                        >
                            Akhilesh A M
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            className="text-2xl md:text-3xl font-semibold text-gray-300 mb-8"
                        >
                            And I'm a{' '}
                            <span className="text-accent">
                                <TypeAnimation
                                    sequence={[
                                        'Software Developer',
                                        2000,
                                        'Web Developer',
                                        2000,
                                        'React Developer',
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </span>
                        </motion.div>
                        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
                            I build modern web applications and scalable solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#projects"
                                className="px-8 py-3 bg-accent text-white font-medium rounded-full shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300 w-full sm:w-auto text-center"
                            >
                                View Projects
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="/AkhileshAM Resume.pdf"
                                download
                                className="px-8 py-3 bg-transparent border-2 border-accent text-accent font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
                            >
                                Download Resume
                            </motion.a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
