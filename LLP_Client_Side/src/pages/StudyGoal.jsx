import React from "react";
import { Link } from "react-router-dom";
import "../styles/study-goal.css";
import Logo from "../assets/images/Logo.png";

const StudyGoal = () => {
  return (
    <div className="study-goal-container">
      {/* <div className="header"> */}
      {/* <div className="icon"></div> */}
      <center>
        <img src={Logo} alt="LL Logo" className="logo" />
      </center>
      <div className="header-text">
        <h1>Set a daily study goal!</h1>
        <p>Create a learning habit to improve your Spanish.</p>
      </div>
      {/* </div> */}
      <div className="goal-options">
        <h6>5 Minutes / Day - Casual</h6>
        <h6>10 Minutes / Day - Regular</h6>
        <h6>15 Minutes / Day - Serious</h6>
        <h6>20 Minutes / Day - Intense</h6>
      </div>

      <Link to="/welcome-page">
        <button
            className="btn btn-lg btn-block"
            style={{
              backgroundColor: "#EEE9FB",
              color: "#5125D2",
              width: "348px",
              fontWeight: "bold",
            }}
          >
            Commit to daily Goal
          </button>
      </Link>
    </div>
  );
};

export default StudyGoal;
