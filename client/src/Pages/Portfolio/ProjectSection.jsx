import React from "react";
import "./ProjectSection.css"; // Import your CSS file

function ProjectSection() {
  return (
    <section className="portfolio-section bg-gray-900" id="portfolio">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Project Gallery</h2>
            <p>Use all the same size pictures :)</p>
          </div>
        </div>
        <div className="portfolio-menu mt-2 mb-4">
          <nav className="controls">
            <button type="button" className="control outline" data-filter="all">
              All
            </button>
            <button
              type="button"
              className="control outline"
              data-filter=".web"
            >
              Web Design
            </button>
            <button
              type="button"
              className="control outline"
              data-filter=".dev"
            >
              Development
            </button>
            <button type="button" className="control outline" data-filter=".wp">
              WordPress
            </button>
          </nav>
        </div>
        <ul className="row portfolio-item">
          {/* Repeat the following code block for each portfolio item */}
          <li className="mix dev col-xl-3 col-md-4 col-12 col-sm-6 pd">
            <img
              src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Image description"
            />
            <div className="portfolio-overlay">
              <div className="overlay-content">
                <p className="category">Project Name</p>
                <a href="#" title="View Project" target="_blank">
                  <div className="magnify-icon">
                    <p>
                      <span>
                        <i className="fa fa-link" aria-hidden="true"></i>
                      </span>
                    </p>
                  </div>
                </a>
                <a
                  data-fancybox="item"
                  title="click to zoom-in"
                  href="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                >
                  <div className="magnify-icon">
                    <p>
                      <span>
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </span>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </li>
          {/* Repeat the code block above for other portfolio items */}
        </ul>
      </div>
    </section>
  );
}

export default ProjectSection;
