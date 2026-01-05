import React from 'react';
import Section from './Section';
import config from '../config.json';
import Icon from './Icon';

const SkillCard = ({ skill }) => (
    <div className="group flex flex-col items-center justify-center p-8 glass-card rounded-3xl hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1.5 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative mb-5 p-4 rounded-2xl bg-white/[0.03] border border-white/5 transition-colors group-hover:bg-blue-500/10">
            <Icon name={skill.icon} className="w-10 h-10 md:w-12 md:h-12 text-gray-400 group-hover:text-blue-400 transition-colors" />
        </div>
        <span className="text-base font-bold text-gray-300 group-hover:text-white transition-colors mb-4 truncate w-full text-center tracking-tight">{skill.name}</span>
        <span className={`text-[11px] px-4 py-1.5 rounded-xl font-black uppercase tracking-widest
            ${skill.level === 'Mastered' ? 'bg-green-500/10 text-green-400/80 border border-green-500/10' :
                skill.level === 'Advancing' ? 'bg-blue-500/10 text-blue-400/80 border border-blue-500/10' :
                    'bg-yellow-500/10 text-yellow-500/80 border border-yellow-500/10'}`}
        >
            {skill.level}
        </span>
    </div>
);

const Skills = () => {
    return (
        <Section id="skills" title="Technical Skills">
            <div className="max-w-7xl mx-auto space-y-20">
                {Object.entries(config.skills).map(([category, skills]) => (
                    <div key={category} className="space-y-10">
                        <div className="flex items-center gap-6">
                            <h3 className="text-2xl md:text-3xl font-black text-white capitalize tracking-tighter">
                                {category}
                            </h3>
                            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                            {skills.map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
