import { BrowserRouter , Route, Routes  } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import WelcomePage from './pages/WelcomePage';
import LearnPage from './pages/LearnPage';
import LanguageSelection from './pages/LanguageSelection';
import LanguageLevel from './pages/LanguageLevel';
import LanguagePurpose from './pages/LanguagePurpose';
import ContactForm from './pages/ContactForm';
import Courses from './pages/Courses';
import StudyGoal from './pages/StudyGoal';
import LessonComplete from './pages/LessonComplete';
import QuizPage from './pages/QuizPage';


function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/signup-page" element={<SignupPage />} />
          <Route path='/language-selection' element={<LanguageSelection />} />
          <Route path='/language-purpose' element={<LanguagePurpose />} />
          <Route path='/language-level' element={<LanguageLevel />} />
          <Route path='/study-goal' element={<StudyGoal />} /> {/* page design is not proper*/}
          <Route path='/welcome-page' element={<WelcomePage />} />
          <Route path='/learn-page' element={<LearnPage />} />
          <Route path='/contact-form' element={<ContactForm />} />
          <Route path='/courses' element={<Courses />} />    {/* page design is not proper and header is missing*/}
          <Route path='/lesson-complete' element={<LessonComplete />} />
          <Route path='/quiz-page' element={<QuizPage />} /> 
        </Routes>
      </BrowserRouter>
    </main>


   
  );
}

export default App;






// import React from 'react';
// import './App.css';
// import LoginPage from './pages/LoginPage';
// import SignupPage from './pages/SignupPage';
// import LanguageSelection from './pages/LanguageSelection';
// import LearnPage from './pages/LearnPage';
// import LanguagePurpose from './pages/LanguagePurpose';
// import WelcomePage from './pages/WelcomePage';
// import UserProfile from './pages/UserProfile';
// import LanguageLevel from './pages/LanguageLevel';
// import StudyGoal from './pages/StudyGoal';
// import ContactForm from './pages/ContactForm'


// function App() {
//   return (
//     <div className="App">

//       {/* <LoginPage/>  */}
//       {/* <SignupPage/> */}
//       {/* <LanguageSelection/> */}
//       <LearnPage/>;
//       {/* <LanguagePurpose/>; */}
//       {/* <WelcomePage/>; */}
//       {/* <UserProfile/> */}
//       {/* <LanguageLevel/> */}
//       {/* <StudyGoal/> */}
//       {/* <ContactForm/> */}

//     </div>
//   );
// }

// export default App;


