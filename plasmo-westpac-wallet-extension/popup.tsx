import React, { useState } from "react";
import { Button, Input } from '@westpac/ui'; // Replace with your UI library
import icon from './assets/icon.png';
import Login from './popup/Login'; // Import the Login component
import Signup from './popup/Signup'; // Import the Signup component

function IndexPopup() {
  const [data, setData] = useState("");
  const [hasAccount, setHasAccount] = useState(true); // State to track account existence

  const handleLogin = (pin: string) => {
    // Placeholder for actual login logic
    console.log('Logging in with pin:', pin);
    // Replace with actual authentication logic
    setHasAccount(true); // Simulate successful login
  };

  const handleSignup = () => {
    // Placeholder for signup logic
    console.log('Signing up...');
    // Replace with actual signup logic
    setHasAccount(true); // Simulate successful signup
  };

  return (
    <div
      style={{
        margin: 0,
        padding: '16px',
        width: '350px', // Adjust width as needed
        maxWidth: '400px', // Example: set maximum width to prevent excessive stretching
        backgroundColor: "#DA1710",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '500px', // Ensure full viewport height
        boxSizing: 'border-box'
      }}
    >
      <div>
        <img src={icon} width={'200px'} height={'200px'} alt="Icon" style={{ marginBottom: '16px' }} />
      </div>
      <h3 style={{ color: '#fff', marginBottom: '16px' }}>Westpac Browser Wallet</h3>
      {!hasAccount ? (
        <Signup onSignup={handleSignup} /> 
      ) : (
        <Login onLogin={handleLogin} /> 
      )}
    </div>
  );
}

export default IndexPopup;
