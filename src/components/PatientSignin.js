// src/components/PatientSignIn.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css'; // Assuming you want the same styling as for the Doctor sign-in

const PatientSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Here you can add your logic for authenticating a patient
    // Assuming sign-in logic is successful, navigate to the patient's home page
    navigate('/patient-home'); // Adjust this path as necessary
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Patient Sign In</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default PatientSignIn;
