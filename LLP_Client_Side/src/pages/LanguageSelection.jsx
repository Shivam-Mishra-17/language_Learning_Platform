// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import English from "../assets/images/English.png";
// import Spanish from "../assets/images/Spanish.png";
// import Japanese from "../assets/images/Japanese.png";
// import French from "../assets/images/French.png";
// import German from "../assets/images/German.png";
// import Korean from "../assets/images/Korean.png";
// import Italian from "../assets/images/Italian.png";
// import Arabic from "../assets/images/Arabic.png";
// import Russian from "../assets/images/Russian.png";
// import Chinese from "../assets/images/Chinese.png";
// import Logo from "../assets/images/Logo.png";

// function LanguageSelection() {
//   const [selectedLanguage, setSelectedLanguage] = useState(null);
//   const [error, setError] = useState(null);

//   const handleLanguageSelect = (language) => {
//     setSelectedLanguage(language);
//   };

//   const handleContinue = () => {
//     const userId = localStorage.getItem("user")
//       ? JSON.parse(localStorage.getItem("user"))._id
//       : null;
//     let token = localStorage.getItem("token");

//     if (!userId) {
//       setError("User ID not found in local storage");
//       return;
//     }

//     if (!token) {
//       setError("Authentication token not found in local storage");
//       return;
//     }

//     // Remove quotes from the token
//     token = token.split('"').join("");

//     fetch("http://127.0.0.1:3000/api/v1/language", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: token,
//       },
//       body: JSON.stringify({
//         userId: userId,
//         selectedsubject: selectedLanguage,
//       }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("API Response:", data);
//         // Redirect or do any other necessary action
//       })
//       .catch((error) => {
//         setError("Error occurred while processing the request");
//         console.error("Error:", error);
//       });
//   };

//   return (
//     <div className="container-fluid bg-white">
//       <div className="row justify-content-center">
//         <div className="col-12 text-center mt-5">
//           <img src={Logo} alt="Logo" width="99" height="74" />
//         </div>
//       </div>
//       <div className="row justify-content-center">
//         <div className="col-12 text-center mt-4">
//           <h1 className="fs-1 fw-bold">What would you like to learn</h1>
//         </div>
//       </div>
//       <div className="row justify-content-center">
//         <LanguageCard
//           language="English"
//           flagSrc={English}
//           onSelect={handleLanguageSelect}
//           selected={selectedLanguage === "English"}
//         />
//         <LanguageCard
//           language="Spanish"
//           flagSrc={Spanish}
//           onSelect={handleLanguageSelect}
//           selected={selectedLanguage === "Spanish"}
//         />
//         <LanguageCard
//           language="Arabic"
//           flagSrc={Arabic}
//           onSelect={handleLanguageSelect}
//           selected={selectedLanguage === "Arabic"}
//         />
//       </div>
//       <div className="row justify-content-center">
//         <LanguageCard
//           language="Russian"
//           flagSrc={Russian}
//           onSelect={handleLanguageSelect}
//           selected={selectedLanguage === "Russian"}
//         />
//         <LanguageCard
//           language="Chinese"
//           flagSrc={Chinese}
//           onSelect={handleLanguageSelect}
//           selected={selectedLanguage === "Chinese"}
//         />
//         <LanguageCard
//           language="French"
//           flagSrc={French}
//           onSelect={handleLanguageSelect}
//           selected={selectedLanguage === "French"}
//         />
//       </div>
//       <div className="row justify-content-center">
//         <LanguageCard
//           language="Italian"
//           flagSrc={Italian}
//           onSelect={handleLanguageSelect}
//           selected={selectedLanguage === "Italian"}
//         />
//         <LanguageCard
//           language="Japanese"
//           flagSrc={Japanese}
//           onSelect={handleLanguageSelect}
//           selected={selectedLanguage === "Japanese"}
//         />
//         <LanguageCard
//           language="Korean"
//           flagSrc={Korean}
//           onSelect={handleLanguageSelect}
//           selected={selectedLanguage === "Korean"}
//         />
//       </div>
//       <div className="mb-4 d-flex justify-content-center">
//       {/* <Link to="/language-purpose"> */}
//         <button
//           className="btn btn-lg btn-block"
//           style={{
//             backgroundColor: "#EEE9FB",
//             color: "#5125D2",
//             width: "348px",
//             fontWeight: "bold",
//           }}
//           // onClick={() => console.log("Selected language:", selectedLanguage)}
//           onClick={handleContinue}
//         >
//           {" "}
//           Continue
//         </button>
//       {/* </Link> */}
//       </div>
//     </div>
//   );
// }

