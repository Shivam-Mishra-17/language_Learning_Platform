import React from 'react';
import '../styles/courses.css'; // Import CSS file for styling

const CourseCard = ({ title, description, overallProgress }) => {
  return (
    <div className="course-card">
      <img src="complete-spanish-image.jpg" alt="Complete Spanish Course" />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: overallProgress + '%' }}></div>
      </div>
      <button>Resume</button>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <h1>Spanish Course</h1>
      <div className="course-section">
        <h2>In Progress</h2>
        <CourseCard
          title="Complete Spanish"
          description="Beginner, Intermediate and Advanced Lessons"
          overallProgress={50}
        />
      </div>
      <div className="course-section">
        <h2>More Courses</h2>
        <div className="more-courses">
          <CourseCard
            title="Complete Spanish"
            description="Beginner, Intermediate and Advanced Lessons"
            overallProgress={25}
          />
          <CourseCard
            title="Complete Spanish"
            description="Beginner, Intermediate and Advanced Lessons"
            overallProgress={75}
          />
          <CourseCard
            title="Complete Spanish"
            description="Beginner, Intermediate and Advanced Lessons"
            overallProgress={0}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
