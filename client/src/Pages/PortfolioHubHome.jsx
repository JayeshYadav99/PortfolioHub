import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from './Context';

export default function EduHome() {
  
;
  return (
    <div>
      <section>
        <div className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Welcome to PortfolioHub
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"></p>
              <Link
                to="/Auth" // Update the route to your authentication page
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get started
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src="portfoliohub-logo.png" alt="mockup" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              PortfolioHub- Personal Portfolio Enhancement Platform
              </h2>
              <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                PortfolioHub is a platform designed to enhance personal portfolios and assist individuals in improving their own profiles. It provides a user-friendly interface with a range of templates to simplify the process of building impressive portfolio websites. Whether you're a seasoned professional or a beginner, Portfolify offers tools and resources to showcase your skills and make a meaningful impact.
              </p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1902/1902726.png"
                    alt="mockup"
                    width="40px"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                Customizable portfolio templates
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                Choose from a variety of professionally designed templates to showcase your personal portfolio. Customize the layout, colors, and fonts to match your style.
                </p>
                <Link
                  to="/authentication" // Update the route to your authentication page
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline space-y- "
                >
                  Check out here
                </Link>
              </div>

              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3261/3261308.png"
                    alt="mockup"
                    width="40px"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                Flexible sections
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                Create and organize sections such as About Me, Experience, Projects, Skills, Education, and Contact Information. Easily rearrange the sections to highlight your strengths and achievements.

                </p>
                <Link
                  to="/Repo" // Update the route to your GitHub integration page
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Check out here
                </Link>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1048/1048966.png"
                    alt="mockup"
                    width="40px"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                Showcase your projects:
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                Display your projects with images, descriptions, and relevant details. Engage potential clients or employers by demonstrating your skills and expertise.
    </p>

                <Link
                  to="/portfolio" // Update the route to your portfolio page
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Check out here
                </Link>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1048/1048966.png"
                    alt="mockup"
                    width="40px"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Learning Resources and Tutorials
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Curate a collection of learning resources, tutorials, and coding challenges tailored to various programming languages and courses. Gamify the learning experience by awarding badges, points, and achievements as students progress through different coding challenges.
                </p>
                <Link
                  to="/resources" // Update the route to your resources page
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Check out here
                </Link>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3488/3488426.png"
                    alt="mockup"
                    width="40px"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                Highlight your skills
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                Emphasize your skills, certifications, and achievements. Let others know about your expertise and what sets you apart from others in your field.
    </p>

                
                <Link
                  to="/hackathon" // Update the route to your hackathon page
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Check out here
                </Link>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1048/1048966.png"
                    alt="mockup"
                    width="40px"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                Add interactive elements
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                Incorporate interactive
            features like hover effects, image galleries, sliders, or
            interactive infographics to captivate your audience.
                </p>
                <Link
                  to="/mongodb" // Update the route to your MongoDB integration page
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Check out here
                </Link>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1902/1902726.png"
                    alt="mockup"
                    width="40px"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Fun Factor - Coding Challenges and Leaderboards
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Implement coding challenges, quizzes, and puzzles within Campus CodeHub to engage students and test their coding skills. Display real-time leaderboards and rankings based on students' performance in challenges and activities.
                </p>
                <Link
                  to="/fun-factor" // Update the route to your fun factor page
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Check out here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
