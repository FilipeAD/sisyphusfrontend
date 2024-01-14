import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { RiProfileLine } from "react-icons/ri";
import { IconContext } from 'react-icons';
import sisyphusIcon from '../resources/sisyphus.png';

/* Context For User  */
import AuthContext from '../context/AuthContext';

import '../styles/navbar.css';


const Navbar = () => {
  let { user } = useContext(AuthContext);
  const [checkClass, setCheck] = useState(true);

  let responsiveState = () =>{
    if (checkClass == true){
      setCheck(false);
    }else{
      setCheck(true);
    }
  }

  return (
    <div className = {checkClass ? ( "topnav" ): ( 'topnav responsive') } id="myTopnav">
      <Link to="/"> <img src={sisyphusIcon} alt="Logo" /> </Link>
      <Link to="/" className="home"> Sisyphus </Link>

      <div className='align-right'>

        <div className="dropdown">
          <button className="dropbtn">Exercises</button>
          <div className="dropdown-content">
            <NavLink to="/workoutPlanner" className="nav-link">
              Generic Plan
            </NavLink>
            <NavLink to="/workoutPlanner" className="nav-link">
              Personalized Plan
            </NavLink>
            
          </div>
        </div>

        <NavLink to="/diet" className="nav-link"> Diet </NavLink>

        {user ? (
          <NavLink to="/profilepage" className="nav-link">
            <IconContext.Provider value={{ className: "profile-login" }}>
              <RiProfileLine />
            </IconContext.Provider>
          </NavLink>
        ) : (
          <NavLink to="/login" className="nav-link">
            <IconContext.Provider value={{ className: "profile-login" }}>
              <CgProfile />
            </IconContext.Provider>
          </NavLink>
        )}

          
        <IconContext.Provider value={{ className:"icon" }} >
          <FaBars  onClick={responsiveState}/>
        </IconContext.Provider>
         
       
    

      </div>
    </div>
  );
};

export default Navbar;
