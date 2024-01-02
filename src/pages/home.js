// src/pages/home.js
import React from 'react';
import Navbar from '../components/navbar';
import '../styles/home.css'
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="intro-text">
          <h3>We are the Sisyphus team and we are here to help you get through your fitness journey in an organized, effective, and smart way.</h3>
        </div>
        {/* Other JSX elements go here */}
      </div>
    </>
  );
};

export default Home;