// function LanguageCard({ language, flagSrc, onSelect, selected }) {
//   return (
//     <div
//       className={`col-6 col-md-4 col-lg-3 mb-5 ${selected ? "selected" : ""}`}
//       onClick={() => onSelect(language)}
//     >
//       <div className={`card ${selected ? "bg-primary text-white" : ""}`}>
//         <div className="card-body text-center">
//           <img src={flagSrc} alt={language} className="mb-3" />
//           <h2 className="fs-5">{language}</h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LanguageSelection;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import English from "../assets/images/English.png";
import Spanish from "../assets/images/Spanish.png";
import Japanese from "../assets/images/Japanese.png";
import French from "../assets/images/French.png";
import German from "../assets/images/German.png";
import Korean from "../assets/images/Korean.png";
import Italian from "../assets/images/Italian.png";
import Arabic from "../assets/images/Arabic.png";
import Russian from "../assets/images/Russian.png";
import Chinese from "../assets/images/Chinese.png";
import Logo from "../assets/images/Logo.png";

function LanguageSelection() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [error, setError] = useState(null);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleContinue = () => {
    const userId = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user"))._id : null;
    let token = localStorage.getItem("token");

    if (!userId) {
      setError("User ID not found in local storage");
      return;
    }

    if (!token) {
      setError("Authentication token not found in local storage");
      return;
    }

    // Remove quotes from the token
    token = token.split('"').join("");

    const requestData = {
      userId: userId,
      selectedsubject: selectedLanguage,
    };

    fetch("http://127.0.0.1:3000/api/v1/language", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data);
        // Redirect or do any other necessary action
      })
      .catch((error) => {
        setError("Error occurred while processing the request");
        console.error("Error:", error);
      });
  };

  return (
    <div className="container-fluid bg-white">
      <div className="row justify-content-center">
        <div className="col-12 text-center mt-5">
          <img src={Logo} alt="Logo" width="99" height="74" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 text-center mt-4">
          <h1 className="fs-1 fw-bold">What would you like to learn</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <LanguageCard
          language="English"
          flagSrc={English}
          onSelect={handleLanguageSelect}
          selected={selectedLanguage === "English"}
        />
        <LanguageCard
          language="Spanish"
          flagSrc={Spanish}
          onSelect={handleLanguageSelect}
          selected={selectedLanguage === "Spanish"}
        />
        <LanguageCard
          language="Arabic"
          flagSrc={Arabic}
          onSelect={handleLanguageSelect}
          selected={selectedLanguage === "Arabic"}
        />
      </div>
      <div className="row justify-content-center">
        <LanguageCard
          language="Russian"
          flagSrc={Russian}
          onSelect={handleLanguageSelect}
          selected={selectedLanguage === "Russian"}
        />
        <LanguageCard
          language="Chinese"
          flagSrc={Chinese}
          onSelect={handleLanguageSelect}
          selected={selectedLanguage === "Chinese"}
        />
        <LanguageCard
          language="French"
          flagSrc={French}
          onSelect={handleLanguageSelect}
          selected={selectedLanguage === "French"}
        />
      </div>
      <div className="row justify-content-center">
        <LanguageCard
          language="Italian"
          flagSrc={Italian}
          onSelect={handleLanguageSelect}
          selected={selectedLanguage === "Italian"}
        />
        <LanguageCard
          language="Japanese"
          flagSrc={Japanese}
          onSelect={handleLanguageSelect}
          selected={selectedLanguage === "Japanese"}
        />
        <LanguageCard
          language="Korean"
          flagSrc={Korean}
          onSelect={handleLanguageSelect}
          selected={selectedLanguage === "Korean"}
        />
      </div>
      <div className="mb-4 d-flex justify-content-center">
      <Link to="/language-purpose">
        <button
          className="btn btn-lg btn-block"
          style={{
            backgroundColor: "#EEE9FB",
            color: "#5125D2",
            width: "348px",
            fontWeight: "bold",
          }}
          onClick={handleContinue}
        >
          Continue
        </button>
        </Link>
      </div>
      {error && <div className="text-danger text-center">{error}</div>}
    </div>
  );
}

function LanguageCard({ language, flagSrc, onSelect, selected }) {
  return (
    <div
      className={`col-6 col-md-4 col-lg-3 mb-5 ${selected ? "selected" : ""}`}
      onClick={() => onSelect(language)}
    >
      <div className={`card ${selected ? "bg-primary text-white" : ""}`}>
        <div className="card-body text-center">
          <img src={flagSrc} alt={language} className="mb-3" />
          <h2 className="fs-5">{language}</h2>
        </div>
      </div>
    </div>
  );
}

export default LanguageSelection;
