import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/language-purpose.css";
import Logo from "../assets/images/Logo.png";
import Work from "../assets/images/work.png";
import School from "../assets/images/school.png";
import Travel from "../assets/images/travel.png";
import Culture from "../assets/images/culture.png";
import Family from "../assets/images/family.png";
import Challenge from "../assets/images/challenge.png";
import Other from "../assets/images/other.png";

function LanguageSelection() {
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
        <h2>Tell Us About You!</h2>
        <p>
          Hi <b>Shivam</b>, Why are you learning Spanish?
        </p>
        <p3>Assistance in personalising your path to learning.</p3>
      </center><br/>
      <div className="row justify-content-center">
        <LanguageCard language="Work" flagSrc={Work} onSelect={handleLanguageSelect} selected={selectedLanguage === "Work"} />
        <LanguageCard language="School" flagSrc={School} onSelect={handleLanguageSelect} selected={selectedLanguage === "School"} />
        <LanguageCard language="Travel" flagSrc={Travel} onSelect={handleLanguageSelect} selected={selectedLanguage === "Travel"} />
      </div>
      <div className="row justify-content-center">
        <LanguageCard language="Culture" flagSrc={Culture} onSelect={handleLanguageSelect} selected={selectedLanguage === "Culture"} />
        <LanguageCard language="Family" flagSrc={Family} onSelect={handleLanguageSelect} selected={selectedLanguage === "Family"} />
        <LanguageCard language="Challenge" flagSrc={Challenge} onSelect={handleLanguageSelect} selected={selectedLanguage === "Challenge"} />
      </div>
      <div className="row justify-content-center">
        <LanguageCard language="Other" flagSrc={Other} onSelect={handleLanguageSelect} selected={selectedLanguage === "Other"} />
      </div>
      <div className="mb-4 d-flex justify-content-center">
      <Link to="/language-level">
      <button className="btn btn-lg btn-block" style={{ backgroundColor: '#EEE9FB', color: '#5125D2', width: '348px', fontWeight: 'bold' }} onClick={() => console.log("Selected language:", selectedLanguage)}>
        Continue
      </button>
    </Link>
      </div>
    </div>
  );
}

function LanguageCard({ language, flagSrc, onSelect, selected }) {
  return (
    <div className={`col-6 col-md-4 col-lg-3 mb-5 ${selected ? 'selected' : ''}`} onClick={() => onSelect(language)}>
      <div className={`card ${selected ? 'bg-primary text-white' : ''}`}>
        <div className="card-body text-center">
          <img src={flagSrc} alt={language} className="mb-3" />
          <h2 className="fs-5">{language}</h2>
        </div>
      </div>
    </div>
  );
}

export default LanguageSelection;
