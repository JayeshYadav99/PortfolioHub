import React, { useEffect, useState } from "react";
import axios from "axios";

const PortfolioDashboard = ({ data }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = data[0].owner.id;
        const response = await axios.get(
          `http://localhost:3000/portfolio/${userId}`
        );
        console.log(response.data);
        setUserData(response.data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const {
    name,
    title,
    location,
    skills,
    experiences,
    technologies,
    languages,
    publications,
    education,
    certificates,
    volunteer,
    awards,
  } = userData;

  return (
    <div className="container mx-auto p-4 flex flex-col ">
      <h1 className="text-3xl text-center font-bold mb-4 text-white">
        Portfolio Dashboard
      </h1>

      {/* Profile Details */}
      <div className="bg-white rounded shadow p-4 mb-4 flex flex-col">
        <h2 className="text-xl font-bold mb-2 text-black">Profile Details</h2>
        <p className="text-black">
          <strong>Name:</strong> {data[0].owner.login}
        </p>
        <p className="text-black">
          <strong>Title:</strong> {data[0].owner.time}
        </p>
        <p className="text-black">
          <strong>Location:</strong> {data[0].owner.nickname}
        </p>
      </div>

      {/* Skills */}

      {/* Experience */}
      {experiences.length > 0 && (
        <div className="bg-white rounded shadow p-4 mb-4">
          <h2 className="text-xl font-bold mb-2 text-black">Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-bold">{exp.position}</h3>
              <p className="text-blue-600">{exp.company}</p>
              <p className="text-blue-600">{exp.duration}</p>
            </div>
          ))}
        </div>
      )}

      {/* Languages */}

      <div className="bg-white rounded shadow p-4 mb-4">
        <h2 className="text-xl font-bold mb-2 text-black">Languages</h2>
        <ul className="list-disc pl-4">
          {languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </div>
      {/* Publications */}
      {publications.length > 0 && (
        <div className="bg-white rounded shadow p-4 mb-4">
          <h2 className="text-xl font-bold mb-2 text-black">Publications</h2>
          {publications.map((publication, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-bold">{publication.position}</h3>
              <p className="text-gray-600">{publication.title}</p>
              <p className="text-gray-600">{publication.type}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="bg-white rounded shadow p-4 mb-4">
          <h2 className="text-xl font-bold mb-2 text-black">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-bold">{edu.position}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-gray-600">{edu.degree}</p>
              <p className="text-gray-600">{edu.fieldOfStudy}</p>
              <p className="text-gray-600">{`${edu.startDate} - ${edu.endDate}`}</p>
            </div>
          ))}
        </div>
      )}

      {/* Certificates */}
      {certificates.length > 0 && (
        <div className="bg-white rounded shadow p-4 mb-4">
          <h2 className="text-xl font-bold mb-2 text-black">Certificates</h2>
          {certificates.map((certificate, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-bold">{certificate.position}</h3>
              <p className="text-gray-600">{certificate.title}</p>
            </div>
          ))}
        </div>
      )}

      {/* Volunteer */}
      {volunteer.length > 0 && (
        <div className="bg-white rounded shadow p-4 mb-4">
          <h2 className="text-xl font-bold mb-2 text-black">
            Volunteer Experience
          </h2>
          {volunteer.map((exp, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-bold">{exp.position}</h3>
              <p className="text-gray-600">{exp.organization}</p>
              <p className="text-gray-600">{`${exp.startDate} - ${exp.endDate}`}</p>
            </div>
          ))}
        </div>
      )}

      {/* Awards */}
      {awards.length > 0 && (
        <div className="bg-white rounded shadow p-4 mb-4">
          <h2 className="text-xl font-bold mb-2 text-black">Awards</h2>
          {awards.map((award, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-bold">{award.position}</h3>
              <p className="text-gray-600">{award.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PortfolioDashboard;
