import React from 'react';
import { motion } from 'framer-motion';
import {
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiHtml5,
    SiCss as SiCss3,
    SiTailwindcss,
    SiGit,
    SiMongodb
} from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: 'JavaScript', icon: <SiJavascript size={40} className="text-[#F7DF1E]" /> },
        { name: 'React', icon: <SiReact size={40} className="text-[#61DAFB]" /> },
        { name: 'Node.js', icon: <SiNodedotjs size={40} className="text-[#339933]" /> },
        { name: 'HTML', icon: <SiHtml5 size={40} className="text-[#E34F26]" /> },
        { name: 'CSS', icon: <SiCss3 size={40} className="text-[#1572B6]" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-[#06B6D4]" /> },
        { name: 'Git', icon: <SiGit size={40} className="text-[#F05032]" /> },
        { name: 'MongoDB', icon: <SiMongodb size={40} className="text-[#47A248]" /> },
    ];

    return (
        <section id="skills" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4 text-center tracking-tight">My Skills</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { 
                                    opacity: 1, 
                                    y: 0,
                                    transition: { type: "spring", stiffness: 150, damping: 12, mass: 1.2 }
                                }
                            }}
                            whileHover={{ y: -12, scale: 1.08, transition: { type: "spring", stiffness: 200, damping: 8, mass: 1 } }}
                            className="glass-card p-6 rounded-3xl flex flex-col items-center justify-center gap-4 cursor-pointer"
                        >
                            {skill.icon}
                            <span className="text-lg font-medium text-slate-300">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;
