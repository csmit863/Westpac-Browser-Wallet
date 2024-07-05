import React, { useState } from "react";
import { Button } from '@westpac/ui'; // Replace with your UI library
import icon from '../assets/pinkpac.png'; // Adjust the path to your icon image

interface HomePageProps {
  balance: number;
  onLogout: () => void;
}

interface Transaction {
  id: string;
  amount: number;
  date: string;
  description: string;
}

const HomePage: React.FC<HomePageProps> = ({ balance, onLogout }) => {
  const [txHistory, setTxHistory] = useState<Transaction[]>([
    { id: '1', amount: 100, date: '2024-07-01', description: 'Payment received' },
    { id: '2', amount: -50, date: '2024-07-02', description: 'Payment sent' },
  ]);

  return (
    <div style={{ position: 'relative', height: '450px', width: '100%', padding: '16px', boxSizing: 'border-box' }}>
      <div>
        <h3>alice.westpac.id</h3>
        <h2 style={{ color: "#181B25" }}>${balance} AUD</h2>
      </div>
      <div>
        {/* Transaction history */}
        <p>Transaction History</p>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Date</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Amount</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            {txHistory.map((tx) => (
              <tr key={tx.id}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{tx.date}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{tx.amount}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{tx.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Button 
        onClick={onLogout} 
        style={{ 
          position: 'absolute', 
          bottom: '10px', 
          right: '0px' 
        }}
      >
        Lock Wallet
      </Button>
      <img 
        src={icon} 
        alt="Westpac Logo" 
        style={{ 
          position: 'absolute', 
          bottom: '0px', 
          left: '0px', 
          width: '50px', 
          height: '50px', 
        }}
      />
    </div>
  );
};

export default HomePage;
