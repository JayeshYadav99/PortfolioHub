import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ExperienceForm = ({Name, userId, setShowNameForm}) => {
   const [name, setName] = useState(Name);
   // Assuming you have the userId available from React Router

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    try {
      await axios.put( `http://localhost:3000/portfolio/Name/${userId}`,{ Name: name });
      // Success! Handle any necessary actions after successful POST request
      alert('Experience added successfully.');
      setName("");
    setShowNameForm(false);
    } catch (error) {
      console.error('Failed to Edit Name:', error);
      alert("Failed to Edit Name:")
    setShowNameForm(false);

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExperienceForm;
