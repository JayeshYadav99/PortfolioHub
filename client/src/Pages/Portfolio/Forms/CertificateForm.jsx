import React, { useState } from "react";
import axios from "axios";

const CertificateForm = ({userId, setShowCertificateForm }) => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.clear();
      // console.log("This", Introduction, userId, setShowIntroductionForm);
      const response = await axios.post(
        `http://localhost:3000/certificate/${userId}`,
        { title, link }
      );
      // Success! Handle any necessary actions after successful PUT request
      console.log(response);
      alert('Certificate added successfully.');
      setTitle('');
      setLink('');
      setShowCertificateForm(false);

    } catch (error) {
      console.error('Failed to add certificate:', error);
      alert('Failed to add certificate.');
      setShowCertificateForm(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label>
        Link:
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CertificateForm;
