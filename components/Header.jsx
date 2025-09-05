"use client";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { gsap } from "gsap";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);
  const linksRef = useRef([]);

  const menuItems = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Edictions", href: "/#Edictions" },
    { name: "Certifications", href: "/#Certifications" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
  ];

  useEffect(() => {
    if (isOpen) {
      gsap.to(sidebarRef.current, { x: 0, duration: 0.5, ease: "power3.out" });

      gsap.to(overlayRef.current, {
        opacity: 0.5,
        duration: 0.3,
        display: "block",
      });

      gsap.fromTo(
        linksRef.current,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power3.out" }
      );
    } else {
      gsap.to(sidebarRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power3.in",
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        display: "none",
      });
    }
  }, [isOpen]);

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Logo
        </h1>

        {/* Links Desktop */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden text-gray-900 dark:text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform -translate-x-full z-40 shadow-lg"
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col mt-6 space-y-3 px-6">
          {menuItems.map((item, index) => (
            <a
              key={item.name}
              ref={(el) => (linksRef.current[index] = el)}
              href={item.href}
              className="text-gray-200 hover:text-blue-400"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black opacity-0 z-30 hidden"
        onClick={() => setIsOpen(false)}
      ></div>
    </header>
  );
}
