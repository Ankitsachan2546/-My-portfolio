import React from 'react';
import config from '../config.json';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-6">
            <div className="flex flex-col items-center w-full max-w-5xl">
                <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full animate-fade-in">
                    Available for new opportunities
                </div>

                <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight animate-fade-in-up">
                    I'm <span className="text-gradient">Ankit Sachan</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:200ms]">
                    Designing and building <span className="text-white font-medium">high-performance</span> full-stack applications with the MERN ecosystem.
                </p>

                <div className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up [animation-delay:400ms]">
                    <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] active:scale-95">
                        View Projects
                    </a>
                    <a href="#contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all border border-white/10 hover:border-white/20 active:scale-95">
                        Let's Talk
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50 hover:opacity-100 transition-opacity">
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Scroll</span>
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-transparent rounded-full" />
            </div>
        </section>
    );
};

export default Hero;
