import React, { useState } from "react";
import "./ProjectSection.css";
const ProjectSection = () => {
  const modalInfo = {
    1: {
      title: "Project 1",
      info: "...",
      link: "https://devpost.com/software/padawan-academy",
      github: "#",
    },
    2: {
      title: "Project 2",
      info: "...",
      link: "#",
      github: "#",
    },
    3: {
      title: "Project 3",
      info: "...",
      link: "#",
      github: "#",
    },
    4: {
      title: "Project 4",
      info: "....",
      link: "#",
      github: "#",
    },
    5: {
      title: "Project 5",
      info: "...",
      link: "#",
      github: "#",
    },
    6: {
      title: "Project 6",
      info: "...",
      link: "#",
      github: "#",
    },
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    id: null,
    img: "",
    title: "",
    info: "",
    link: "",
    github: "",
  });

  const openModal = (id, img) => {
    setModalContent({
      id,
      img,
      title: modalInfo[id].title,
      info: modalInfo[id].info,
      link: modalInfo[id].link,
      github: modalInfo[id].github,
    });
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <section>
      <h1>Projects</h1>

      <div className="container">
        <div className="item" id="1">
          <img
            src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/438/782/datas/medium.png"
            alt=""
          />
          <div className="text">
            <h3>PROJECT 1</h3>
            <p>Short Description</p>
          </div>
          <div
            className="button"
            onClick={() =>
              openModal(
                1,
                "https://images.unsplash.com/photo-1508124780861-b1687f9a13e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f841d43a63c085e930aa5b6b33e89a9f&auto=format&fit=crop&w=1385&q=80"
              )
            }
          >
            Learn More
          </div>
        </div>
        <div className="item" id="2">
          <img
            src="https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/490/716/datas/medium.gif"
            alt=""
          />
          <div className="text">
            <h3>PROJECT 1</h3>
            <p>Short Description</p>
          </div>
          <div
            className="button"
            onClick={() =>
              openModal(
                1,
                "https://images.unsplash.com/photo-1508124780861-b1687f9a13e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f841d43a63c085e930aa5b6b33e89a9f&auto=format&fit=crop&w=1385&q=80"
              )
            }
          >
            Learn More
          </div>
        </div>
        <div className="item" id="3">
          <img
            src="https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/438/793/datas/medium.jpg"
            alt=""
          />
          <div className="text">
            <h3>PROJECT 1</h3>
            <p>Short Description</p>
          </div>
          <div
            className="button"
            onClick={() =>
              openModal(
                1,
                "https://images.unsplash.com/photo-1508124780861-b1687f9a13e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f841d43a63c085e930aa5b6b33e89a9f&auto=format&fit=crop&w=1385&q=80"
              )
            }
          >
            Learn More
          </div>
        </div>
        <div className="item" id="1">
          <img
            src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/473/140/datas/medium.jpeg"
            alt=""
          />
          <div className="text">
            <h3>PROJECT 1</h3>
            <p>Short Description</p>
          </div>
          <div
            className="button"
            onClick={() =>
              openModal(
                1,
                "https://images.unsplash.com/photo-1508124780861-b1687f9a13e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f841d43a63c085e930aa5b6b33e89a9f&auto=format&fit=crop&w=1385&q=80"
              )
            }
          >
            Learn More
          </div>
        </div>

        {/* Repeat the above structure for other projects */}
      </div>

      {/* Modal */}
      {modalVisible && (
        <div id="preview" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img id="img" src={modalContent.img} alt="" />
            <div id="details">
              <h3 id="title">{modalContent.title}</h3>
              <p id="info">{modalContent.info}</p>
              <div
                className="button"
                id="live"
                onClick={() => window.open(modalContent.link, "_blank")}
              >
                View
              </div>
              <i
                className="fab fa-github-square"
                id="github"
                onClick={() => window.open(modalContent.github, "_blank")}
              ></i>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
