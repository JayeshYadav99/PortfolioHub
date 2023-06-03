import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ExperienceForm = ({userId, setShowExperienceForm}) => {
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [experience, setExperience] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
   // Assuming you have the userId available from React Router

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
      await axios.post( `http://localhost:3000/experience/${userId}`, experienceData);
      // Success! Handle any necessary actions after successful POST request
      alert('Experience added successfully.');
    setShowExperienceForm(false);
    } catch (error) {
      console.error('Failed to add experience:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Position:
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </label>
      <label>
        Company:
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </label>
      <label>
        Experience:
        <input
          type="text"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
      </label>
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExperienceForm;
