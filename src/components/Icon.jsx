import React from 'react';
import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
    SiNodedotjs, SiMongodb, SiGit, SiGo, SiGithub, SiLinkedin, SiCodepen,
    SiTailwindcss, SiExpress, SiPostgresql, SiMysql, SiGraphql, SiDocker,
    SiAmazonwebservices, SiRedis, SiPrisma, SiMongoose, SiJest, SiRedux,
    SiFirebase, SiFramer
} from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { FaTerminal, FaCheck, FaArrowRight } from 'react-icons/fa';

const iconMap = {
    "html": SiHtml5,
    "css": SiCss3,
    "js": SiJavascript,
    "ts": SiTypescript,
    "reactjs": SiReact,
    "nextjs": SiNextdotjs,
    "simple-icons:nodedotjs": SiNodedotjs,
    "mongodb": SiMongodb,
    "git": SiGit,
    "simple-icons:go": SiGo,
    "github": SiGithub,
    "linkedin": SiLinkedin,
    "codepen": SiCodepen,
    "email": MdEmail,
    "terminal": FaTerminal,
    "tailwind": SiTailwindcss,
    "express": SiExpress,
    "postgresql": SiPostgresql,
    "mysql": SiMysql,
    "graphql": SiGraphql,
    "docker": SiDocker,
    "aws": SiAmazonwebservices,
    "redis": SiRedis,
    "prisma": SiPrisma,
    "mongoose": SiMongoose,
    "jest": SiJest,
    "redux": SiRedux,
    "firebase": SiFirebase,
    "framer-motion": SiFramer,
    "check": FaCheck,
    "arrow-right": FaArrowRight
};

const Icon = ({ name, className }) => {
    const IconComponent = iconMap[name] || FaTerminal;
    return <IconComponent className={className} />;
};

export default Icon;
