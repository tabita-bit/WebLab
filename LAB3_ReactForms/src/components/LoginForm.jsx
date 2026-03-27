import React, { useState } from 'react';
import InputField from './InputField';

function LoginForm({ onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      setMessage('Please fill in all fields.');
    } else {
      setMessage('Login successful! Welcome, ' + email);
    }
  };

  return (
    <div className="form-box">
      <h2>Login</h2>
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <button onClick={handleLogin}>Login</button>
      {message && <p className="message">{message}</p>}
      <p className="switch-text">
        Don't have an account?{' '}
        <span onClick={onSwitch}>Register here</span>
      </p>
    </div>
  );
}

export default LoginForm;