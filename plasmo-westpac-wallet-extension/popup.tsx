import React, { useState } from "react";
import { Button, Input } from '@westpac/ui'; // Replace with your UI library
import icon from './assets/pinkpac.png';
import Login from './popup/Login'; // Import the Login component
import Signup from './popup/Signup'; // Import the Signup component
import HomePage from './popup/Homepage'; // Import the HomePage component

function IndexPopup() {
  const [data, setData] = useState("");
  const [hasAccount, setHasAccount] = useState(true); // State to track account existence
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [balance, setBalance] = useState(0); 

  const handleLogin = (pin: string) => {
    // Placeholder for actual login logic
    console.log('Logging in with pin:', pin);
    // Replace with actual authentication logic
    setHasAccount(true); // Simulate successful login

    // Simulate fetching user balance
    setBalance(243.5); // Example balance
    setIsLoggedIn(true); // Set login status to true
  };

  const handleSignup = () => {
    // Placeholder for signup logic
    console.log('Signing up...');
    // Replace with actual signup logic
    setHasAccount(true); // Simulate successful signup
  };

  const handleLogout = () => {
    // Placeholder for actual logout logic
    console.log('Logging out...');
    setIsLoggedIn(false); // Set login status to false
    setBalance(0); // Reset balance
  };

  return (
    <div
      style={{
        margin: 0,
        padding: '16px',
        width: '350px', // Adjust width as needed
        maxWidth: '400px', // Example: set maximum width to prevent excessive stretching
        minHeight: '450px',
        backgroundColor: "#FFD9F7",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto', // Adjust height to be automatic
        boxSizing: 'border-box',
      }}
    >
      {!isLoggedIn && (
        <div>
          <img src={icon} width={'200px'} height={'200px'} alt="Icon" style={{ marginBottom: '16px' }} />
          <h3 style={{ color: '#181B25', marginBottom: '16px' }}>Westpac Browser Wallet</h3>
        </div>
      )}
      {!isLoggedIn ? (
        !hasAccount ? (
          <Signup onSignup={handleSignup} /> 
        ) : (
          <Login onLogin={handleLogin} /> 
        )
      ) : (
        <HomePage balance={balance} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default IndexPopup;
