import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaGithub } from "react-icons/fa";

const menuItems = [
  { name: "About", href: "/#about" },
  { name: "Blog", href: "/#blog" },
  { name: "Contact", href: "/#contact" },
];

const socialLinks = [
  { icon: <FaFacebookF />, href: "https://facebook.com" },
  { icon: <FaInstagram />, href: "https://instagram.com" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
  { icon: <FaYoutube />, href: "https://youtube.com" },
  { icon: <FaGithub />, href: "https://github.com" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 dark:text-gray-400 ">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">About Us</h2>
          <p className="text-gray-300">
            We create modern and responsive web applications. Our team is dedicated to delivering the best user experience.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Quick Links</h2>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Contact</h2>
          <p>Email:noureddine.com</p>
          <p>Phone: +212 773 837119</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-blue-400 transition-transform transform hover:scale-110 duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-gray-500 text-sm">
        © 2025 All rights reserved.
      </div>
    </footer>
  );
}
