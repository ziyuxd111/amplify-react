// src/components/RoleSelection.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelection.css'; // Your CSS file for role selection

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    // Navigate to the appropriate sign-in page based on the role
    if (role === 'Doctor') {
      navigate('/signin', { state: { role } });
    } else if (role === 'Patient') {
      navigate('/patient-signin', { state: { role } }); // Make sure the route is set up in your App.js
    }
  };

  return (
    <div className="role-selection-container">
      <h2>Select Your Role</h2>
      <button onClick={() => handleRoleSelect('Doctor')}>Doctor</button>
      <button onClick={() => handleRoleSelect('Patient')}>Patient</button>
    </div>
  );
};

export default RoleSelection;
