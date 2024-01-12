import React, {useContext} from 'react';
import '../styles/login.css'; 
import sisyphusIcon from '../resources/sisyphus.png';
import AuthContext from '../context/AuthContext'

const Register = () => {

  let {createUser} = useContext(AuthContext)


  return (
    <div className="basic-container">

      <div className="login-container">

        <form onSubmit={createUser}>
          <h2>Create an Account</h2>
          <input type="text" id="username" name="username" placeholder='USERNAME' tabIndex={0} required/>

          <input type="text" id="email" name="email" placeholder='EMAIL' tabIndex={0} required/>

          <input type="password" id="password" name="password" placeholder='PASSWORD' tabIndex={0} required/>

          <input type="password" id="confirmPassword" name="confirmPassword" placeholder='CONFIRM PASSWORD' tabIndex={0} required/>

          <img src={sisyphusIcon} alt="Logo" />

          <button type="submit"  tabIndex={0} >REGISTER</button>
        </form>
      </div>
     
    </div>
  );
}

export default Register;
