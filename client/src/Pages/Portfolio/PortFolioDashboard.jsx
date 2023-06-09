import React, { useEffect, useState } from "react";
import axios from "axios";
import ExperienceForm from "./Forms/ExperienceForm";
import NameForm from "./Forms/NameForm";
import IntroductionForm from "./Forms/IntroductionForm";
import LanguageForm from "./Forms/LanguageForm";
import EducationForm from "./Forms/EducationForm";
import CertificateForm from "./Forms/CertificateForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const PortfolioDashboard = ({ data }) => {
  const [userData, setUserData] = useState(null);
  const [showExperienceForm, setShowExperienceForm] = useState(false);
  const [showLanguageForm, setShowLanguageForm] = useState(false);
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showCertificateForm, setShowCertificateForm] = useState(false);
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
        if (response) {
          setUserData(response.data);
        } else {
          setUserData(" ");
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);
  useEffect(() => {
    // Call the fetchData function whenever any of the state variables change
    const fetchUserData = async () => {
      try {
        const userId = data[0].owner.id;
        const response = await axios.get(
          `http://localhost:3000/portfolio/${userId}`
        );
        console.log(response.data);
        if (response) {
          setUserData(response.data);
        } else {
          setUserData(" ");
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, [
    showExperienceForm,
    showLanguageForm,
    showEducationForm,
    showCertificateForm,
    showNameForm,
    showIntroductionForm,
  ]);

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
  const handleEditLanguage = () => {
    // alert(showLanguageForm)
    setShowLanguageForm(!showLanguageForm);
  };
  const handleEditEducation = () => {
    // alert(showLanguageForm)
    setShowEducationForm(!showEducationForm);
  };

  const handleEditCertificate = () => {
    setShowCertificateForm(!showCertificateForm);
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
    Introduction,
  } = userData;
  // console.clear();
  // console.log(data);
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
            <strong>Name : </strong>
            {Name}
          </p>
          <button
            className="px-2 text-blue-500 hover:text-blue-700"
            onClick={handleEditNameForm}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
        <p className="text-black">
          <strong>GitHub: </strong>@{data[0].owner.login}
        </p>
        <p className="text-black">
          <strong>Title: </strong>
          {data[0].owner.time}
        </p>
        <p className="text-black">
          <strong>Location: </strong>
          {data[0].owner.nickname}
        </p>
      </div>

      {showNameForm && (
        <NameForm
          userId={data[0].owner.id}
          setShowNameForm={setShowNameForm}
          Name={Name}
        />
      )}

      {/* Introduction */}

      <div className="bg-white rounded shadow p-4 mb-4">
        <h2 className="text-xl font-bold mb-2 text-black">Introduction</h2>
        <div>{Introduction}</div>
        <button
          className="px-2 text-blue-500 hover:text-blue-700"
          onClick={handleEditIntroduction}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>

      {showIntroductionForm && (
        <IntroductionForm
          userId={data[0].owner.id}
          setShowIntroductionForm={setShowIntroductionForm}
          Introduction={Introduction}
        />
      )}

      {/* Experience */}

      {experiences.length > 0 && (
        <div className="bg-white rounded shadow p-4 mb-4">
          <h2 className="text-xl font-bold mb-2 text-black">Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-bold text-xl">{exp.position}</h3>
              <p className="text-blue-600 font-bold pl-1">{exp.company}</p>
              <p className="text-blue-600 pl-4">{exp.duration}</p>
              <p className="text-blue-600 pl-4">{exp.Experience}</p>
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
      {showExperienceForm && (
        <ExperienceForm
          userId={data[0].owner.id}
          setShowExperienceForm={setShowExperienceForm}
        />
      )}

      {/* Languages */}

      <div className="bg-white rounded shadow p-4 mb-4">
        <h2 className="text-xl font-bold mb-2 text-black">
          Programming Languages :{" "}
        </h2>
        <ul className="list-disc pl-4">
          {languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleEditLanguage}
        >
          Add
        </button>
      </div>
      {showLanguageForm && (
        <LanguageForm
          userId={data[0].owner.id}
          setShowLanguageForm={setShowLanguageForm}
        />
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
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleEditEducation}
          >
            Add
          </button>
        </div>
      )}
      {showEducationForm && (
        <EducationForm
          userId={data[0].owner.id}
          setShowEducationForm={setShowEducationForm}
        />
      )}
      {/* Certificates */}
      {certificates.length > 0 && (
        <div className="bg-white rounded shadow p-4 mb-4">
          <h2 className="text-xl font-bold mb-2 text-black">Certificates</h2>
          {certificates.map((certificate, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-bold">{certificate.title}</h3>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certificate
                </a>
              </button>
            </div>
          ))}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleEditCertificate}
          >
            Add
          </button>
        </div>
      )}
      {showCertificateForm && (
        <CertificateForm
          userId={data[0].owner.id}
          setShowCertificateForm={setShowCertificateForm}
        />
      )}
      {/* Volunteer */}
      {/* {volunteer.length > 0 && (
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

      here
      */}
      <section>
        <div className="bg-white rounded shadow p-4 mb-4">
          <h2 className="text-xl font-bold mb-2 text-black">
            Share Your Portfolio
          </h2>
          <p className="text-gray-600 mb-4">
            Your portfolio is now ready! Share it with the world by using the
            following URL:
          </p>
          <div className="bg-gray-100 rounded p-4">
            <p className="text-blue-500 font-bold break-all">
              http://localhost:5173/users/${data[0].owner.id}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDashboard;
