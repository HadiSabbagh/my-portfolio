import React from "react";

const ProjectCard = ({ icon, title, category, tech, description }) => {
  return (
    <div className="bg-[#121212] p-6 rounded-xl  transition-transform duration-300 hover:-translate-y-1 ">
      <div className="flex items-center mb-3 space-x-2">
        <div className="text-white text-xl">{icon}</div>
        <h2 className="text-white font-semibold text-lg">{title}</h2>
      </div>
      <p className="text-sm text-gray-400 mb-3">
        {category} <span className="text-gray-500"></span> {tech.join(", ")}
      </p>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

export default ProjectCard;
