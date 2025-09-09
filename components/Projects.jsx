"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaGlobe } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A modern online store with cart, checkout, and responsive UI.",
    image: "/images/project1.jpg",
    live: "https://example.com",
    source: "https://github.com/example/ecommerce",
    category: "Web",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Personal portfolio showcasing skills and projects.",
    image: "/images/project2.jpg",
    live: "https://example.com",
    source: "https://github.com/example/portfolio",
    category: "Web",
  },
  {
    id: 3,
    title: "Mobile Chat App",
    description: "Cross-platform mobile chat app with real-time messaging.",
    image: "/images/project3.jpg",
    live: "https://example.com",
    source: "https://github.com/example/chat-app",
    category: "Mobile",
  },
  {
    id: 4,
    title: "Admin Dashboard",
    description: "Dashboard with charts, authentication, and dark mode.",
    image: "/images/project4.jpg",
    live: "https://example.com",
    source: "https://github.com/example/dashboard",
    category: "Dashboard",
  },
];

const categories = ["All", "Web", "Mobile", "Dashboard"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const cardsRef = useRef([]);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#projects",
            start: "top 80%",
            toggleActions: "play none none none", // يشتغل مرة واحدة فقط
          },
        }
      );
    });

    return () => ctx.revert();
  }, []); 

  return (
    <section
      id="projects"
      className="bg-gray-950 text-white py-20 px-6 md:px-12"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Projects
      </h2>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              activeCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-800 hover:bg-gray-700 text-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.03] transition duration-300 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs bg-blue-600 px-2 py-1 rounded-md">
                  {project.category}
                </span>
                <h3 className="text-2xl font-semibold mt-3 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition"
                >
                  <FaGlobe size={16} /> Live Demo
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition"
                >
                  <FaGithub size={16} /> Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
