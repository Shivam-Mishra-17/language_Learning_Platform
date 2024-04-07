// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../styles/language-purpose.css";
// import Logo from "../assets/images/Logo.png";
// import Flag from "../assets/images/flag.png";
// import Book from "../assets/images/book.png";

// function LanguageLevel() {
//   const [selectedLanguage, setSelectedLanguage] = useState(null);

//   const handleLanguageSelect = (language) => {
//     setSelectedLanguage(language);
//   };

//   return (
//     <div className="container-fluid bg-white">
//       <div className="row justify-content-center">
//         <div className="col-12 text-center mt-5">
//           <img src={Logo} alt="Logo" width="99" height="74" />
//         </div>
//       </div>
//       <center>
//         <h2>Tell Us About You!</h2> <br />
//         <h3 className="subtitle">How much Spanish do you know?</h3>
//         <p className="description">
//           Learn what you need to travel with confidence.
//         </p>
//       </center>
//       <div className="row justify-content-center">
//         <LanguageCard
//           language="I’m a Beginner"
//           flagSrc={Flag}
//           onSelect={handleLanguageSelect}
//           selected={selectedLanguage === "Flag"}
//         >
//         </LanguageCard>

//         <LanguageCard
//           language="I know Some Spanish"
//           flagSrc={Book}
//           onSelect={handleLanguageSelect}
//           selected={selectedLanguage === "Book"}
//         />
//       </div>

//       <div className="mb-4 d-flex justify-content-center">
//         <Link to="/study-goal">
//           <button
//             className="btn btn-lg btn-block"
//             style={{
//               backgroundColor: "#EEE9FB",
//               color: "#5125D2",
//               width: "348px",
//               fontWeight: "bold",
//             }}
//             onClick={() => console.log("Selected language:", selectedLanguage)}
//           >
//             Continue
//           </button>
//         </Link>
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

// export default LanguageLevel;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/language-purpose.css";
import Logo from "../assets/images/Logo.png";
import Flag from "../assets/images/flag.png";
import Book from "../assets/images/book.png";

function LanguageLevel() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="container-fluid bg-white">
      <div className="row justify-content-center">
        <div className="col-12 text-center mt-5">
          <img src={Logo} alt="Logo" width="99" height="74" />
        </div>
      </div>
      <center>
        <h2>Tell Us About You!</h2> <br />
        <h3 className="subtitle">How much Spanish do you know?</h3>
        <p className="description">
          Learn what you need to travel with confidence.
        </p>
      </center>
      <div className="row justify-content-center">
        <LanguageCard
          language="I’m a Beginner"
          flagSrc={Flag}
          onSelect={handleLanguageSelect}
          selected={selectedLanguage === "I’m a Beginner"}
        />
        <LanguageCard
          language="I know Some Spanish"
          flagSrc={Book}
          onSelect={handleLanguageSelect}
          selected={selectedLanguage === "I know Some Spanish"}
        />
      </div>
      <div className="mb-4 d-flex justify-content-center">
        <Link to="/study-goal">
          <button
            className="btn btn-lg btn-block"
            style={{
              backgroundColor: "#EEE9FB",
              color: "#5125D2",
              width: "348px",
              fontWeight: "bold",
            }}
            onClick={() => console.log("Selected language:", selectedLanguage)}
            disabled={!selectedLanguage} // Disable button if no language is selected
          >
            Continue
          </button>
        </Link>
      </div>
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

export default LanguageLevel;
