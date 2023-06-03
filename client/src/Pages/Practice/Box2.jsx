import React from "react";

export default function Box2(props) {
  return (
    <div className="border border-black p-4 flex m-4">
      <div className="w-4/5">
        <h2 className="text-lg font-bold">{props.Problem}</h2>
        <p>{props.type}</p>
        <span className="text-sm text-gray-500">Difficulty: {props.level}</span>
      </div>
      <div className="w-1/5 flex justify-end">
        <button className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white py-2 px-4 rounded transition-colors duration-300">
          <a href={props.link}> Solve Problem </a>
        </button>
      </div>
    </div>
  );
}
