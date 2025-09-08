"use client";

import React, { useEffect, useRef } from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaGithub } from "react-icons/fa";
import { gsap } from "gsap";
const Hero = () => {
  const titleRef = useRef(null);
  const bgRef = useRef(null);
  const text = "Hi, I’m Noureddine, Software Developer";

  const colors = ["#219ebc", "#8ecae6"]; // gradient for title

  // Typing effect
  useEffect(() => {
    const titleEl = titleRef.current;
    titleEl.innerHTML = "";
    let i = 0;

    function type() {
      if (i < text.length) {
        const span = document.createElement("span");
        span.textContent = text[i];
        span.style.background = `linear-gradient(90deg, ${colors.join(",")})`;
        span.style.backgroundClip = "text";
        span.style.webkitBackgroundClip = "text";
        span.style.color = "transparent";
        titleEl.appendChild(span);
        i++;
        setTimeout(type, 120);
      }
    }
    type();
  }, []);

  // GSAP animation for dynamic background
  useEffect(() => {
    const bg = bgRef.current;
    gsap.to(bg, {
      backgroundPosition: "200% 50%",
      duration: 40,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section className="relative w-full  h-screen pt-30 md:pt-0  overflow-hidden bg-[#005782]">
      {/* Dynamic Gradient Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(270deg, #023047, #0a3f5f, #023047, #ffffff20)",
          backgroundSize: "400% 400%",
          filter: "blur(70px)",
        }}
      ></div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-5 md:px-20 gap-10">
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#219ebc]"
          />
          
        </div>

        {/* Text content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-5">
          <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold"></h1>

          <p className="max-w-md text-gray-200 text-lg md:text-xl">
            I create modern, responsive websites with smooth and user-friendly design.
          </p>

          {/* Buttons */}
          <div className="flex gap-5 flex-wrap mt-4">
            <a
              href="/cv.pdf"
              download
              className="px-6 py-3 bg-[#219ebc] hover:bg-[#8ecae6] text-white rounded-md transition-colors"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-[#8ecae6] hover:bg-[#219ebc] text-white rounded-md transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Social icons */}
          <div className="flex gap-6 mt-5 text-2xl text-white">
            <a href="#" className="hover:text-[#219ebc] transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#219ebc] transition-colors"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-[#219ebc] transition-colors"><FaYoutube /></a>
            <a href="#" className="hover:text-[#219ebc] transition-colors"><FaGithub /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
