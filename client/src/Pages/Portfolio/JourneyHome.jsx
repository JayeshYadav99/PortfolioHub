import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Slideshow from "./Journey";

const Journey = ({journey}) => {
    console.log(journey);
  const [journeys, setJourneys] = useState(journey);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [Myuser, SetUser] = useState(null);
  const [isAddingJourney, setIsAddingJourney] = useState(false);
  const [newJourneyName, setNewJourneyName] = useState("");
  const [numCheckpoints, setNumCheckpoints] = useState(1);
  const [checkpointDescriptions, setCheckpointDescriptions] = useState({});
  const [checkpointImageURLs, setCheckpointImageURLs] = useState({});
  const [selectedJourney, setSelectedJourney] = useState(null);

  useEffect(() => {
    const fetchJourneys = async () => {
      try {
        console.log("hii");
        console.log(user.sub);
        const Sub = user.sub;
        const userId = Sub.split("|")[1];
        console.log(userId);
        SetUser(userId);
        const response = await axios.get(`http://localhost:3000/portfolio/${userId}`);
        console.log(response.data);
        console.log(response.data.journeys[1]);
        console.log(response.data.journeys[1].checkpoints[0].description);
        setJourneys(response.data.journeys);
      } catch (error) {
        console.error("Failed to fetch journeys:", error);
      }
    };

    fetchJourneys();
  }, [Myuser]);

  useEffect(() => {
    console.log(user);
    console.log("hi"+user);
    SetUser(user);
  }, [user]);

  const addJourney = () => {
    setIsAddingJourney(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the new journey object
    const newJourney = {
      name: newJourneyName,
      checkpoints: Object.keys(checkpointDescriptions).map((key) => ({
        description: checkpointDescriptions[key],
        imageURL: checkpointImageURLs[key],
      })),
    };

    // Make the API call to add the new journey
    try {
      const response = await axios.post(
        `http://localhost:3000/journey/${Uid}`,
        newJourney
      );
      console.log(response.data);
      setJourneys([...journeys, response.data]);
      setIsAddingJourney(false);
      setNewJourneyName("");
      setNumCheckpoints(1);
      setCheckpointDescriptions({});
      setCheckpointImageURLs({});
    } catch (error) {
      console.error("Failed to add journey:", error);
    }
  };

  const handleCheckpointDescriptionChange = (index, value) => {
    setCheckpointDescriptions((prevDescriptions) => ({
      ...prevDescriptions,
      [index]: value,
    }));
  };

  const handleCheckpointImageURLChange = (index, value) => {
    setCheckpointImageURLs((prevURLs) => ({
      ...prevURLs,
      [index]: value,
    }));
  };

  const handleJourneyClick = (journey) => {
    setSelectedJourney(journey);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Journeys</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {journeys.map((journey, index) => (
          <div key={index} className="bg-white rounded shadow p-4">
            <h2
              className="text-lg font-bold mb-2 cursor-pointer"
              onClick={() => handleJourneyClick(journey)}
            >
              {journey.name}
            </h2>
            <ul>
              {journey.checkpoints.map((checkpoint, checkpointIndex) => (
                <li key={checkpointIndex}>{checkpoint.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {isAddingJourney ? (
        <div>
          <h2 className="text-lg font-bold mb-2 text-white">Add Journey</h2>
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-4">
              <label htmlFor="journeyName" className="block mb-2 text-white">
                Journey Name:
              </label>
              <input
                type="text"
                id="journeyName"
                value={newJourneyName}
                onChange={(e) => setNewJourneyName(e.target.value)}
                className="border-gray-300 border-solid border p-2 rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="numCheckpoints" className="block mb-2 text-white">
                Number of Checkpoints:
              </label>
              <input
                type="number"
                id="numCheckpoints"
                value={numCheckpoints}
                onChange={(e) => setNumCheckpoints(e.target.value)}
                className="border-gray-300 border-solid border p-2 rounded w-full"
                required
              />
            </div>
            {Array.from({ length: numCheckpoints }, (_, index) => index + 1).map(
              (checkpointIndex) => (
                <div key={checkpointIndex} className="mb-4 text-white">
                  <label
                    htmlFor={`checkpointDescription${checkpointIndex}`}
                    className="block mb-2"
                  >
                    Checkpoint {checkpointIndex} Description:
                  </label>
                  <input
                    type="text"
                    id={`checkpointDescription${checkpointIndex}`}
                    value={checkpointDescriptions[checkpointIndex] || ""}
                    onChange={(e) =>
                      handleCheckpointDescriptionChange(checkpointIndex, e.target.value)
                    }
                    className="border-gray-300 border-solid border p-2 rounded w-full text-black"
                    required
                  />
                  <label
                    htmlFor={`checkpointImageURL${checkpointIndex}`}
                    className="block mb-2"
                  >
                    Checkpoint {checkpointIndex} Image URL:
                  </label>
                  <input
                    type="text"
                    id={`checkpointImageURL${checkpointIndex}`}
                    value={checkpointImageURLs[checkpointIndex] || ""}
                    onChange={(e) =>
                      handleCheckpointImageURLChange(checkpointIndex, e.target.value)
                    }
                    className="border-gray-300 border-solid border p-2 rounded w-full text-black"
                    required
                  />
                </div>
              )
            )}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
          onClick={() => setIsAddingJourney(true)}
        >
          Add Journey
        </button>
      )}

      {selectedJourney && (
        <div className="mt-4 bg-white rounded shadow p-4">
          <Slideshow journey={selectedJourney}/>
        </div>
      )}
    </div>
  );
};

export default Journey;
