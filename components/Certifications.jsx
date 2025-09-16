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
    link: "/certificates/fullstack.png",
  },
  {
    title: "React JS Advanced",
    from: "Coursera",
    by: "Meta",
    date: "Feb 2025",
    image: "/certificates/react.png",
    link: "/certificates/react.png",
  },
  {
    title: "Node.js & Express",
    from: "Coursera",
    by: "IBM",
    date: "Mar 2025",
    image: "/certificates/node.png",
    link: "/certificates/node.png",
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
    <section className="bg-gray-900 text-white  py-20 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-wide">
        Certifications
      </h2>

      <div
        ref={containerRef}
        className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {certificationsData.map((cert, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-3xl p-6 flex flex-col items-center text-center
                       shadow-lg hover:shadow-[0_0_30px_#4f46e5] transform 
                       hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out"
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
            <p className="text-gray-500 text-sm mt-2 mb-4">{cert.date}</p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 
                         transition-colors duration-300"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
