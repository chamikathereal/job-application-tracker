// client/components/Footer.tsx
import React, { memo } from 'react';
import { Github, Linkedin, Globe } from 'lucide-react';
import Image from "next/image";

import profileImage from '../images/profile.jpg';


const Footer = () => {
    return (
        <footer className="w-full max-w-6xl mx-auto px-6 py-8 mt-auto animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="flex flex-col items-center justify-between gap-6 p-6 transition-all duration-500 border border-gray-200 shadow-xl bg-white/80 backdrop-blur-xl rounded-3xl md:flex-row hover:border-gray-300 hover:shadow-2xl">

                {/* Developer Info */}
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shrink-0 p-0.5">
                        <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                            <Image
                                src={profileImage}
                                alt="Chamika Gayashan"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Developed By</span>
                        <a href='https://github.com/chamikathereal' target="_blank" rel="noreferrer" className="text-lg font-bold leading-none tracking-wide text-gray-800 cursor-pointer hover:text-blue-600 transition-colors">
                            Chamika Gayashan
                        </a>
                        <span className="mt-1 text-xs font-medium text-gray-500">Software Engineer</span>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-2 bg-gray-100/50 rounded-full p-1.5 border border-gray-200">
                    <a href="https://github.com/chamikathereal" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="p-3 transition-all duration-300 rounded-full hover:bg-white hover:shadow-md text-gray-600 hover:text-gray-900 hover:scale-110">
                        <Github size={18} />
                    </a>
                    <a href="https://linkedin.com/in/chamikathereal" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="p-3 transition-all duration-300 rounded-full hover:bg-white hover:shadow-md text-gray-600 hover:text-blue-700 hover:scale-110">
                        <Linkedin size={18} />
                    </a>
                    <a href="https://chamikathereal.github.io/" target="_blank" rel="noreferrer" aria-label="Portfolio Website" className="p-3 transition-all duration-300 rounded-full hover:bg-white hover:shadow-md text-gray-600 hover:text-purple-600 hover:scale-110">
                        <Globe size={18} />
                    </a>
                </div>
            </div>

            {/* Copyright Line */}
            <div className="text-center mt-6 text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase">
                Job Tracker © {new Date().getFullYear()} • Built with Next.js & Tailwind
            </div>
        </footer>
    );
};

export default memo(Footer);