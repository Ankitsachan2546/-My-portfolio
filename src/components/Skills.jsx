import React from 'react';
import Section from './Section';
import config from '../config.json';
import Icon from './Icon';

const SkillCard = ({ skill }) => (
    <div className="group flex flex-col items-center justify-center p-6 glass-card rounded-2xl hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1.5 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative mb-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 transition-colors group-hover:bg-blue-500/10">
            <Icon name={skill.icon} className="w-8 h-8 md:w-10 md:h-10 text-gray-400 group-hover:text-blue-400 transition-colors" />
        </div>
        <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors mb-3 truncate w-full text-center tracking-tight">{skill.name}</span>
        <span className={`text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-widest
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
            <div className="max-w-6xl mx-auto space-y-20">
                {Object.entries(config.skills).map(([category, skills]) => (
                    <div key={category} className="space-y-8">
                        <div className="flex items-center gap-4">
                            <h3 className="text-xl md:text-2xl font-black text-white capitalize tracking-tighter">
                                {category}
                            </h3>
                            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
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
