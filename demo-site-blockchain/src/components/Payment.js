import React from 'react';
import { Link } from 'react-router-dom';
import './Payment.css'; // Import your CSS file for styling

const Payment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add any payment processing logic here
    console.log('Payment submitted');
  };

  return (
    <div className="payment-container">
      <div className="payment-header">
            <h2>Choose Payment Method</h2>
      </div>
      <div className="payment-header2">
            <Link to="/confirm" className="digital-wallet-button">Pay with Digital Wallet</Link>
      </div>
      <div className="payment-header2">
            <button className="digital-wallet-button">Pay with PayPal</button>
      </div>
      <div className="payment-header2">
            <button className="digital-wallet-button">Pay with Credit or Debit Card</button>
      </div>
      <div className="payment-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" name="cardNumber" required />

          <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required />

          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" maxLength="3" required />

          <label htmlFor="nameOnCard">Name on Card:</label>
          <input type="text" id="nameOnCard" name="nameOnCard" required />

          <button type="submit" className="payment-button">Submit Payment</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
