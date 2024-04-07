import React from "react";
import "../styles/lesson-complete.css";
import Lesson from "../assets/images/lesson.png";
import Logo from "../assets/images/Logo.png"

function LessonComplete() {
  return (
    <div className="lesson-container">
      <img
        src={Logo}
        height="70px"
        width="100px"
        className="img-fluid mb-4"
        alt="Lesson"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          left: "10px",
          bottom: "100px",
        }}
      />
      <img
        src={Lesson}
        height="200px"
        width="250px"
        className="img-fluid mb-4"
        alt="Lesson"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          left: "650px",
          bottom: "100px",
        }}
      />

      <div className="complete-box">
        <h2>Lesson Complete!</h2>
        <div className="stars">
          <span>Stars</span>
          <span>+10 ⭐</span>
        </div>
        <div className="scores">
          <span>Scores</span>
          <span>100% ⚡</span>
        </div>
        <button className="recap-btn">Recap Lesson</button>
        <button className="continue-btn">Continue</button>
      </div>
    </div>
  );
}

export default LessonComplete;
