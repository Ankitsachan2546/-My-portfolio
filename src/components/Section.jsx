import React from 'react';

const Section = ({ id, title, children, className = "" }) => {
    return (
        <section id={id} className={`py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20 ${className}`}>
            {title && (
                <div className="flex flex-col items-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
                        <span className="text-gradient leading-tight">{title}</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full" />
                </div>
            )}
            <div className="animate-fade-in-up">
                {children}
            </div>
        </section>
    );
};

export default Section;
