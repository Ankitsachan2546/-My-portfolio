import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="home" className="min-h-[90vh] flex flex-col items-center justify-center relative px-6 py-16">
            <div className="flex flex-col items-center w-full max-w-5xl text-center">
                {/* Profile Image with Ring Effect */}
                <div className="relative mb-8 animate-fade-in">
                    <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 animate-pulse" />
                    <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full p-1.5 bg-gradient-to-br from-blue-600 to-cyan-400 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-slate-900 bg-slate-800">
                            <img
                                src={profileImg}
                                alt="Ankit Sachan"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-110"
                            />
                        </div>
                    </div>
                </div>

                <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full animate-fade-in [animation-delay:200ms]">
                    Available for new opportunities
                </div>

                <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight animate-fade-in-up [animation-delay:300ms]">
                    I'm <span className="text-gradient">Ankit Sachan</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:500ms]">
                    Designing and building <span className="text-white font-medium">high-performance</span> full-stack applications with the MERN ecosystem.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up [animation-delay:700ms]">
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
