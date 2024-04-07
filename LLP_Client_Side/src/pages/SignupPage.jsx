import React, { useState } from "react";
import Logo from "../assets/images/Logo.png";

function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
    confirmPasswordError: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setErrors({ ...errors, emailError: "Invalid email format" });
      return;
    } else {
      setErrors({ ...errors, emailError: "" });
    }

    if (formData.password.length < 6) {
      setErrors({ ...errors, passwordError: "Password must be at least 6 characters long" });
      return;
    } else {
      setErrors({ ...errors, passwordError: "" });
    }

    if (formData.password !== formData.confirmPassword) {
      setErrors({ ...errors, confirmPasswordError: "Passwords do not match" });
      return;
    } else {
      setErrors({ ...errors, confirmPasswordError: "" });
    }

    fetch("http://127.0.0.1:3000/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullName: formData.name,
        email: formData.email,
        password: formData.password
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      console.log("Registration successful:", data);
      localStorage.setItem('user-info', JSON.stringify(data));
      window.location.href = "/login-page";
      // Handle success here
    })
    .catch(error => {
      console.error("Registration failed:", error);
      // Handle error here
    });
  };

  const validateEmail = (email) => {
    // Very basic email validation, you can use a library or regex for more robust validation
    return /\S+@\S+\.\S+/.test(email);
  };


  return (

    <div className="container">
      <div className="text-center mb-4 mt-5 ">
        <img src={Logo} alt="Logo" width="99" height="74" />
      </div>
      <div className="text-center mb-4">
        <h1 className="fw-bold">Sign Up!</h1>
      </div>
      <div className="text-center mb-4">
        <h2 className="fw-bold" style={{ color: "#88889D", fontSize: 24 }}>
          A platform for language learners
        </h2>
        <h2 className="fw-bold" style={{ color: "#88889D", fontSize: 24 }}>
          Join and kickstart your learning
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4"
        style={{ marginLeft: 470, marginRight: 30, marginTop: 10 }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control mb-2"
            style={{ width: "348px" }}
            placeholder="Enter Your Name"
          />
        </div>
        {/* 
                <div className="mb-4">
                    <select
                        name="selectLanguage"
                        value={formData.selectLanguage}
                        onChange={handleChange}
                        className="form-control mb-2"
                        style={{ width: '348px' }}
                    >
                        <option value="">Select Your Language</option>
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                        <option value="french">French</option>
                        <option value="arabic">Arabic</option>
                        <option value="chinese">Chinese</option>
                        <option value="russian">Russian</option>
                        <option value="japanese">Japanese</option>
                        <option value="italian">Italian</option>
                        <option value="korean">Korean</option>
                    </select>
                </div> */}

        <div className="mb-4"
        style={{ marginLeft: 470, marginRight: 30, marginTop: 10 }}
        >
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control mb-2"
            style={{ width: "348px" }}
            placeholder="Enter Your Email"
          />
          <div style={{ color: "red" }}>{errors.emailError}</div>
        </div>
        <div className="mb-4"
        style={{ marginLeft: 470, marginRight: 30, marginTop: 10 }}
        >
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control mb-2"
            style={{ width: "348px" }}
            placeholder="Enter Your Password"
          />
          <div style={{ color: "red" }}>{errors.passwordError}</div>
        </div>
        <div
          className="mb-4"
          style={{ marginLeft: 470, marginRight: 30, marginTop: 10 }}
        >
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form-control mb-2"
            style={{ width: "348px" }}
            placeholder="Confirm Password"
          />
          <div style={{ color: "red" }}>{errors.confirmPasswordError}</div>
        </div>

        <div className="mb-4"
        style={{ marginLeft: 470, marginRight: 30, marginTop: 10 }}
        >
          <button 
            type="submit"
            className="btn btn-lg btn-block"
            style={{
              backgroundColor: "#EEE9FB",
              color: "#5125D2",
              width: "348px",
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-center">
        <p style={{ color: "black", fontSize: 16 }}>
          Already have an account ?{" "}
          <a
            style={{ textDecoration: "underline", color: "black" }}
            href="/login-page"
          >
            {" "}
            Login
          </a>
        </p>
      </div>
      <div className="text-center mb-4">
        <p style={{ color: "#88889D", fontSize: 16 }}>
          By joining I declare that I have read and accept the
        </p>
        <p style={{ color: "#88889D", fontSize: 16 }}>
          <a href="#" style={{ textDecoration: "underline", color: "#88889D" }}>
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" style={{ textDecoration: "underline", color: "#88889D" }}>
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
