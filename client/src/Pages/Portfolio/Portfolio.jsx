import React,{useState,useEffect} from "react";
import PageSection from "./PageSection";
import About from "./About";
import Contect from "./Contect";
import Journey from "./JourneyHome";
import ProjectSection from "./ProjectSection";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useParams } from 'react-router-dom';
export default function Profoliotemp() {
  const { user } = useAuth0();
const { id } = useParams();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = id;
        const response = await axios.get(
          `http://localhost:3000/portfolio/${userId}`
        );
        console.log(response.data);
        console.log(response.data.Name);
        console.log(response.data.Introduction);
        
        if(response)
        {
          setUserData(response.data);
        }
        else
        {
          setUserData(" ");
        }
       
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {userData &&(<><PageSection Name={userData.Name} Introduction={userData.Introduction}  image={userData.github[0].picture}/>
      <About Experience={userData.experiences} />
      <ProjectSection/>
      <Journey journey={userData.journeys} />
      <Contect /></>)
      
}
    </div>
  );
}

