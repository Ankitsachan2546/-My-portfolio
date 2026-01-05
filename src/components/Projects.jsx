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
            className="fixed inset-0 z-[60] flex items-center justify-center p-6 md:p-12 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-300"
            onClick={onClose}
        >
            <div
                className="glass-card rounded-[3rem] w-full max-w-6xl max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-500 shadow-[0_0_100px_rgba(0,163,255,0.15)]"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 p-4 bg-white/5 hover:bg-white/10 rounded-2xl text-white transition-all z-20 active:scale-90"
                >
                    <IoCloseOutline className="w-10 h-10" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-10 lg:p-16 space-y-10">
                        <div>
                            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full">
                                Featured Project
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">
                                {project.title}
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-xl italic">
                                "{project.description}"
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <span className="w-10 h-1.5 bg-blue-500 rounded-full" />
                                Project Overview
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {project.fullDescription}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <span className="w-10 h-1.5 bg-cyan-400 rounded-full" />
                                Core Technologies
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-5 py-2.5 text-sm font-bold rounded-2xl bg-white/[0.03] text-gray-300 border border-white/5 hover:border-blue-500/30 transition-colors">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-10">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95"
                            >
                                <SiGithub className="w-7 h-7" />
                                <span className="text-lg">View Technical Setup</span>
                            </a>
                        </div>
                    </div>

                    <div className="bg-black/40 flex items-center justify-center p-10 lg:p-16 relative overflow-hidden group/img">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto rounded-3xl shadow-2xl transition-transform duration-700 group-hover/img:scale-[1.02]"
                        />
                    </div>
                </div>

                <div className="p-10 lg:p-16 border-t border-white/5 bg-white/[0.01]">
                    <h3 className="text-2xl font-bold text-white mb-10">Detailed Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {project.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-5 p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                                    <Icon name="check" className="w-5 h-5" />
                                </div>
                                <span className="text-gray-300 text-base leading-relaxed">{feature}</span>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 max-w-7xl mx-auto">
                {projectData.map((project, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedProject(project)}
                        className="glass-card rounded-[2.5rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,163,255,0.2)] flex flex-col"
                    >
                        {/* Image Container */}
                        <div className="relative h-56 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Project Badge */}
                            <div className="absolute top-5 right-5 px-4 py-1.5 rounded-full bg-blue-600/90 backdrop-blur-md text-[11px] font-black uppercase tracking-widest text-white shadow-lg">
                                Case Study
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-1">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
                                    {project.title}
                                </h3>
                                <div className="flex -space-x-2">
                                    {project.tech.slice(0, 3).map((Icon, i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center">
                                            <Icon className="w-4 h-4 text-blue-400" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-500">View Details</span>
                                <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                                    <SiGithub className="w-5 h-5 text-white" />
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
