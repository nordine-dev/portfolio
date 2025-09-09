"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Education() {
  const sectionRef = useRef(null);

  const educationData = [
    {
      title: "Bachelor in Computer Science",
      school: "University of Example",
      year: "2016 - 2020",
      desc: "Focused on software engineering, web development, and algorithms.",
    },
    {
      title: "Full-Stack Development Bootcamp",
      school: "Code Academy",
      year: "2021",
      desc: "Hands-on training with React, Next.js, Node.js, and MongoDB.",
    },
    {
      title: "Front-End Development",
      school: "Online Courses",
      year: "2022",
      desc: "Specialized in building responsive websites using React and Tailwind CSS.",
    },
    {
      title: "Continuous Learning",
      school: "Self-Learning",
      year: "Ongoing",
      desc: "Always keeping up-to-date with the latest technologies in software development.",
    },
  ];

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".edu-item");
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
      className="w-full min-h-screen bg-gray-950 text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-indigo-400">
          Education
        </h2>

        <div className="relative border-l-4 border-white pl-8">
          {educationData.map((edu, index) => (
            <div key={index} className="edu-item mb-12 relative group">
              {/* الدائرة على الخط */}
              <div className="absolute -left-[26px] top-1 w-6 h-6 rounded-full bg-white border-4 border-gray-900 group-hover:scale-125 transition-transform" />
              {/* البطاقة */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-white/30 transition">
                <h3 className="text-xl font-semibold text-indigo-300">
                  {edu.title}
                </h3>
                <p className="text-gray-400 mt-1">{edu.school}</p>
                <p className="text-sm text-gray-500">{edu.year}</p>
                <p className="mt-4 text-gray-300">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
