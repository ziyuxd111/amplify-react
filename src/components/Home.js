import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.gif";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import Chat from "./Chatbot";

const Home = () => {
  let navigate = useNavigate(); // Hook to control navigation

  // Function to handle button click
  const handleChatNowClick = () => {
    navigate('/chat'); // Navigate to the chatbot route
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            We Are Here To Optimise!
          </h1>
          <p className="primary-text">
            Feeling Pain in the knees and wondering if it is Osteoarthritis? Chat with Dr.Oesto now to know more!!
          </p>
          <button className="secondary-button" onClick={handleChatNowClick}>
      Chat Now! <FiArrowRight />
    </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
