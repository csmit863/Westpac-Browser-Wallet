import React, { useState } from 'react';
import { Button, Input } from '@westpac/ui'; // Replace with your UI library
import { importWalletFromPrivateKey, importWalletFromMnemonic, importWalletFromPassword } from '../walletUtils/walletUtils.js'; 

interface SignupProps {
  onSignup: () => void; // Define the type of onSignup handler
}

const Signup: React.FC<SignupProps> = ({ onSignup }) => {
  const [privateKey, setPrivateKey] = useState('');
  const [mnemonic, setMnemonic] = useState('');
  const [password, setPassword] = useState('');
  const [importMethod, setImportMethod] = useState(''); // Track which import method is selected

  const handleImport = async () => {
    try {
      if (importMethod === 'privateKey') {
        await importWalletFromPrivateKey(privateKey);
      } else if (importMethod === 'mnemonic') {
        await importWalletFromMnemonic(mnemonic);
      } else if (importMethod === 'passkey') {
        await importWalletFromPassword(password);
      } else {
        throw new Error('Select an import method.');
      }
      // Handle successful import (e.g., navigate to next page)
    } catch (error) {
      console.error('Error importing wallet:', error);
      // Handle error (e.g., display error message to user)
    }
  };

  return (
    <div>
      <h2>Sign Up - Import Wallet</h2>
      <div>
        <label>
          <Button>Import using passkey (recommended)</Button>
        </label>
      </div><br/>
      <div>
        <label>
          <Button>Import using mneomnic phrase</Button>
        </label>
      </div><br/>
      <div>
        <label>
          <Button>Import using raw private key</Button>
        </label>
      </div>
      
    </div>
  );
}

export default Signup;
