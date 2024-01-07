import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'; // Import your login component styles

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic if needed
    // Then navigate to the home page
    navigate('/home');
  };

  const handleRegister = () => {
    // Navigate to the register page
    navigate('/register');
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Sisyphus</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Email:</label>
          <input type="text" id="email" name="email" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <button onClick={handleRegister}>Register</button>
        </p>
      </div>
      <div className="login-right">
        {/* Your image goes here */}
        <img src="path/to/your/image.jpg" alt="Sisyphus Image" />
      </div>
    </div>
  );
}

export default Login;

