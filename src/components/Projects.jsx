import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
    const projects = [
        {
            title: "Personal Portfolio Website",
            description: "A modern responsive developer portfolio built with React and Tailwind CSS.",
            techStack: ["React", "Tailwind CSS"],
            githubUrl: "#",
            demoUrl: "https://akhilesham.vercel.app/"
        },
        {
            title: "Fine-Grained Cyberbullying Detection",
            description: "Machine learning system for detecting cyberbullying severity in online conversations.",
            techStack: ["Python", "DistilBERT", "Flask", "SQLite"],
        },
        {
            title: "Neobrutalism E-Commerce Platform",
            description: "Developed a responsive e-commerce platform using React and Tailwind CSS, implementing a neobrutalism design approach with bold visuals, sharp contrasts, and interactive UI components.",
            techStack: ["React", "Tailwind CSS"],
            githubUrl: "https://github.com/Akhilesh6803-AM/E-Commerce",
            demoUrl: "#"
        },
    ];

    return (
        <section id="projects" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4 text-center tracking-tight">Featured Projects</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: false, margin: "-100px" }}
                        >
                            <motion.div
                                className="glass-card h-full rounded-3xl p-8 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <a href={project.demoUrl || '#'} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-xl text-blue-400 hover:bg-white/10 transition-colors">
                                            <FiExternalLink size={24} />
                                        </a>
                                        <div className="flex gap-4">
                                            {project.githubUrl && (
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                                                    <FiGithub size={22} />
                                                </a>
                                            )}
                                            {project.demoUrl && (
                                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                                                    <FiExternalLink size={22} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                    <p className="text-slate-400 leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                </div>

                                <ul className="flex flex-wrap gap-3 font-mono text-sm">
                                    {project.techStack.map((tech, techIndex) => (
                                        <li key={techIndex} className="text-slate-300 bg-white/5 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
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
