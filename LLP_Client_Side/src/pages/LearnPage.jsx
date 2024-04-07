// import React from "react";
// import "../styles/learn-page.css";
// import Step1 from "../assets/images/step1.png";
// import Step2 from "../assets/images/step2.png";
// import Step3 from "../assets/images/step3.png";
// import Step4 from "../assets/images/step4.png";
// import Community from "../assets/images/community.png";
// import Review from "../assets/images/review.png";
// import Learn from "../assets/images/learn.png";
// import Logo from "../assets/images/Logo.png";
// import Courses from "../assets/images/courses.png";

// const LearnPage = () => {
//   const handleClick = () => {
//     console.log("Button clicked!");
//   };

//   return (
//     <div>
//       <div className="header">
//       <img src={Logo} alt="LL Logo" className="logo" style={{ width: "70px", height: "50px" }} />
       
//         <div className="menu">
//           <button
//             className="menu-item active"
//             style={{ width: "200px", height: "40x" }}
//             onClick={handleClick}
//           >
//             <img
//               src={Learn}
//               alt="Learn"
//               style={{ width: "24px", height: "24px" }}
//             />
//             Learn
//           </button>

//           <button
//             className="menu-item active"
//             style={{ width: "200px", height: "50px" }}
//             onClick={handleClick}
//           >
//             <img
//               src={Review}
//               alt="Review"
//               style={{ width: "24px", height: "24px" }}
//             />
//             Review
//           </button>

//           <button
//             className="menu-item active"
//             style={{ width: "200px", height: "50px" }}
//             onClick={handleClick}
//           >
//             <img
//               src={Community}
//               alt="Community"
//               style={{ width: "24px", height: "24px" }}
//             />
//             Community
//           </button>

//           <button
//             className="menu-item active"
//             style={{ width: "200px", height: "50px" }}
//             onClick={handleClick}
//           >
//             <img
//               src={Courses}
//               alt="Courses"
//               style={{ width: "24px", height: "24px" }}
//             />
//             Courses
//           </button>
//         </div>

//         <div className="icons">
//           <div className="icon">🔥</div>
//           <div className="icon">🔔</div>
//           <div className="icon">👤</div>
//         </div>
//       </div>

//       <center>
//         <div className="title">Complete Spanish</div>
//       </center>
//       <div className="chapter-container">
//         <div
//           className="chapter"
//           style={{
//             marginTop: "20px",
//             marginRight: "485px",
//             marginLeft: "469px",
//             border: "1px solid grey",
//             borderRadius:"14px"
//           }}
//         >
//           <div className="content">
//             <div className="chapter-title" style={{textAlign:"center"}}>Chapter 1: Introductions</div>
//             <div className="steps">
//               <div className="step completed">
//                 <div className="step-icon">
//                   <img src={Step1} alt="Step 1" />
//                 </div>
//                 <div className="step-description">Learn Some Greeting</div>
//               </div>
//               <div className="step completed">
//                 <div className="step-icon">
//                   <img src={Step2} alt="Step 2" />
//                 </div>
//                 <div className="step-description">
//                   Greet People And Introduce Yourself
//                 </div>
//               </div>
//               <div className="step">
//                 <div className="step-icon">
//                   <img src={Step3} alt="Step 3" />
//                 </div>
//                 <div className="step-description">
//                   Learn To Ask How Someone Is Feeling
//                 </div>
//               </div>
//               <div className="step">
//                 <div className="step-icon">
//                   <img src={Step4} alt="Step 4" />
//                 </div>
//                 <div className="step-description">
//                   Learn To Ask How Someone Is Feeling
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         className="chapter-container"
//         style={{ marginTop: "20px",
//         marginRight: "485px",
//         marginLeft: "469px",
//         border: "1px solid grey",
//         borderRadius:"14px"}}
//       >
//         <div className="chapter">
//           <div className="content">
//             <div className="chapter-title" style={{textAlign:"center"}}>Chapter 2: All Aboute Me</div>
//             <div className="steps">
//               <div className="step completed">
//                 <div className="step-icon">
//                   <img src={Step1} alt="Step 1" />
//                 </div>
//                 <div className="step-description">Learn Some Greeting</div>
//               </div>
//               <div className="step completed">
//                 <div className="step-icon">
//                   <img src={Step2} alt="Step 2" />
//                 </div>
//                 <div className="step-description">
//                   Greet People And Introduce Yourself
//                 </div>
//               </div>
//               <div className="step">
//                 <div className="step-icon">
//                   <img src={Step3} alt="Step 3" />
//                 </div>
//                 <div className="step-description">
//                   Learn To Ask How Someone Is Feeling
//                 </div>
//               </div>
//               <div className="step">
//                 <div className="step-icon">
//                   <img src={Step4} alt="Step 4" />
//                 </div>
//                 <div className="step-description">
//                   Learn To Ask How Someone Is Feeling
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LearnPage;

import React, { useState, useEffect } from "react";
import "../styles/learn-page.css";
import Step1 from "../assets/images/step1.png";
import Step2 from "../assets/images/step2.png";
import Step3 from "../assets/images/step3.png";
import Step4 from "../assets/images/step4.png";
import Logo from "../assets/images/Logo.png";
import { useParams } from "react-router-dom";

const LearnPage = () => {
  const [courseData, setCourseData] = useState(null);
  const { selectedSubject } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:3000/api/v1/courses/${selectedSubject}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCourseData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedSubject]);

  const renderSteps = (steps) => {
    return steps.map((step, index) => (
      <div className={`step ${step.completed ? 'completed' : ''}`} key={index}>
        <div className="step-icon">
          <img src={step.avatar} alt={`Step ${index + 1}`} />
        </div>
        <div className="step-description">{step.title}</div>
      </div>
    ));
  };

  return (
    <div>
      <div className="header">
        <img src={Logo} alt="LL Logo" className="logo" style={{ width: "70px", height: "50px" }} />
      </div>

      <center>
        <div className="title">{courseData ? courseData.name : "Loading..."}</div>
      </center>

      {courseData && courseData.data.map(course => (
        <div className="chapter-container" key={course._id}>
          {course.chapters.map(chapter => (
            <div className="chapter"
                      style={{
                        marginTop: "20px",
                        marginRight: "485px",
                        marginLeft: "469px",
                        border: "1px solid grey",
                        borderRadius:"14px"
                      }} key={chapter._id}>
              <div className="content">
                <div className="chapter-title" style={{textAlign:"center"}} >{chapter.name}</div>
                <div className="steps">
                  {renderSteps(chapter.lessons)}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LearnPage;