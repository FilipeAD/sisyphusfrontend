import React, {useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'
import '../styles/login.css'; 


const Login = () => {

  let {loginUser} = useContext(AuthContext)

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Login</h1>
        <form onSubmit={loginUser}>

          <input type="text" id="email" name="email" placeholder='EMAIL'/>
          <input type="password" id="password" name="password" placeholder='PASSWORD' />
          <button type="submit">Login</button>

        </form>
        <p>
          Don't have an account? <Link to='/register'>Register</Link>
        </p>
      </div>
     
    </div>
  );
}

export default Login;

