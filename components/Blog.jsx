"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const blogPosts = [
  {
    title: "How to Build a Full-Stack App with Next.js",
    excerpt:
      "Learn step-by-step how to create a full-stack application using Next.js, Tailwind CSS, and Node.js.",
    image: "/blog/nextjs.png",
    date: "Sep 2025",
    link: "#",
  },
  {
    title: "Mastering React Hooks",
    excerpt:
      "Understand useState, useEffect, useReducer and custom hooks to write cleaner React code.",
    image: "/blog/react-hooks.png",
    date: "Aug 2025",
    link: "#",
  },
  {
    title: "Tailwind CSS Tips & Tricks",
    excerpt:
      "Learn advanced Tailwind CSS techniques to create modern, responsive, and interactive designs.",
    image: "/blog/tailwind.png",
    date: "Jul 2025",
    link: "#",
  },
];

export default function Blog() {
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
    <section className="bg-gray-950 text-white  py-20 px-6 md:px-12 ">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-wide">
        Blog
      </h2>

      <div
        ref={containerRef}
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 "
      >
        {blogPosts.map((post, idx) => (
          <a
            key={idx}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-3xl p-4 flex flex-col items-start 
                       shadow-lg hover:shadow-[0_0_30px_#4f46e5] transform 
                       hover:scale-105 hover:-translate-y-2 transition-all 
                       duration-500 ease-out cursor-pointer"
          >
            <div className="w-full h-48 relative rounded-xl overflow-hidden mb-4">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-400 text-sm mb-2">{post.excerpt}</p>
            <p className="text-gray-500 text-xs mt-auto">{post.date}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
