import React from "react";
import "./PageSection.css"; // Import the CSS file for styling
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaStackOverflow,
} from "react-icons/fa";

const PageSection = ({ Name,Introduction,image}) => {
  return (
    <div className="relative">
      <div className="bg-gray-900 text-white p-8 relative z-10 flex flex-row">
        <div className="flex items-center">
          <img
            src={image}
            alt="Nishit's profile picture"
            className="w-21 h-21 mb-4"
          />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-blue-500 fade-in">
              I am {Name}
            </h2>
          </div>
          {/* <div className="mb-4">
            <p className="opacity-100 transform-none typing-animation">
              Your friendly neighborhood frontend developer, UX architect, and
              JavaScript engineer. I spend my days (and often nights) painting
              the Internet canvas with{" "}
              <a
                className="text-blue-500 hover:underline"
                aria-label="Go to Projects Page"
                href="/projects"
              >
                Projects
              </a>{" "}
              and lines of code, turning zeroes and ones into immersive,
              interactive experiences.
            </p>
          </div> */}
          <div className="mb-8">
            <p className="opacity-100 transform-none">
            {Introduction}
              <a
                className="text-blue-500 hover:underline"
                aria-label="Go to Articles Page And Check What I Read"
                href="/articles"
              >
                Articles
              </a>{" "}
              or swaying to the rhythm of Pop Music &amp; Jazz, losing myself in
              the captivating flow of melodies.
            </p>
          </div>
          <div className="social-icons">
            <FaGithub className="social-icon github" />
            <FaLinkedin className="social-icon linkedin" />
            <FaYoutube className="social-icon youtube" />
            <FaTwitter className="social-icon twitter" />
            <FaStackOverflow className="social-icon stackoverflow" />
          </div>
          <div className="flex items-center justify-end text-center">
            <p className="text-sm">View More</p>

            <svg
              className="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 4.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSection;
