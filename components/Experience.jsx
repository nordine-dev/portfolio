"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Experience() {
  const sectionRef = useRef(null);

  const experienceData = [
    {
      title: "Front-End Developer",
      company: "Tech Solutions",
      year: "2022 - Present",
      desc: "Developing modern, responsive websites with React, Next.js, and Tailwind CSS.",
    },
    {
      title: "Full-Stack Developer Intern",
      company: "Code Academy",
      year: "2021",
      desc: "Worked on web apps using Node.js, Express, and MongoDB with a React front-end.",
    },

  ];

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".exp-item");
    gsap.from(items, {
      opacity: 0,
      y: 80,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-gray-900 text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-indigo-400">
          Experience
        </h2>

        <div className="relative border-l-4 border-white pl-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="exp-item mb-12 relative group">
              <div className="absolute -left-[26px] top-1 w-6 h-6 rounded-full bg-white border-4 border-gray-900 group-hover:scale-125 transition-transform" />
              <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-white/30 transition">
                <h3 className="text-xl font-semibold text-indigo-300">
                  {exp.title}
                </h3>
                <p className="text-gray-400 mt-1">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.year}</p>
                <p className="mt-4 text-gray-300">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
