import React from "react";
import { Button } from '@westpac/ui'; // Replace with your UI library
import icon from '../assets/pinkpac.png'; // Adjust the path to your icon image

interface HomePageProps {
  balance: number;
  onLogout: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ balance, onLogout }) => {
  return (
    <div style={{ position: 'relative', height: '450px', width: '100%', padding: '16px', boxSizing: 'border-box' }}>
      <p style={{ color: "#181B25" }}>Balance: ${balance}</p>
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
