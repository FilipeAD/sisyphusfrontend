import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (  
    <nav className="navbar">
      <div className="navbar-left">
        <a href="home" className="logo">Sisyphus</a>
      </div>
      <div className="navbar-right">
        <a href="workoutPlanner" className="navbar-item">Workout Planner</a>
        <a href="diet" className="navbar-item">Diets</a>
        <button className="profile-button">
          <span>Profile Icon</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
