import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/welcome-page.css'; 
import image from "../assets/images/rocket.png";

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <img src={image} alt="Rocket Icon" className="rocket-image" />
      <div className="welcome-message">
        <h1>Welcome To Your First Spanish Lesson!</h1>
        <p>Let's Do This.</p>
        <Link to="/learn-page">
          <button className="continue-button-welcome">Start Lesson</button>
        </Link>
      </div> 
    </div>
  );
}

export default WelcomePage;