"use client";
import { useRef, useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { ImLibrary } from "react-icons/im";
import { GiArchiveResearch } from "react-icons/gi";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { RxLoop } from "react-icons/rx";


const projects = [
  {
    icon:<ImLibrary />,
    title: "Library Reservation & Tracking System",
    description:
      "Collaborated on a team project to solve unfair library seat usage by implementing a student check-in/out system using ID cards, enabling time-based seat reservations and promoting equitable access. Co-designed the database schema, contributed to risk assessment and mitigation planning, and authored project documentation to support maintainability and future development.",
    tech: ["C#", "ASP.NET Core", "PostgreSQL"],
    githubLink: "", //https://github.com/HadiSabbagh/LRTS
  },
  {
    icon:<GiArchiveResearch />,
    title: "Research - LLM for Grading",
    description:
      "Conducting research on the use of Large Language Models (LLMs) for automatically grading open-ended student responses in software engineering courses. Investigating how prompt design, question type, and answer quality affect grading accuracy and consistency compared to human evaluations.",
    tech: ["AI/ML", "Python", "LLMs"],
    githubLink: "",
  },
  {
    icon:<MdOutlineFlightTakeoff />,
    title: "Real-Time Flight Price Prediction",
    description:
      "Developed a real-time flight price prediction system using Kafka for data streaming and PySpark for processing simulated flight data. Implemented a Random Forest Regressor to estimate ticket prices, achieving reliable predictions on a small dataset.",
    tech: ["Machine Learning", "Python", "Kafka", "Spark"],
    githubLink:
      "", //https://github.com/HadiSabbagh/Real-time-Flight-Price-Analytics
  },
  {
    icon:<RxLoop />,
    title: "Scalable DevOps Pipeline",
    description:
      "Built a scalable CI/CD pipeline using Jenkins and Docker to automate deployments. Configured AWS S3 for storage and deployed containerized apps on Kubernetes (GKE) for zero downtime.",
    tech: ["CI/CD", "Docker", "Jenkins", "Kubernetes", "AWS"],
    githubLink: "", //https://github.com/HadiSabbagh/swe304-project3
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="snap-start w-full py-16 bg-neutral-950 sm:mt-24 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
          Projects
        </h2>

        <div className="px-6 py-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 flex justify-center">
          {projects.map((project, index) => (
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
