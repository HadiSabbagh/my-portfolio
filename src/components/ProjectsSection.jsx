"use client";
import { useRef, useState, useEffect } from "react";
import StarBorder from "./StarBorderCard";
const projects = [
  {
    title: "Library Reservation & Tracking System",
    description:
      "Collaborated on a team project to solve unfair library seat usage by implementing a student check-in/out system using ID cards, enabling time-based seat reservations and promoting equitable access. Co-designed the database schema, contributed to risk assessment and mitigation planning, and authored project documentation to support maintainability and future development.",
    tech: ["C#", "ASP.NET Core", "PostgreSQL"],
  },
  {
    title: "Research - LLM for Grading",
    description:
      "Conducting research on the use of Large Language Models (LLMs) for automatically grading open-ended student responses in software engineering courses. Investigating how prompt design, question type, and answer quality affect grading accuracy and consistency compared to human evaluations.",
    tech: ["AI/ML", "Python", "LLMs"],
  },
  {
    title: "Real-Time Flight Price Prediction",
    description:
      "Developed a real-time flight price prediction system using Kafka for data streaming and PySpark for processing simulated flight data. Implemented a Random Forest Regressor to estimate ticket prices, achieving reliable predictions on a small dataset.",
    tech: ["Machine Learning", "Python", "Kafka", "Spark"],
  },
  {
    title: "Scalable DevOps Pipeline",
    description:
      "Built a scalable CI/CD pipeline using Jenkins and Docker to automate deployments. Configured AWS S3 for storage and deployed containerized apps on Kubernetes (GKE) for zero downtime.",
    tech: ["CI/CD", "Docker", "Jenkins", "Kubernetes", "AWS"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
          Projects
        </h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {projects.map((project) => (
            <StarBorder
              key={project.title}
              as="div"
              color="white"
              speed="5s"
              className="h-full flex flex-col justify-between p-6 bg-neutral-900 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-300 mb-3 flex ">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white/10 text-xs text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </StarBorder>
          ))}
        </div>
      </div>
    </section>
  );
}
