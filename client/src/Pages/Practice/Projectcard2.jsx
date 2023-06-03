import React from "react";

const ProjectCard2 = ({ image, name, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 border border-gray-300">
      <img src={image} alt={name} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>
      <div className="px-6 py-4">
        <a
          href={link}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard2;
