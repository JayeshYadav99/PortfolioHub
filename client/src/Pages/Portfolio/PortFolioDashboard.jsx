import React, { useEffect, useState } from "react";
import axios from "axios";
import ExperienceForm from "./Forms/ExperienceForm";
import NameForm from "./Forms/NameForm";
import IntroductionForm from "./Forms/IntroductionForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const PortfolioDashboard = ({ data }) => {
  const [userData, setUserData] = useState(null);
  const [showExperienceForm, setShowExperienceForm] = useState(false);
  
  const [showNameForm, setShowNameForm] = useState(false);
  const [showIntroductionForm, setShowIntroductionForm] = useState(false);
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

  const handleEditExperience = () => {
    setShowExperienceForm(!showExperienceForm);
  };
  const handleEditNameForm = () => {
    setShowNameForm(!showNameForm);
  };
  const handleEditIntroduction = () => {
    setShowIntroductionForm(!showIntroductionForm);
  };
  

  const {
    Name,
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
    Introduction
   
  } = userData;
  console.clear();
  console.log(data);
  // console.log(dfd);

  return (
    <div className="container mx-auto p-4 flex flex-col ">
      <h1 className="text-3xl text-center font-bold mb-4 text-white">
        Portfolio Dashboard
      </h1>

      {/* Profile Details */}
 

<div className="bg-white rounded shadow p-4 mb-4 flex flex-col">
  <h2 className="text-xl font-bold mb-2 text-black">Profile Details</h2>
  <div className="flex items-center mb-2">
  <p className="text-black">
    <strong>Name : </strong>{Name}
  </p>
    <button className="px-2 text-blue-500 hover:text-blue-700"  onClick={handleEditNameForm}>
      <FontAwesomeIcon icon={faEdit} />
      
    </button>
  </div>
  <p className="text-black">
    <strong>GitHub: </strong>@{data[0].owner.login}
  </p>
  <p className="text-black">
    <strong>Title: </strong>{data[0].owner.time}
  </p>
  <p className="text-black">
    <strong>Location: </strong>{data[0].owner.nickname}
  </p>
  
</div>

{showNameForm && <NameForm userId={data[0].owner.id} setShowNameForm={setShowNameForm} Name = {Name}/>}

      {/* Introduction */}
     
      <div className="bg-white rounded shadow p-4 mb-4">
  <h2 className="text-xl font-bold mb-2 text-black">Introduction</h2>
    <div>{Introduction}</div>
    <button className="px-2 text-blue-500 hover:text-blue-700" onClick={handleEditIntroduction}>
    <FontAwesomeIcon icon={faEdit}/>
    </button>

</div>

{showIntroductionForm && <IntroductionForm userId={data[0].owner.id} setShowIntroductionForm={setShowIntroductionForm} Introduction = {Introduction}/>}

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
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      onClick={handleEditExperience}
    >
      Add
    </button>
  </div>
)}
{showExperienceForm && <ExperienceForm userId={data[0].owner.id} setShowExperienceForm={setShowExperienceForm} />}


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
 {/* Render EditPublicationForm */}
 {/* {editPublication && (
        <div className="bg-white rounded shadow p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">Edit Publication</h2>
          <EditPublicationForm userId={data[0].owner.id} />
        </div>
      )} */}
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
