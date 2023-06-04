import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
const Slideshow = ({ journey }) => {
    console.log(journey);
    const { user, isAuthenticated, isLoading } = useAuth0();
 
const [Myuser,SetUser]=useState(null);

  const slides = [
    {
      id: 0,
      text: "I Attended Lecture of John Smilga from freecode camp",
      image: "first.PNG"
    },
    {
      id: 2,
      text: "I Attended an Hackathon at Parul Where I was unable to work with React and was demotivated",
      image: "Picture1.png"
    },
    {
        id: 3,
        text: "I Started Learning Advanced Node js topics and exploring Auth0",
        image: "Picture2.png"
      },
      {
        id: 4,
        text: "Started Making MERN Stack project and Won three Hackathons",
        image: "Picture3.png"
      }
  ];
  const [journeys, setJourneys] = useState([]);

  useEffect(() => {
    const fetchJourneys = async () => {
      try {
        console.log(user.sub);
        const Sub=user.sub;
        const userId = Sub.split("|")[1];
        console.log(userId);
        const response = await axios.get(
          `http://localhost:3000/portfolio/${userId}`
        );
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
  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    SetUser( user);
 
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
        {journeys &&
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          className="slideshow-card bg-blue-200 rounded-lg shadow-lg p-4"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={slideVariants}
        >
          <div className="slideshow-text text-center text-3xl text-blue-800 mb-4">
            {journey && journey.checkpoints[currentSlide].description}
          </div>
          <img
            src={journey.checkpoints[currentSlide].imageURL}
            alt="Slide"
            className="slideshow-image w-full rounded-lg"
          />
        </motion.div>
      </AnimatePresence>
}
    </div>
  );
};

export default Slideshow;
