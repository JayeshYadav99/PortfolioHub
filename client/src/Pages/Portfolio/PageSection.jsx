import React from "react";
import "./PageSection.css"; // Import the CSS file for styling
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaStackOverflow,
} from "react-icons/fa";

const PageSection = () => {
  return (
    <div className="relative">
      <div className="bg-gray-900 text-white p-8 relative z-10 flex flex-row">
        <div className="flex items-center">
          <img
            src="https://avatars.githubusercontent.com/u/107855172?v=4"
            alt="Nishit's profile picture"
            className="w-21 h-21 mb-4"
          />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-blue-500 fade-in">
              I Am Jayesh Yadav
            </h2>
          </div>
          <div className="mb-4">
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
          </div>
          <div className="mb-8">
            <p className="opacity-100 transform-none">
              Bona fide photochromic{" "}
              <a
                className="text-blue-500 hover:underline"
                aria-label="Check out my Lens"
                href="/articles"
              >
                Lens
              </a>{" "}
              enthusiast - sunlight or indoors, I've got it covered. I tread the
              path of minimalism, finding beauty in simplicity and order. When
              I'm not crafting beautiful web experiences, you can find me
              reading{" "}
              <a
                className="text-blue-500 hover:underline"
                aria-label="Go to Articles Page And Check What I Read"
                href="/articles"
              >
                Articles
              </a>{" "}
              or swaying to the rhythm of Pop Music &amp; Jazz, losing myself in
              the captivating flow of melodies. Anyways, you can{" "}
              <a
                className="text-blue-500 hover:underline"
                aria-label="Go to Contact Page"
                href="/contact"
              >
                Contact Me
              </a>
              .
            </p>
          </div>
          <div className="flex items-center justify-end">
            <p className="text-sm">View More</p>
            <FaGithub className="w-4 h-4 ml-1 text-white" />
            <FaLinkedin className="w-4 h-4 ml-1 text-white" />
            <FaYoutube className="w-4 h-4 ml-1 text-white" />
            <FaTwitter className="w-4 h-4 ml-1 text-white" />
            <FaStackOverflow className="w-4 h-4 ml-1 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSection;
