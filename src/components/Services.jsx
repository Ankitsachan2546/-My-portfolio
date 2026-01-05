import React from 'react';
import Section from './Section';
import { SiReact, SiNodedotjs, SiFigma } from 'react-icons/si';

const Services = () => {
    const services = [
        {
            title: 'Frontend Development',
            description: 'Building high-performance, pixel-perfect user interfaces using React, Next.js, and Tailwind CSS. Focused on responsiveness and micro-interactions.',
            icon: SiReact,
            color: 'from-blue-500 to-cyan-400'
        },
        {
            title: 'Backend Development',
            description: 'Architecting scalable server-side systems and RESTful APIs with Node.js and Go. Expert in database optimization and secure authentication.',
            icon: SiNodedotjs,
            color: 'from-green-500 to-emerald-400'
        },
        {
            title: 'Full Stack Solutions',
            description: 'End-to-end development from database design to cloud deployment. delivering seamless, enterprise-grade web applications.',
            icon: SiFigma,
            color: 'from-purple-500 to-pink-400'
        }
    ];

    return (
        <Section id="services" title="What I Do">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="glass-card p-10 rounded-3xl group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,163,255,0.1)]"
                    >
                        {/* Hover Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                        <div className="mb-8 p-5 inline-block rounded-2xl bg-white/[0.03] border border-white/5 relative group-hover:bg-blue-500/10 transition-colors duration-500">
                            <service.icon className="w-12 h-12 text-blue-400 group-hover:text-white transition-colors duration-500" />
                            {/* Adding a small emoji tag for extra flair as requested */}
                            <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-lg shadow-xl shadow-black/50 group-hover:scale-110 transition-transform">
                                {index === 0 ? '🎨' : index === 1 ? '⚙️' : '🚀'}
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                            {service.title}
                        </h3>

                        <p className="text-gray-400 leading-relaxed text-base">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* SVG Gradient definition for the icons */}
            <svg width="0" height="0" className="absolute">
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00a3ff" />
                    <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
            </svg>
        </Section>
    );
};

export default Services;
