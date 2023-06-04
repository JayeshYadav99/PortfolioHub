import React from "react";

export default function About({ Experience }) {
  console.log(Experience);
  return (
    <div className="bg-gray-900 text-white">
      <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-40">
        {Experience.map((experience, index) => (
          <li className="mb-10 ml-4" key={index}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {experience.endDate}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {experience.postion}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {experience.Experience}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
