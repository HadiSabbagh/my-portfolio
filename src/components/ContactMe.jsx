"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import GlareHover from "./GlareHover";

export default function ContactMe() {
  return (
    <GlareHover
      glareColor="#ffffff"
      glareOpacity={0.3}
      glareAngle={-30}
      glareSize={300}
      transitionDuration={800}
      playOnce={false}
    >
      {/* Top-left: Contact Me */}
      <div className="flex flex-col items-center justify-center text-white text-center text-2xl sm:text-3xl md:text-4xl py-4">
        <h2 className="text-3xl font-extrabold text-[#333] m-0">Contact Me</h2>
      </div>

      {/* Bottom-center: Social Buttons (responsive) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Common button styles */}
          {[
            {
              href: "https://github.com/HadiSabbagh",
              icon: <FaGithub size={18} />,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/abdulhady-sabbagh/",
              icon: <FaLinkedin size={18} />,
              label: "LinkedIn",
            },
            {
              href: "mailto:hadi_sabbagh02@outlook.com",
              icon: <FaEnvelope size={18} />,
              label: "Email",
            },
          ].map(({ href, icon, label }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-md  text-white hover:bg-gray-100 hover:text-black transition-all duration-300 ease-in-out shadow-sm"
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}

          {/* Resume - internal link */}
          <Link
            href="https://drive.google.com/file/d/1XywgdHwV0fcgYMmkiXbSpdwkur0-IcLN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-md  text-white hover:bg-gray-100 hover:text-black transition-all duration-300 ease-in-out shadow-sm"
          >
            <FaFileAlt size={18} />
            <span>Resume</span>
          </Link>
        </div>
      </div>
    </GlareHover>
  );
}
