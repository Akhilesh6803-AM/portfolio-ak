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
        <section id="skills" className="py-20 bg-[#0f172a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">My Skills</h2>
                    <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="bg-[#1e293b] p-6 rounded-2xl flex flex-col items-center justify-center gap-4 border border-[#ffffff0a] shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] cursor-pointer"
                        >
                            {skill.icon}
                            <span className="text-lg font-medium text-gray-200">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
