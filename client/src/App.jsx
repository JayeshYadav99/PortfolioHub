import { useState } from "react";
import Home from "./Pages/Home";

// import Profile from "./Pages/Profile";

// import "../style/App.css";
import Navbar from "./Pages/Navbar";
import Hero from "./Pages/Hero";
import Footer2 from "./Pages/Footer2";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CodeHome from "./Pages/CodeHome";





import Form from "./Pages/Form";
import Auth from "./Pages/Auth";
const App = () => {
  return (
    <div>
      <div className="overflow-y-auto">
        <>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<CodeHome />}></Route>

           
            <Route exact path="/Form" element={<Form />}></Route>
           
            <Route exact path="/AUth" element={<Auth />}></Route>
          
          
          </Routes>

          <Footer2 />
        </>
      </div>
    </div>
  );
};

export default App;
