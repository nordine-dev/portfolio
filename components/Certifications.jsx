"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const certificationsData = [
  {
    title: "Full-Stack Web Development",
    from: "Coursera",
    by: "University of XYZ",
    date: "Jan 2025",
    image: "/certificates/fullstack.png",
    link: "#",
  },
  {
    title: "React JS Advanced",
    from: "Coursera",
    by: "Meta",
    date: "Feb 2025",
    image: "/certificates/react.png",
    link: "#",
  },
  {
    title: "Node.js & Express",
    from: "Coursera",
    by: "IBM",
    date: "Mar 2025",
    image: "/certificates/node.png",
    link: "#",
  },
];

export default function Certifications() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = Array.from(containerRef.current.children);

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="bg-gray-900 text-white py-16 px-4 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-wide">
        Certifications
      </h2>

      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {certificationsData.map((cert, idx) => (
          <a
            key={idx}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-3xl p-6 flex flex-col items-center text-center 
                       shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 
                       transition-all duration-500 ease-out cursor-pointer"
          >
            <div className="w-32 h-32 relative mb-4 rounded-xl overflow-hidden">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">{cert.title}</h3>
            <p className="text-gray-400 text-sm">{`From: ${cert.from}`}</p>
            <p className="text-gray-400 text-sm">{`By: ${cert.by}`}</p>
            <p className="text-gray-500 text-sm mt-1">{cert.date}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
