import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import AuthContext from '../context/AuthContext'

const Navbar = () => {
  let {user} = useContext(AuthContext)

  return (  
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">Sisyphus</Link>
      </div>
      
      <div className="navbar-right">
        <Link to="/workoutPlanner" className="navbar-item">Workout Planner</Link>
        <Link to="/diet" className="navbar-item">Diet</Link>
        {
        user ? ( <Link to="/profilepage" className="profile-button"> <span>Profile</span> </Link>)
        : 
        ( <Link to="/login" className="profile-button"> <span>Login</span> </Link> )
        }
      
      </div>
    </nav>
  );
};

export default Navbar;
