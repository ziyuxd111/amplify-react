// src/components/WelcomePage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css'; // Create this CSS file for styling

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleWelcomeButtonClick = () => {
    navigate('/role-selection'); // Make sure the route is correct
  };

  return (
    <div className="welcome-page-container">
      <h1>Welcome to OsteoOpti</h1>
      <p>Begin your journey with us by selecting your role.</p>
      <button onClick={handleWelcomeButtonClick}>Get Started</button>
    </div>
  );
};

export default WelcomePage;
