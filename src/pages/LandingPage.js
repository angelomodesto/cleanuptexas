import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Add your logic for Login button here
    navigate('/login')
    console.log("Login button clicked");
    // For example, you could open a login modal:
    // openLoginModal();
  };

  const handleRegisterClick = () => {
    // Add your logic for Register button here
    console.log("Register button clicked");
    // For example, you could open a registration modal:
    // openRegistrationModal();
  };

  const handleLearnMoreClick = () => {
    // Add your logic for Learn More button here
    console.log("Learn More button clicked");
  };

  const handleGetInvolvedClick = () => {
    // Add your logic for Get Involved button here
    console.log("Get Involved button clicked");
  };

  const handleDonateClick = () => {
    // Add your logic for Donate button here
    console.log("Donate button clicked");
  };

  const mainStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/texasriver.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-left">
          <img src="/texasgreen.jpg" alt="Logo" className="logo-button" onClick={handleLogoClick} />
          <h1>Clean up Texas</h1>
        </div>
        <div className="header-right">
          <button className="button" onClick={handleLoginClick}>Login</button>
          <button className="button" onClick={handleRegisterClick}>Register</button>
        </div>
      </header>
      <main style={mainStyle}>
        <div className="main-content">
          <h2>Welcome to Clean up Texas</h2>
          <p>Join us in our mission to keep Texas beautiful!</p>
          <div className="button-container">
            <button className="main-button" onClick={handleLearnMoreClick}>Learn More</button>
            <button className="main-button" onClick={handleGetInvolvedClick}>Get Involved</button>
            <button className="main-button" onClick={handleDonateClick}>Donate</button>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2023 Clean up Texas. All rights reserved.</p>
      </footer>
    </div>
  );
}

function handleLogoClick() {
  // Add your logo button click functionality here
  console.log("Logo button clicked!");
}

export default LandingPage;
