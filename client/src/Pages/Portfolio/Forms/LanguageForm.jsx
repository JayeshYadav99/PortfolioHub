import React, { useState } from "react";
import axios from "axios";

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

const LanguageForm = ({ userId, setShowLanguageForm }) => {
  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState("");

  const handleAddLanguage = () => {
    if (language.trim() !== "") {
      setLanguages([...languages, language]);
      setLanguage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:3000/language/${userId}`, {
        languages: languages,
      });
      // Success! Handle any necessary actions after successful POST request
      alert("Languages added successfully.");
      setLanguages([]);
      setShowLanguageForm(false);
    } catch (error) {
      console.error("Failed to add languages:", error);
      alert("Failed to add languages.");
      setShowLanguageForm(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <FormLabel text="Language:" />
        <div className="flex">
          <FormInput
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
          <button
            type="button"
            onClick={handleAddLanguage}
            className="bg-blue-500 text-white py-2 px-4 ml-2"
          >
            +
          </button>
        </div>
      </div>
      <div className="mb-4">
        <FormLabel text="Selected Languages:" />
        <ul>
          {languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </div>
      <FormButton text="Submit" />
    </form>
  );
};

export default LanguageForm;
