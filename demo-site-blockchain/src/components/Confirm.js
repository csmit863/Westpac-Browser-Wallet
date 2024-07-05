import React from 'react';
import { Link } from 'react-router-dom';
import './Confirm.css'; // Make sure this file exists and is correctly linked

const PaymentConfirmed = () => {
  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        <h2>Payment Confirmed!</h2>
        <p>Thank you for your purchase. Your payment has been successfully processed.</p>
        <Link to="/" className="home-button">Return to Home</Link>
      </div>
    </div>
  );
};

export default PaymentConfirmed;
