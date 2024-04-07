// import React, { useState } from "react";
// import "../styles/contact-form.css";
// import "../styles/learn-page.css";
// import illus from "../assets/images/illus.jpeg";
// import Logo from "../assets/images/Logo.png";
// import Learn from "../assets/images/learn.png";
// import Review from "../assets/images/review.png";
// import Community from "../assets/images/community.png";
// import Courses from "../assets/images/courses.png";

// function ContactForm() {
//   const handleClick = () => {
//     console.log("Button clicked!");
//   };

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     course: "",
//     reason: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log(formData); // For testing, you can replace this with actual submission logic
//   };

//   return (
//     <div className="container">
//       <div className="header">
//       <img src={Logo} alt="LL Logo" className="logo" style={{ width: "70px", height: "50px" }} />


//         <div className="menu">
//           <button className="menu-item active" onClick={handleClick}>
//             <img src={Learn} alt="Learn" />
//             Learn
//           </button>

//           <button className="menu-item active" onClick={handleClick}>
//             <img src={Review} alt="Review" />
//             Review
//           </button>

//           <button className="menu-item active" onClick={handleClick}>
//             <img src={Community} alt="Community" />
//             Community
//           </button>

//           <button className="menu-item active" onClick={handleClick}>
//             <img src={Courses} alt="Courses" />
//             Courses
//           </button>
//         </div>

//         <div className="icons">
//           <div className="icon">🔥</div>
//           <div className="icon">🔔</div>
//           <div className="icon">👤</div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-lg-6">
//           <div className="bg-white rounded-3 p-3">
//             <div className="mb-3">
//               <label
//                 htmlFor="name"
//                 className="form-label fs-5"
//                 style={{ color: "#5125D2" }}
//               >
//                 Name :
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="name"
//                 placeholder="Enter your name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label
//                 htmlFor="email"
//                 className="form-label fs-5"
//                 style={{ color: "#5125D2" }}
//               >
//                 Email :
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label
//                 htmlFor="subject"
//                 className="form-label fs-5"
//                 style={{ color: "#5125D2" }}
//               >
//                 Subject :
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="subject"
//                 name="subject"
//                 placeholder="Enter the subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label
//                 htmlFor="course"
//                 className="form-label fs-5"
//                 style={{ color: "#5125D2" }}
//               >
//                 Course Name :
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="course"
//                 name="course"
//                 placeholder="Enter the course name"
//                 value={formData.course}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label
//                 htmlFor="reason"
//                 className="form-label fs-5"
//                 style={{ color: "#5125D2" }}
//               >
//                 Detailed Reason :
//               </label>
//               <textarea
//                 className="form-control"
//                 id="reason"
//                 name="reason"
//                 rows="5"
//                 placeholder="Enter detailed reason"
//                 value={formData.reason}
//                 onChange={handleChange}
//               ></textarea>
//             </div>
//             <div className="mb-3">
//               <button
//                 type="submit"
//                 className="btn btn-primary btn-lg w-100"
//                 style={{ backgroundColor: "#5125D2" }}
//                 onClick={handleSubmit}
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-6">
//           <img
//             className="img-fluid rounded-3"
//             src={illus}
//             alt="Placeholder image"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactForm;


import React, { useState } from "react";
import "../styles/contact-form.css";
import "../styles/learn-page.css";
import illus from "../assets/images/illus.jpeg";
import Logo from "../assets/images/Logo.png";
import Learn from "../assets/images/learn.png";
import Review from "../assets/images/review.png";
import Community from "../assets/images/community.png";
import Courses from "../assets/images/courses.png";

function ContactForm() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    course: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch("http://127.0.0.1:3000/api/v1/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: formData.name,
        userEmail: formData.email,
        userSubject: formData.subject,
        usercourseName: formData.course,
        userMessage: formData.reason,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form submitted successfully");
          // Reset form fields if needed
          setFormData({
            name: "",
            email: "",
            subject: "",
            course: "",
            reason: "",
          });
          alert("Form submitted successfully!");
        } else {
          console.error("Error submitting form");
          alert("Error submitting form. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error submitting form. Please try again later.");
      });
  };
  

  return (
    <div className="container">
      <div className="header">
      <img src={Logo} alt="LL Logo" className="logo" style={{ width: "70px", height: "50px" }} />


        <div className="menu">
          <button className="menu-item active" onClick={handleClick}>
            <img src={Learn} alt="Learn" />
            Learn
          </button>

          <button className="menu-item active" onClick={handleClick}>
            <img src={Review} alt="Review" />
            Review
          </button>

          <button className="menu-item active" onClick={handleClick}>
            <img src={Community} alt="Community" />
            Community
          </button>

          <button className="menu-item active" onClick={handleClick}>
            <img src={Courses} alt="Courses" />
            Courses
          </button>
        </div>

        <div className="icons">
          <div className="icon">🔥</div>
          <div className="icon">🔔</div>
          <div className="icon">👤</div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="bg-white rounded-3 p-3">
            <div className="mb-3">
              <label
                htmlFor="name"
                className="form-label fs-5"
                style={{ color: "#5125D2" }}
              >
                Name :
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label fs-5"
                style={{ color: "#5125D2" }}
              >
                Email :
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="subject"
                className="form-label fs-5"
                style={{ color: "#5125D2" }}
              >
                Subject :
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                placeholder="Enter the subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="course"
                className="form-label fs-5"
                style={{ color: "#5125D2" }}
              >
                Course Name :
              </label>
              <input
                type="text"
                className="form-control"
                id="course"
                name="course"
                placeholder="Enter the course name"
                value={formData.course}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="reason"
                className="form-label fs-5"
                style={{ color: "#5125D2" }}
              >
                Detailed Reason :
              </label>
              <textarea
                className="form-control"
                id="reason"
                name="reason"
                rows="5"
                placeholder="Enter detailed reason"
                value={formData.reason}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <button
                type="submit"
                className="btn btn-primary btn-lg w-100"
                style={{ backgroundColor: "#5125D2" }}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            className="img-fluid rounded-3"
            src={illus}
            alt="Placeholder image"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
