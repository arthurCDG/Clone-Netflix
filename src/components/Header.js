import React from "react";

import netflixlogo from "./../assets/img/Netflix-logo.png";
import profilePic from "./../assets/img/profile.jpg";

const Header = () => {
  return (
    <header>
      <div className="logo-and-nav-bar">
        <img
          className="netflix-logo"
          src={netflixlogo}
          alt="netflix-logo"
        ></img>

        <nav className="netflix-nav-bar">
          <a href="https://www.netflix.com" className="nav-button">
            Home
          </a>
          <a href="https://www.netflix.com" className="nav-button">
            TV Shows
          </a>
          <a href="https://www.netflix.com" className="nav-button">
            Movies
          </a>
          <a href="https://www.netflix.com" className="nav-button">
            New & Popular
          </a>
          <a href="https://www.netflix.com" className="nav-button">
            My list
          </a>
        </nav>
      </div>

      <div className="search-bar-and-profile">
        <input
          className="search-bar"
          type="search"
          placeholder="Search a movie or a tv show"
        />
        <img className="profile-pic" src={profilePic} alt="profile" />
      </div>
    </header>
  );
};

export default Header;
