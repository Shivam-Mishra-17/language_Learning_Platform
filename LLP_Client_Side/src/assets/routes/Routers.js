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
import UserProfile from './pages/UserProfile';




function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/signup-page" element={<SignupPage />} />
          <Route path='/welcome-page' element={<WelcomePage />} />
          <Route path='/learn-page' element={<LearnPage />} />
          <Route path='/language-selection' element={<LanguageSelection />} />
          <Route path='/language-level' element={<LanguageLevel />} />
          <Route path='/language-purpose' element={<LanguagePurpose />} />
          <Route path='/language-level' element={<LanguageLevel />} />
          <Route path='/contact-form' element={<ContactForm />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/study-goal' element={<StudyGoal />} />
          <Route path='/user-profile' element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </main>


   
  );
}

export default App;

