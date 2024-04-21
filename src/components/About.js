import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.gif";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle navigation for the Learn More button
  const handleLearnMoreClick = () => {
    navigate('/learn-more'); // Navigate to the Learn More page
  };

  // Function to handle navigation for the Watch Video button
  const handleWatchVideoClick = () => {
    // Replace 'your-video-link-here' with the actual link you want to navigate to
    window.open('https://www.youtube.com/watch?v=sUOlmI-naFs', '_blank');
  };
  
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Tracking Your Rehabilitation Has Never Been Easier
        </h1>
        <p className="primary-text">
          OsteoOpti is here to help to track your progress and provide you more
          information on Osteoarthritis.
        </p>
        <p className="primary-text">
          We even provide virtual physiotherapy videos for you to practise at home!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button" onClick={handleLearnMoreClick}>
            Recommendations
          </button>
          <button className="watch-video-button" onClick={handleWatchVideoClick}>
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
