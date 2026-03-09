import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        // Note: You will need to replace these with your actual EmailJS credentials
        emailjs
            .sendForm('service_66lk84l', 'template_22a44ql', form.current, {
                publicKey: 'Ak8mFh2RwjnQWxFTh',
            })
            .then(
                () => {
                    setIsSent(true);
                    form.current.reset();

                    // Hide the success message after 5 seconds
                    setTimeout(() => {
                        setIsSent(false);
                    }, 5000);
                },
                (error) => {
                    alert('Failed to send the message, please try again.');
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section id="contact" className="py-20 bg-[#0f172a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
                    <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:w-1/3"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:akhileshamalhik@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors duration-300 group">
                                <div className="p-4 bg-[#1e293b] rounded-full group-hover:bg-accent/10 transition-colors">
                                    <FiMail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Email</h4>
                                    <span>akhileshamalhik@gmail.com</span>
                                </div>
                            </a>

                            <a href="https://github.com/Akhilesh6803-AM" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors duration-300 group">
                                <div className="p-4 bg-[#1e293b] rounded-full group-hover:bg-accent/10 transition-colors">
                                    <FiGithub size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">GitHub</h4>
                                    <span>github.com/Akhilesh6803-AM</span>
                                </div>
                            </a>

                            <a href="https://linkedin.com/in/akhilesh-a-m-akhil/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors duration-300 group">
                                <div className="p-4 bg-[#1e293b] rounded-full group-hover:bg-accent/10 transition-colors">
                                    <FiLinkedin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">LinkedIn</h4>
                                    <span>linkedin.com/in/akhilesh-a-m-akhil/</span>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:w-2/3"
                    >
                        <form ref={form} onSubmit={sendEmail} className="bg-[#1e293b] p-8 rounded-2xl border border-[#ffffff0a] shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="user_name"
                                        required
                                        className="w-full bg-[#0f172a] border border-[#ffffff1a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="user_email"
                                        required
                                        className="w-full bg-[#0f172a] border border-[#ffffff1a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                                        placeholder="Your Email"
                                    />
                                </div>
                            </div>

                            <div className="mb-8">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="5"
                                    className="w-full bg-[#0f172a] border border-[#ffffff1a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full sm:w-auto px-8 py-4 bg-accent text-white font-medium rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all flex items-center justify-center gap-3"
                            >
                                <span>Send Message</span>
                                <FiSend />
                            </motion.button>

                            {isSent && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-6 bg-green-500/10 text-green-400 border border-green-500/30 rounded-lg p-3 text-center flex items-center justify-center gap-2"
                                >
                                    <span>✔</span> Message Sent Successfully
                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
