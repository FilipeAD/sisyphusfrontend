import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

/* Context For User  */
import AuthContext from '../context/AuthContext'

import '../styles/navbar.css'; 
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";


const Navbar = () => {
  let {user} = useContext(AuthContext)

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title" >Sisyphus</Link>
      
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <IconContext.Provider value={{ className: "icon" }}>
          <FaBars />
        </IconContext.Provider>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/workoutPlanner" >Exercises</NavLink>
        </li>
        <li>
          <NavLink to="/workoutPlanner" >Workout Planner</NavLink>
        </li>
        <li>
          <NavLink to="/diet" >Diet</NavLink>
        </li>
        <li>
          {
          user ? ( <NavLink to="/profilepage" className="account-button"> <span>Profile</span> </NavLink>)
          : 
          ( <NavLink to="/login" className="account-button"> <span>Login</span> </NavLink> )
          }
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
