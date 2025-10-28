"use client";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdOutlineWork } from "react-icons/rx";


const experience = [
  {
    icon: <MdOutlineWork />,
    title: "Internship 1",
    description: "Designed and developed a modular AI-based grading system using Google Gemini Flash 2.5 LLM for multimodal batch evaluation (text, PDFs, images), built a responsive website, and engineered extensibility with multi-LLM support and reusable prompt templates, delivering personalized feedback reports to teachers and streamlining rubric-based grading for future modifications.",
    tech: ["AI/ML", "Python", "LLMs", "Firebase", "React", "Next.js"],
    githubLink: "", 
  },
  {
    icon: <MdOutlineWork />,
    title: "Internship 2",
    description: "Resolved 15+ production bugs and enforced compile-time warnings as errors in .NET 9 to improve code quality and reduce runtime crashes, enhanced culture localization workflows by updating domain models and resource files, and prototyped Redis for output caching, demonstrating performance improvements and enabling scalable request handling.",
    tech: ["C#", ".NET 9", "Redis", "SQL Server"],
    githubLink: "", 
  },
  
];

export default function experienceSection() {
  return (
    <section id="experience" className="snap-start w-full py-16 bg-neutral-950 sm:mt-24 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
          Experience
        </h2>

        <div className="px-6 py-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 flex justify-center">
          {experience.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative  p-[2px] rounded-xl bg-gradient-to-br from-gray-800 via-gray-600 to-gray-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-shadow duration-300"
            >
              <div className="bg-[#121212] rounded-xl p-6 h-full">
                {project.githubLink ? (
                  <Link target="_blank" href={project.githubLink}>
                    <ProjectCard {...project} />
                  </Link>
                ) : (
                  <div>
                    <ProjectCard {...project} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
