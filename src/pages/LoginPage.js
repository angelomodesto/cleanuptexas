import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="wrapper">
      <form action="" id="loginForm">
        <h1>Sign In</h1>

        <div className="input-box">
          <input type="text" placeholder="Email" id="myTextBox" required />
          <i className='bx bxs-user'></i>
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" id="myTextBox2" required />
          <i className='bx bxs-lock-alt'></i>
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot Password</a>
        </div>

        <button type="submit" className="btn">Login</button>

        <div className="register-link">
          <p>Don't have an account? <Link to="/signUp">Register</Link></p>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
