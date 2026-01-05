import React from 'react';
import Section from './Section';

const Experience = () => {
    // Placeholder experience data
    const experiences = [
        {
            role: 'MERN Stack Intern',
            company: 'Shiwansh Solution',
            period: 'Dec. 2025 - Present',
            description: [
                'Developing responsive frontend components and RESTful APIs using the MERN stack.',
                'Focused on optimizing databases and improving application stability through structured code reviews.',
                'Optimizing complex queries for better platform performance.'
            ],
            logo: '/shiwansh-logo.png'
        },
        {
            role: 'Full Stack Developer',
            company: 'ZIDIO Development',
            period: 'Jun. 2025 - Sept. 2025',
            description: [
                'Maintained React-based user interfaces with cross-device compatibility.',
                'Refactored critical backend logic to improve performance.',
                'Achieved a 50% reduction in script execution time and better platform scalability.'
            ],
            logo: '/zidio-logo.png'
        },
        {
            role: 'Full Stack Intern',
            company: 'Softpro India',
            period: 'Jun. 2024 - Sept. 2024',
            description: [
                'Built a multi-tenant cold email SaaS platform.',
                'Optimized API response times by 25% through backend enhancements.',
                'Automated 50% of manual campaign operations using optimized query logic.'
            ],
            logo: '/softpro-logo.png'
        }
    ];

    return (
        <Section id="experience" title="Experience">
            <div className="max-w-5xl mx-auto space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 items-stretch group">
                        {/* Company Identifier Box - Left */}
                        <div className="md:col-span-1 glass-card rounded-3xl flex items-center justify-center p-8 group-hover:border-blue-500/30 transition-all duration-500 overflow-hidden relative">
                            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            {exp.company === 'Shiwansh Solution' ? (
                                <img
                                    src={exp.logo}
                                    alt={exp.company}
                                    className="w-full h-auto max-h-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-700 scale-110"
                                />
                            ) : (
                                <span className="text-white font-black text-2xl text-center leading-tight uppercase tracking-tighter group-hover:text-blue-400 transition-colors relative z-10">
                                    {exp.company}
                                </span>
                            )}
                        </div>

                        {/* Details Box - Right (3/4 width on desktop) */}
                        <div className="md:col-span-3 glass-card rounded-3xl p-6 md:p-8 group-hover:border-blue-500/20 transition-all duration-500 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-3xl -mr-12 -mt-12" />

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-blue-400 transition-colors mb-1">
                                        {exp.role}
                                    </h3>
                                    <p className="text-blue-500 font-bold tracking-widest text-[10px] uppercase">
                                        {exp.company}
                                    </p>
                                </div>
                                <span className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-400 text-[10px] font-bold border border-white/5 h-fit">
                                    {exp.period}
                                </span>
                            </div>

                            <ul className="space-y-3">
                                {exp.description.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                                        <div className="mt-2 w-1 h-1 rounded-full bg-blue-500 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
