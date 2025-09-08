'use client';

import React, { useEffect, useRef } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker, FaAws, FaSyncAlt, FaMobileAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript, SiPostgresql, SiRedux } from 'react-icons/si';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'JavaScript', icon: <FaJs size={36} className="text-yellow-400" />, level: 95 },
  { name: 'TypeScript', icon: <SiTypescript size={36} className="text-blue-500" />, level: 85 },
  { name: 'CSS', icon: <FaCss3Alt size={36} className="text-blue-400" />, level: 90 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={36} className="text-teal-400" />, level: 85 },
  { name: 'React', icon: <FaReact size={36} className="text-cyan-400" />, level: 90 },
  { name: 'Next.js', icon: <SiNextdotjs size={36} className="text-white" />, level: 85 },
  { name: 'React Native', icon: <FaMobileAlt size={36} className="text-cyan-500" />, level: 80 },
  { name: 'Docker', icon: <FaDocker size={36} className="text-blue-600" />, level: 70 },
  { name: 'AWS', icon: <FaAws size={36} className="text-orange-400" />, level: 65 },
  { name: 'MongoDB', icon: <SiMongodb size={36} className="text-green-400" />, level: 75 },
  { name: 'Node.js', icon: <FaNodeJs size={36} className="text-green-500" />, level: 80 },
  { name: 'PostgreSQL', icon: <SiPostgresql size={36} className="text-blue-700" />, level: 70 },
  { name: 'GSAP', icon: <FaSyncAlt size={36} className="text-green-300" />, level: 80 },
  { name: 'Redux', icon: <SiRedux size={36} className="text-purple-500" />, level: 85 },
];

const Skills = () => {
  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((el, i) => {
      const circle = el.querySelector('.progress-circle');
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;

      circle.style.strokeDasharray = circumference;
      circle.style.strokeDashoffset = circumference;

      gsap.to(circle, {
        strokeDashoffset: circumference - (skills[i].level / 100) * circumference,
        duration: 1.5,
        delay: i * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
      });

      const number = el.querySelector('.progress-number');
      gsap.fromTo(
        number,
        { innerText: 0 },
        {
          innerText: skills[i].level,
          duration: 1.5,
          delay: i * 0.1,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        }
      );

      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
      });
    });
  }, []);

  return (
    <section className="bg-gray-900 py-20 px-5 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white border-b-2 border-gray-700 pb-3">
           Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => (refs.current[index] = el)}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl flex flex-col items-center justify-center shadow-xl hover:scale-105 transform transition-all duration-300 relative"
            >
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45"
                    className="stroke-gray-700 stroke-4 fill-transparent"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45"
                    className="progress-circle stroke-indigo-500 stroke-4 fill-transparent transform -rotate-90 origin-center"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {skill.icon}
                  <span className="progress-number text-white font-bold text-sm mt-1">0</span>
                </div>
              </div>
              <span className="text-white font-semibold mt-4 text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
