import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login-page.css";
import Logo from "../assets/images/Logo.png";
import Google from "../assets/images/google.png";
import Facebook from "../assets/images/facebook.png";
import { GoogleLogin } from "@react-oauth/google";
import { googleLogout } from '@react-oauth/google';
// googleLogout();
import jwtDecode from "jwt-decode";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Send login request
    fetch("http://127.0.0.1:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid email or password.");
        }
        return response.json();
      })
      .then((data) => {
        if (data.jwtToken) {
          localStorage.setItem("user", JSON.stringify(data.tokenObject));
          localStorage.setItem("token", JSON.stringify(data.jwtToken));
        }
        // Save response in local storage
        localStorage.setItem("user-info", JSON.stringify(data));
        // Redirect to dashboard or another page upon successful login
        // Replace '/dashboard' with the desired redirect URL
        window.location.href = "/language-selection";
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error:", error);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-4 text-center">
          <img
            src={Logo}
            height="74px"
            width="99px"
            className="img-fluid mb-4"
            alt="Logo"
          />
          <h2>Login!</h2>
          <p style={{ color: "black", fontSize: 16 }}>
            Don’t Have an account ?{" "}
            <Link
              to="/signup-page"
              style={{
                textDecoration: "underline",
                color: "black",
                fontSize: 16,
              }}
            >
              Sign up
            </Link>
          </p>
          <center>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log("Credential Response:", credentialResponse);
                // const credentialResponseDecoded = jwtDecode(credentialResponse.credential)
                // console.log(credentialResponseDecoded);
                window.location.href = "/language-selection";
                
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            >
              <button
                className="btn btn-light text-center border border-dark rounded-pill"
                style={{ width: "326px", height: "40px" }}
              >
                <img
                  src={Google}
                  alt="Google Logo"
                  width="45"
                  height="30"
                  className="me-3"
                />
                Connect With Google
              </button>
            </GoogleLogin>
          </center>
          <div className="row justify-content-center mt-3">
            <div className="col-md-8">
              <button
                className="btn btn-light text-center border border-dark rounded-pill"
                style={{ width: "326px", height: "40px" }}
              >
                <img
                  src={Facebook}
                  alt="Facebook Logo"
                  width="30"
                  height="30"
                  className="me-3"
                />
                Connect With Facebook
              </button>
            </div>
          </div>
          <div className="mt-3 text-center">
            <p style={{ color: "black" }}> OR </p>
          </div>
          {error && <div className="text-danger">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="d-flex justify-content-center">
              <input
                type="text"
                className="form-control"
                style={{ width: "326px" }}
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-center">
              <input
                type="password"
                className="form-control"
                style={{ width: "326px" }}
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-flex text-center">
              <p
                style={{
                  color: "black",
                  fontSize: 16,
                  marginLeft: 90,
                  marginRight: 30,
                  marginTop: 10,
                }}
              >
                Forgot Your Password ?
              </p>
            </div>
            <button
              type="submit"
              className="btn btn-block text-center"
              style={{
                backgroundColor: "#EEE9FB",
                color: "#5125D2",
                width: "326px",
              }}
            >
              Login
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
