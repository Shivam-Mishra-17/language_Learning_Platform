import React from 'react';
import '../styles/quiz-page.css'; // Import CSS file
import Logo from'../assets/images/Logo.png'

function QuizPage() {
  return (
    <div className="quiz-container">
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

      <div className="quiz-box">
        <h2>True & False</h2>
        <div className="audio">
          <audio controls>
            <source src="your-audio-file.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <p>¡Buen Día!</p>
          <p>"¡Buen Día!" Means "Good Morning"</p>
        </div>
        <div className="options">
          <button>True</button>
          <button>False</button>
        </div>
        <button className="continue-btn">Continue</button>
      </div>
    </div>
  );
}

export default QuizPage;