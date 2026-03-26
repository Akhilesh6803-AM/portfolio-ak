import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
    const projects = [
        {
            title: "Personal Portfolio Website",
            description: "A modern responsive developer portfolio built with React and Tailwind CSS.",
            techStack: ["React", "Tailwind CSS"],
            githubUrl: "#"
            demoUrl: "https://akhilesham.vercel.app/"
        },
        {
            title: "Fine-Grained Cyberbullying Detection",
            description: "Machine learning system for detecting cyberbullying severity in online conversations.",
            techStack: ["Python", "DistilBERT", "Flask", "SQLite"],
        },
    ];

    return (
        <section id="projects" className="py-20 bg-[#1e293b]/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <motion.div
                                whileHover={{ y: -8 }}
                                className="bg-[#0f172a] h-full rounded-2xl p-8 flex flex-col justify-between border border-[#ffffff0a] shadow-lg hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)] transition-shadow duration-300"
                            >
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="p-3 bg-accent/10 rounded-xl text-accent">
                                            <FiExternalLink size={24} />
                                        </div>
                                        <div className="flex gap-4">
                                            <a href={project.githubUrl} className="text-gray-400 hover:text-accent transition-colors duration-300">
                                                <FiGithub size={22} />
                                            </a>
                                            <a href={project.demoUrl} className="text-gray-400 hover:text-accent transition-colors duration-300">
                                                <FiExternalLink size={22} />
                                            </a>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{project.title}</h3>
                                    <p className="text-gray-400 leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                </div>

                                <ul className="flex flex-wrap gap-3 font-mono text-sm">
                                    {project.techStack.map((tech, techIndex) => (
                                        <li key={techIndex} className="text-accent bg-accent/5 px-3 py-1 rounded-full border border-accent/20">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
