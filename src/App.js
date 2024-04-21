// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/Signin';
import PatientSignIn from './components/PatientSignin';
import RoleSelection from './components/RoleSelection';
import HomePage from './components/HomePage';
import WelcomePage from './components/WelcomePage'; // Import the WelcomePage component
import PatientHome from './components/PatientHome';
import Chatbot from './components/Chatbot'; // Import your Chatbot component
import Home from './components/Home';
import LearnMore from './components/LearnMore'; // Assume this is the component for the page you want to navigate to
import Profile from './components/Profile'; // Import your Profile component
import Calendar from './components/Calendar';
import Graph from './components/Graph';
import Info from './components/Info';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} exact />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/signin" element={<SignIn />} /> // Doctor sign-in
        <Route path="/patient-signin" element={<PatientSignIn />} /> // Patient sign-in
        <Route path="/home" element={<HomePage />} /> // Adjust as necessary for patient home
        <Route path="/patient-home" element={<PatientHome />} />
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chatbot />} /> {/* Add this line */}
        <Route path="/learn-more" element={<LearnMore />} /> // Route for the "Learn More" page
        <Route path="/profile" element={<Profile />} /> // Define the route for the Profile page
        <Route path="/page1" element={<Calendar />} />
        <Route path="/page2" element={<Graph />} />
        <Route path="/page3" element={<Info />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
