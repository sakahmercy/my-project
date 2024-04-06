import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import AboutUsPage from './components/About/AboutUs';
import Jobs from './components/Jobs/Jobs';
import Testimonial from './components/Testimonial/Testimonial';
import JobList from './components/JobList/JobList';
import JobDetails from './components/JobDetails/JobDetails';
import Contact from './components/Contact/Contact';
import SignUp from './components/Signup/SignUp';
import Login from './components/Login/LoginPage';
import OptionPage from './components/Option/Options';
import JobSeekerSignUpForm from './components/JobSeekerPage/JobSeekersSignUpForm';
import JobSeekerLoginForm from './components/JobSeekerPage/JobseekerLoginForm';
import EmployerSignUpForm from './components/EmployersPage/EmployerSignUpForm';
import EmployerLoginForm from './components/EmployersPage/EmployerLoginForm';
import JobSeekersProfile from './components/JobSeekerPage/JobseekersProfilePage/JobSeekersProfile';
import JobSeekerProfileNavbar from './components/JobSeekerPage/JobseekersProfilePage/JobseekerProfileNavbar'
import EmployersProfilePage from './components/EmployersPage/EmployersProfile/EmployersProfilePage';
import PostJobForm from './components/EmployersPage/JobForm/PostJobForm';
import EmployerProfileNavBar from './components/EmployersPage/EmployersProfileNav/EmployersProfileNav';
import JobSeekerApplyForm from './components/JobSeekerPage/ApplyForm/JobSeekerApplyForm';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path='/testimonial' element={<Testimonial/>}/>
        <Route path="/joblists" element={<JobList/>}/>
        <Route path='/jobdetails' element={<JobDetails/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='/option' element={<OptionPage/>}/>
        <Route path="/jobseekersignupform" element={<JobSeekerSignUpForm/>}/>
        <Route path="/jobseekerloginform" element={<JobSeekerLoginForm/>}/>
        <Route path ='/employersignupform' element={<EmployerSignUpForm/>}/>
        <Route path ='/employerloginform' element={<EmployerLoginForm/>}/>
        <Route path ='/profile' element={<JobSeekersProfile/>}/>
        <Route path = "/profilenavbar" element={<JobSeekerProfileNavbar/>}/> 
        <Route path ='/employer-profile' element={<EmployersProfilePage/>}/>
        <Route path = "/jobform" element={<PostJobForm/>}/>
        <Route path = "/profilenav" element ={<EmployerProfileNavBar/>}/>
        <Route path='/applyform' element = {<JobSeekerApplyForm/>}/>

      </Routes>
    </Router>
  );
}

export default App;
