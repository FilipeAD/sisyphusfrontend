import React, {useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'

import '../styles/login.css'; 
import sisyphusIcon from '../resources/sisyphus.png';


const Login = () => {

  let {loginUser} = useContext(AuthContext)

  return (
    <div className="basic-container">

      <div className="login-container">
        <form onSubmit={loginUser}>
          <h2>Login</h2>

          <input type="text" id="email" name="email" placeholder='EMAIL' required tabIndex={0}/>

          <input type="password" id="password" name="password" placeholder='PASSWORD' required tabIndex={0}/>

          <img src={sisyphusIcon} alt="Logo" />

          <button type="submit" tabIndex={0}>SIGN IN</button>
          <p> Don't have an account? <Link to='/register'>Register</Link></p>
        
        </form>
        
      </div>
     
    </div>
  );
}

export default Login;

