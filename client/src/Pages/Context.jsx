import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  const [isoLoading, setIsLoading] = useState(true);
  const [ouser, setUser] = useState(null);
  const saveUser = (user) => {
    console.log(user);
    setUser(user);
    console.log(ouser);
  };

  const removeUser = () => {
    setUser(null);
  };

  const fetchUser = async () => {
    try {
      if (isAuthenticated) {
        console.log(ouser);
         console.log(user);
        saveUser(user);
       
      }

    } catch (error) {
      removeUser();
    }
    setIsLoading(false);
  };

  // useEffect(() => {
  //  fetchUser();
  
  
  // }, [])
  
  const logoutUser = async () => {
    try {


      removeUser();


      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

console.log(ouser);

  return (
    <AppContext.Provider
      value={{
        isoLoading,
        saveUser,
        ouser,
        logoutUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
 const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext,AppProvider };
