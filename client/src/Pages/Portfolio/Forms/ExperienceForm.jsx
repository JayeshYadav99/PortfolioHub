import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const FormLabel = ({ text }) => (
  <label className="text-white font-bold mb-2">{text}</label>
);

const FormInput = ({ type, value, onChange }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    className="block border rounded focus:outline-none focus:ring focus:border-blue-500 px-3 py-2"
  />
);

const FormButton = ({ text }) => (
  <button type="submit" className="bg-blue-500 text-white py-2 px-4 mt-4">
    {text}
  </button>
);

const ExperienceForm = ({ userId, setShowExperienceForm }) => {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [experience, setExperience] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const experienceData = {
      position,
      company,
      Experience: experience,
      startDate,
      endDate,
    };

    try {
      await axios.post(
        `http://localhost:3000/experience/${userId}`,
        experienceData
      );
      // Success! Handle any necessary actions after successful POST request
      alert("Experience added successfully.");
      setShowExperienceForm(false);
    } catch (error) {
      console.error("Failed to add experience:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <FormLabel text="Position:" />
        <FormInput
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <FormLabel text="Company:" />
        <FormInput
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <FormLabel text="Experience:" />
        <FormInput
          type="text"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <FormLabel text="Start Date:" />
        <FormInput
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <FormLabel text="End Date:" />
        <FormInput
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <FormButton text="Submit" />
    </form>
  );
};

export default ExperienceForm;
