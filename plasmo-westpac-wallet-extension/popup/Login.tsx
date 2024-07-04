import React, { useState } from "react";
import { Button, Input } from '@westpac/ui'; // Replace with your UI library

interface LoginProps {
  onLogin: (pin: string) => void; // Callback function to handle login
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [data, setData] = useState("");

  const handleLoginClick = () => {
    // Pass pin to parent component for authentication
    onLogin(data);
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <h2>Login</h2>
      <Input
        placeholder="Pin"
        type="password"
        value={data}
        onChange={(e) => setData(e.target.value)}
        style={{ marginBottom: 16, width: '100%' }}
      />
    </div>
  );
}

export default Login;
