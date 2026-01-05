import React from 'react';
import config from '../config.json';
import Icon from './Icon';

const Footer = () => {
    return (
        <footer className="relative py-12 md:py-20 px-6 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-blue-500/[0.02] border-t border-white/5" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <a href="#" className="flex items-center space-x-3 group">
                            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-black text-white group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                                A
                            </div>
                            <span className="text-xl font-black text-white tracking-tighter">
                                ANKIT<span className="text-blue-500">.</span>
                            </span>
                        </a>
                        <p className="text-sm text-gray-500 font-medium">
                            &copy; {new Date().getFullYear()} Ankit Sachan. Crafted with precision.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {config.links.map((link) => (
                            <a
                                key={link.text}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-all active:scale-90"
                            >
                                <Icon name={link.icon} className="w-5 h-5" />
                                <span className="sr-only">{link.text}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 gap-4">
                    <span>Designed by Ankit</span>
                    <span className="hidden md:block w-2 h-2 rounded-full bg-white/5" />
                    <span>Built with MERN Stack</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
