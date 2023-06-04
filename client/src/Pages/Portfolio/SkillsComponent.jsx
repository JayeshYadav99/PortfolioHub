import React from "react";
import "./SkillsComponent.css";
const SkillsComponent = () => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      {/* about */}
      <div className="about">
        <a
          className="bg_links social portfolio"
          href="https://www.rafaelalucas.com"
          target="_blank"
        >
          <span className="icon"></span>
        </a>
        <a
          className="bg_links social dribbble"
          href="https://dribbble.com/rafaelalucas"
          target="_blank"
        >
          <span className="icon"></span>
        </a>
        <a
          className="bg_links social linkedin"
          href="https://www.linkedin.com/in/rafaelalucas/"
          target="_blank"
        >
          <span className="icon"></span>
        </a>
        <a className="bg_links logo"></a>
      </div>
      {/* end about */}

      <div className="content">
        {/* card */}
        <div className="card">
          <div className="icon">
            <i className="material-icons md-36">face</i>
          </div>
          <p className="title">Profile</p>
          <p className="text">Click to see or edit your profile page.</p>
        </div>
        {/* end card */}
        {/* card */}
        <div className="card">
          <div className="icon">
            <i className="material-icons md-36">favorite_border</i>
          </div>
          <p className="title">Favourites</p>
          <p className="text">Check all your favourites in one place.</p>
        </div>
        {/* end card */}
        {/* card */}
        <div className="card">
          <div className="icon">
            <i className="material-icons md-36">alternate_email</i>
          </div>
          <p className="title">Contacts</p>
          <p className="text">Add or change your contacts and links.</p>
        </div>
        {/* end card */}
      </div>
    </div>
  );
};

export default SkillsComponent;
