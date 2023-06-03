import { useState } from "react";
import Home from "./Pages/Home";

// import Profile from "./Pages/Profile";

// import "../style/App.css";
import Navbar from "./Pages/Navbar";
import Hero from "./Pages/Hero";
import Footer from "./Pages/Footer";
import Profoliotemp from "./Pages/Portfolio/Profoliotemp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioHubHome from "./Pages/PortfolioHubHome";

import Form from "./Pages/Form";
import Auth from "./Pages/Auth";
const App = () => {
  return (
    <div>
      <div className="overflow-y-auto">
        <>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<PortfolioHubHome />}></Route>

            <Route exact path="/Form" element={<Form />}></Route>

            <Route exact path="/AUth" element={<Auth />}></Route>
            <Route exact path="/Portfolio" element={<Profoliotemp />}></Route>
          </Routes>

          <Footer />
        </>
      </div>
    </div>
  );
};

export default App;
