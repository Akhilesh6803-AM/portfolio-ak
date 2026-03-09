import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-[#0f172a] border-t border-[#1e293b] py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                    <div className="text-gray-400 text-sm">
                        © 2026 Akhilesh A M. All rights reserved.
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/Akhilesh6803-AM" className="text-gray-400 hover:text-accent transition-colors duration-300">
                            <span className="sr-only">GitHub</span>
                            <FiGithub size={20} />
                        </a>
                        <a href="https://linkedin.com/in/akhilesh-a-m-akhil/" className="text-gray-400 hover:text-accent transition-colors duration-300">
                            <span className="sr-only">LinkedIn</span>
                            <FiLinkedin size={20} />
                        </a>
                        <a href="mailto:akhileshamalhik@gmail.com" className="text-gray-400 hover:text-accent transition-colors duration-300">
                            <span className="sr-only">Email</span>
                            <FiMail size={20} />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
