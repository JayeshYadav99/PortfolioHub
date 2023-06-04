import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EducationForm = ({userId, setShowEducationForm}) => {
  const [position, setPosition] = useState('');
  const [institution, setInstitution] = useState('');
  const [degree, setDegree] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEducation = {
      position,
      institution,
      degree,
      fieldOfStudy,
      startDate,
      endDate,
    };
    

    try {
      await axios.put( `http://localhost:3000/education/${userId}`, newEducation);
      // Success! Handle any necessary actions after successful POST request
      alert('Educartion added successfully.');
      setPosition('');
      setInstitution('');
      setDegree('');
      setFieldOfStudy('');
      setStartDate('');
      setEndDate('');
    setShowEducationForm(false);
    } catch (error) {
      console.error('Failed to Edit Name:', error);
      alert("Failed to Edit Name:")
    setShowEducationForm(false);

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
        Institution:
        <input
          type="text"
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
        />
      </label>
      <label>
        Degree:
        <input
          type="text"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />
      </label>
      <label>
        Field of Study:
        <input
          type="text"
          value={fieldOfStudy}
          onChange={(e) => setFieldOfStudy(e.target.value)}
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

export default EducationForm;
