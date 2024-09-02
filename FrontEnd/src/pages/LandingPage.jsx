import React, { useState } from 'react';
import '../styles/Landingpage.css';

import Logo from '../images/logo1.png';
import Logo1 from '../images/SocialFuse.png';
import About1 from '../images/about-1.webp';

import Login from '../components/Login';
import Register from '../components/Register';

const LandingPage = () => {

    const [isLoginBox, setIsLoginBox] = useState(true);


  return (
    <div className="landingPage">
      <div className="landing-header">
        <span className="landing-header-logo">
          <img src={Logo} alt="" />
          <img src={Logo1} alt="" />
        </span>
        <ul>
          <li className="header-li">
            <a href="#about">About</a>{" "}
          </li>
          <li className="header-li">
            <a href="#home">Join now</a>
          </li>
        </ul>
      </div>

      <div className="landing-body">
      <div className="landing-about" id="about">
          <div className="about-1">
            <img src={About1} className="about-1-img" alt="" />
            <div className="about-1-content">
              <h3>Welcome to SocialFuse!</h3>
              <p>
                At SocialFuse, we believe that every connection has the power to
                inspire, create, and change the world. Our platform is more than
                just a social network; it’s a community where ideas thrive,
                creativity blossoms, and relationships are forged, no matter the
                distance.
              </p>
              <p>
                Our mission is to bring people closer, enabling them to share
                their stories, passions, and experiences with the world. Whether
                you’re reconnecting with old friends, discovering new ones, or
                sharing your latest creative endeavor, SocialFuse is here to
                ignite those connections.
              </p>
              <a href="#home">Join now!!</a>
            </div>
          </div>
        </div>
        <div className="landing-hero" id="home">
          <div className="landing-hero-content">
            <h1>SocialFuse</h1>
            <p></p>

            <div className="authentication-form">
              {isLoginBox ? (
                <Login setIsLoginBox={setIsLoginBox} />
              ) : (
                <Register setIsLoginBox={setIsLoginBox} />
              )}
            </div>
          </div>

          <div className="landing-hero-image">
            <div className="back"></div>
          </div>
        </div>

        <div className="footer">
          <p>All rights reserved - &#169; SocialFuse.com</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage