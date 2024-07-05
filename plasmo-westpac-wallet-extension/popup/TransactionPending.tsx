import React from 'react';
import { Button } from '@westpac/ui'; // Replace with your UI library

const TransactionPending = ({ amount, currency, recipient, onConfirm }) => {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
      }}
    >
      <h2>Pending Transaction</h2>
      <p>
        Send <strong>{amount} {currency}</strong> to <strong>{recipient}</strong>
      </p>
      <Button onClick={onConfirm}>Confirm Transaction</Button>
    </div>
  );
};

export default TransactionPending;
