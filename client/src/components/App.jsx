import { useState } from "react";
import Home from "./Home";

import Profile from "./Profile";

// import "../style/App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import CardsArea from "./CardsArea";
import SocialMedia from "./SocialMedia";
import Ads from "./Ads/Ads";
import LinkedInAds from "./Ads/LinkedInAds";
import FacebookAds from "./Ads/FacebookAds";
import InstagramPost from "./SocialMedia/InstagramPost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Article from "./ArticleWriter";
import ArticleIdeas from "./Article/ArticleIdeas";
import About from "./About";
import Github from "./Education/Github";
import Homepage from "./Climate/Pages/Homepage";
import Result from "./Climate/Pages/Result";
import Card from "./Climate/Card";
import Description from "./Climate/Description";
import Cart from "./Climate/Cart";
import EventForm from "./Climate/EventForm";

import Cert from "./Climate/Cert";
import Maths from "./CalcXpert/Maths";
import LinkedInPost from "./SocialMedia/LinkedInPost";
import Twitter from "./SocialMedia/Twitter";
import Summarize from "./summarize/App";
import Dictionary from "./Education/Dictionary";
import ArticleGallery from "./Education/ArticleGallery";
import Quiz from "./Education/Quiz";
import Repo from "./Education/Repo";
import Temp from "./Temp";
import Gallery from "./Gallery";
import EduHome from "./Education/EduHome";
import Demo from "./ArtGallery";
import Appwrite from "./Appwrite";

import SocialmediaHome from "./SocialMedia/SocialmediaHome";
import { Footer } from "flowbite-react";
import Footer2 from "./Footer2";
import AdsHome from "./Ads/AdsHome";
import History from "./History";
import Grapic from "./CalcXpert/Grapic";
import Geometry from "./CalcXpert/Geometry";
import Cas from "./CalcXpert/Cas";
import ScientificCalculator from "./CalcXpert/ScientificCalculator";
import Classic from "./CalcXpert/Classic";
import ThreeD from "./CalcXpert/ThreeD";
import Demo2 from "./Artist"
import Arthome from "./Art/Arthome";
const App = () => {
  return (
    <div>
      <div className="overflow-y-auto">
      {(1===4) ? (<Appwrite/>) :(
        < >
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Hero />}></Route>
          <Route exact path="/CardsArea" element={<CardsArea />}></Route>
          <Route
            exact
            path="/SocialMedia"
            element={<SocialmediaHome />}
          ></Route>
          <Route exact path="/Ads" element={<AdsHome />}></Route>
          <Route path="/LinkedInAds" element={<LinkedInAds />} />
          <Route path="/FacebookAds" element={<FacebookAds />} />

          {/* <Route path="/Profile" element={<Profile />} /> */}
          <Route path="/Articles" element={<ArticleIdeas />} />
          <Route path="/Article" element={<Article />} />
          <Route path="/About" element={<About />} />
          <Route path="/LinkedIn" element={<LinkedInPost />} />
          <Route path="/Github" element={<Github />} />
          <Route path="/Dictionary" element={<Dictionary />} />
          <Route path="/Quiz" element={<Quiz />} />

          <Route path="/Instagram" element={<InstagramPost />} />
          <Route path="/Twitter" element={<Twitter />} />
          <Route path="/Linkedin" element={<LinkedInPost />} />
          <Route path="/EduHome" element={<EduHome />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Climate" element={<Homepage />} />
          <Route path="/EventForm" element={<EventForm />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/Description" element={<Description />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Certi" element={<Cert />} />
          <Route path="/History" element={<History />} />

          <Route path="/Gallery" element={<EduHome />} />
          <Route path="/Climate" element={<Homepage />} />
          <Route path="/EventForm" element={<EventForm />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/Description" element={<Description />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Certi" element={<Cert />} />
          <Route path="/temp" element={<Temp />} />
          <Route path="/Test" element={<Demo />} />
          <Route path="/Arthome" element={<Arthome />} />
          <Route path="/Tester" element={<Demo2 />} />
       
          <Route path="/CalcXpert" element={<Maths />} />
          <Route path="/Grapic" element={<Grapic />} />
          <Route path="/Geometry" element={<Geometry />} />
          <Route path="/Cas" element={<Cas />} />
          <Route path="/Classic" element={<Classic />} />
          <Route path="/ThreeD" element={<ThreeD />} />
          <Route
            path="/ScientificCalculator"
            element={<ScientificCalculator />}
          />
         

          <Route path="/Summarize" element={<Summarize />} />
        </Routes>

        <Footer2 />
     </>
      )}
       </div>
    </div>
  );
};

export default App;
