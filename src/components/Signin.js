// src/components/SignIn.js

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import './Signin.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation(); // Retrieve the state passed to this component

  // Access the role passed to the component, defaulting to 'Doctor' if no role is selected
  const { role } = location.state || { role: 'Doctor' };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic Validation Example
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    

    // Assuming sign-in logic is successful, navigate to the home page
    navigate('/home'); // Use navigate instead of history.push
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>{role} Sign In</h2>
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

export default SignIn;
