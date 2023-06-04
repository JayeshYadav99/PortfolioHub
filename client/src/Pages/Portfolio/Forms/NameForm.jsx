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

const ExperienceForm = ({ Name, userId, setShowNameForm }) => {
  const [name, setName] = useState(Name);
  // Assuming you have the userId available from React Router

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3000/portfolio/Name/${userId}`, {
        Name: name,
      });
      // Success! Handle any necessary actions after successful PUT request
      alert("Name edited successfully.");
      setName("");
      setShowNameForm(false);
    } catch (error) {
      console.error("Failed to Edit Name:", error);
      alert("Failed to Edit Name:");
      setShowNameForm(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <FormLabel text="Name:" />
        <FormInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <FormButton text="Submit" />
    </form>
  );
};

export default ExperienceForm;
