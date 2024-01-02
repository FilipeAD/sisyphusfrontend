// components/Register.js
import React from 'react';
import '../styles/register.css'; // Import your register component styles

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-left">
        <h1>Create an Account</h1>
        <form className="register-form">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />

          <button type="submit">Register</button>
        </form>
      </div>
      <div className="register-right">
        {/* Your image goes here */}
        <img
          className="register-image"
          src="path/to/your/image.jpg"
          alt="Sisyphus Image"
        />
      </div>
    </div>
  );
}

export default Register;
