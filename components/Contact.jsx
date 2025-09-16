"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

export default function Contact() {
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    gsap.from(formRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(infoRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });
  }, []);

  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div
          ref={formRef}
          className="bg-gray-800 p-10 rounded-2xl shadow-xl flex flex-col"
        >
          <h2 className="text-4xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Get in Touch
          </h2>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-xl bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-4 rounded-xl bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-colors p-4 rounded-xl font-semibold text-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div
          ref={infoRef}
          className="flex flex-col justify-center space-y-6 bg-gray-800 p-10 rounded-2xl shadow-xl"
        >
          <h2 className="text-4xl font-bold mb-2">Contact Info</h2>
          <p className="text-gray-300">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
          <div className="flex items-center gap-4 text-gray-200 hover:text-white transition">
            <HiOutlineMail className="text-2xl text-blue-400" />
            <span>contact@example.com</span>
          </div>
          <div className="flex items-center gap-4 text-gray-200 hover:text-white transition">
            <HiOutlinePhone className="text-2xl text-green-400" />
            <span>+123 456 7890</span>
          </div>
          <div className="flex items-center gap-4 text-gray-200 hover:text-white transition">
            <HiOutlineLocationMarker className="text-2xl text-red-400" />
            <span>Casablanca, Morocco</span>
          </div>
        </div>
      </div>
    </section>
  );
}
