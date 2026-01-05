import React, { useState } from 'react';
import Section from './Section';
import { SiGithub, SiReact, SiMongodb, SiNodedotjs, SiExpress, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { IoCloseOutline } from 'react-icons/io5';
import Icon from './Icon';

const projectData = [
    {
        title: 'Code-Reviewer',
        description: 'An AI-powered tool to help developers review and analyze code efficiently.',
        fullDescription: 'Code-Reviewer is my first MERN stack project, built to assist developers in reviewing and analyzing code. It focused on mastering REST APIs and database integration in the MERN ecosystem.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Tailwind CSS'],
        features: [
            'Efficient code analysis and review interface',
            'REST API integration for code processing',
            'Database storage for review history/user data',
            'Modern, intuitive frontend built with React.js',
            'Foundation for future advanced code analysis features'
        ],
        github: '#',
        image: '/code-reviewer.png'
    },
    {
        title: 'Hotel-Booking (StayNow)',
        description: 'A complete end-to-end hotel booking solution built with the MERN stack.',
        fullDescription: 'Hotel-Booking is a comprehensive platform that includes hotel booking functionality, a secure authentication system, and an admin dashboard for efficient management. This was my first project associated with a company, providing valuable real-world development experience.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Clerk', 'Tailwind CSS'],
        features: [
            'Complete hotel booking workflow with user interaction',
            'Admin dashboard for managing hotels, bookings, and users',
            'Secure user authentication using Clerk',
            'Scalable data handling with MongoDB integration',
            'Responsive frontend and RESTful API architecture'
        ],
        github: '#',
        image: '/hotel-booking.png'
    },
    {
        title: 'Real Estate App (Estate-X)',
        description: 'A full-stack marketplace for buying, selling, and renting properties.',
        fullDescription: 'Estate-X is a robust real estate marketplace designed for seamless property transactions. It features a unified platform for diverse real estate needs with a focus on security and scalability.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Clerk', 'Tailwind CSS'],
        features: [
            'Unified platform for buying, selling, and renting properties',
            'Secure authentication and user management with Clerk',
            'Admin dashboard for managing listings and platform data',
            'Detailed property views with dynamic data handling',
            'Full CRUD operations and scalable MERN architecture'
        ],
        github: '#',
        image: '/estate-x.png'
    }
];

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300"
            onClick={onClose}
        >
            <div
                className="glass-card rounded-[2.5rem] w-full max-w-5xl max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-500 shadow-[0_0_100px_rgba(0,163,255,0.1)]"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all z-20 active:scale-90"
                >
                    <IoCloseOutline className="w-8 h-8" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 lg:p-12 space-y-8">
                        <div>
                            <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full">
                                Featured Project
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                {project.title}
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-lg italic">
                                "{project.description}"
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="w-8 h-1 bg-blue-500 rounded-full" />
                                Project Overview
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-base">
                                {project.fullDescription}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="w-8 h-1 bg-cyan-400 rounded-full" />
                                Core Technologies
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-4 py-2 text-xs font-bold rounded-xl bg-white/[0.03] text-gray-300 border border-white/5 hover:border-blue-500/30 transition-colors">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
                            >
                                <SiGithub className="w-6 h-6" />
                                View Technical Setup
                            </a>
                        </div>
                    </div>

                    <div className="bg-black/40 flex items-center justify-center p-8 lg:p-12 relative overflow-hidden group/img">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-700 group-hover/img:scale-[1.02]"
                        />

                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
                            {project.features.slice(0, 3).map((_, i) => (
                                <div key={i} className="w-2 h-2 rounded-full bg-white/20" />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-8 lg:p-12 border-t border-white/5 bg-white/[0.01]">
                    <h3 className="text-xl font-bold text-white mb-8">Detailed Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                                    <Icon name="check" className="w-4 h-4" />
                                </div>
                                <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <Section id="projects" title="Featured Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
                {projectData.map((project, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedProject(project)}
                        className="glass-card rounded-[2.5rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(0,163,255,0.15)] flex flex-col"
                    >
                        <div className="aspect-[4/3] overflow-hidden relative bg-black/40 group-hover:bg-black/20 transition-colors">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover p-6 group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                            <div className="absolute top-6 left-6">
                                <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest">
                                    Case Study
                                </div>
                            </div>
                        </div>

                        <div className="p-8 flex-1 flex flex-col">
                            <div className="mb-6">
                                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                                    {project.description}
                                </p>
                            </div>

                            <div className="mt-auto flex items-center justify-between">
                                <div className="flex flex-wrap gap-3">
                                    {project.tech.slice(0, 2).map((t, i) => (
                                        <span key={i} className="text-[10px] font-black uppercase tracking-tighter text-blue-500/80">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-all text-white active:scale-90">
                                    <Icon name="arrow-right" className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </Section>
    );
};

export default Projects;
