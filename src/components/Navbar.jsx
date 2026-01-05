import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'What I Do', href: '#services' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full z-[100] top-0 left-0 px-6 py-4">
            <div className="max-w-7xl mx-auto glass-card rounded-[2rem] px-6 py-3 flex items-center justify-between">
                <a href="#" className="flex items-center space-x-2 group">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-black text-white group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                        A
                    </div>
                    <span className="text-xl font-black text-white tracking-tighter">
                        ANKIT<span className="text-blue-500">.</span>
                    </span>
                </a>

                {/* Desktop menu */}
                <div className="hidden md:block">
                    <ul className="flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors relative group/link"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover/link:w-full" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact CTA */}
                <div className="hidden md:block">
                    <a href="#contact" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] active:scale-95">
                        Hire Me
                    </a>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="absolute top-24 left-6 right-6 glass-card rounded-[2rem] p-8 md:hidden animate-in slide-in-from-top-5 duration-300">
                        <ul className="flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-bold text-gray-300 hover:text-blue-400 block transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
