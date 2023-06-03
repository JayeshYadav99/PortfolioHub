import React, { useState } from 'react';
import axios from 'axios';

const ExperienceForm = ({ Introduction, userId, setShowIntroductionForm }) => {
  const [introduction, setIntroduction] = useState(Introduction);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.clear();
      console.log("This", Introduction, userId, setShowIntroductionForm)
      const response = await axios.put(`http://localhost:3000/portfolio/Introduction/${userId}`, { Introduction: introduction });
      // Success! Handle any necessary actions after successful PUT request
      console.log(response);
      alert('Introduction added successfully.');
      setIntroduction("");
      setShowIntroductionForm(false);
    } catch (error) {
      console.error('Failed to Edit Introduction:', error);
      alert('Failed to Edit Introduction:');
      setShowIntroductionForm(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Introduction:
        <textarea
          value={introduction}
          onChange={(e) => setIntroduction(e.target.value)}
          rows={4}
          cols={50}
          className="resize-none border rounded focus:outline-none focus:ring focus:border-blue-500"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExperienceForm;
