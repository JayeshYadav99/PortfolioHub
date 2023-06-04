import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Slideshow = ({ journey }) => 
{

    console.log(journey);
  const { user } = useAuth0();
  const [journeys, setJourneys] = useState([]);

//   useEffect(() => {
//     const fetchJourneys = async () => {
//       try {
//         const userId = user.sub.split("|")[1];
//         const response = await axios.get(`http://localhost:3000/portfolio/${userId}`);
//         setJourneys(response.data.journeys);
//       } catch (error) {
//         console.error("Failed to fetch journeys:", error);
//       }
//     };

//     fetchJourneys();
//   }, [user]);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % journey.checkpoints.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [journey]);

  const slideVariants = {
    initial: {
      opacity: 0,
      x: -100
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="slideshow-container">
      {journey && (
        <AnimatePresence mode="wait">
          <motion.div
            key={journey.checkpoints[currentSlide].description}
            className="slideshow-card bg-blue-200 rounded-lg shadow-lg p-4"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideVariants}
          >
            <div className="slideshow-text text-center text-3xl text-blue-800 mb-4">
              {journey.checkpoints[currentSlide].description}
            </div>
            <img
              src={journey.checkpoints[currentSlide].imageURL}
              alt="Slide"
              className="slideshow-image w-full rounded-lg"
            />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Slideshow;
