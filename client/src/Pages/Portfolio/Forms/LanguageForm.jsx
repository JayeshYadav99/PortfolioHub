import React, { useState } from 'react';
import axios from 'axios';

const LanguageForm = ({ userId, setShowLanguageForm }) => {
  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState('');

  const handleAddLanguage = () => {
    if (language.trim() !== '') {
      setLanguages([...languages, language]);
      setLanguage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:3000/language/${userId}`, { languages: languages });
      // Success! Handle any necessary actions after successful POST request
      alert('Languages added successfully.');
      setLanguages([]);
      setShowLanguageForm(false);
    } catch (error) {
      console.error('Failed to add languages:', error);
      alert('Failed to add languages.');
      setShowLanguageForm(false);
    }
  };    

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Language
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleAddLanguage}>+</button>
      </div>
      <div>
        Selected Languages:
        <ul>
          {languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default LanguageForm;
