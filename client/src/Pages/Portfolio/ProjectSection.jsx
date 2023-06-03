import React from "react";
import "./ProjectSection.css";
const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/490/716/datas/medium.gif",
      title: "PROJECT 1",
      description:
        "CodeHubs is a dynamic online platform designed for students",
      link: "https://devpost.com/software/codehubs",
    },
    {
      id: 2,
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/484/817/datas/medium.png",
      title: "Contentify",
      description: "AI Power Tool ",
      link: "https://devpost.com/software/contentify",
    },
    // Add more project objects as needed
  ];

  const openProjectLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section>
      <h1 className="text-white ">Projects</h1>

      <div className="container">
        {projects.map((project) => (
          <div className="item" key={project.id}>
            <img src={project.image} alt="" />
            <div className="text ">
              <h3 className="text-white">{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div
              className="button"
              onClick={() => openProjectLink(project.link)}
            >
              Learn More
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <div id="preview" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <img id="img" src="" alt="" />
          <div id="details">
            <h3 id="title"></h3>
            <p id="info">Some text</p>
            <div className="button" id="live">
              View
            </div>
            <i className="fab fa-github-square" id="github"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
