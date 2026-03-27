import React, { useState } from 'react';
import InputField from './InputField';

function RegisterForm({ onSwitch }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = () => {
    if (name === '' || email === '' || password === '') {
      setMessage('Please fill in all fields.');
    } else if (password.length < 6) {
      setMessage('Password must be at least 6 characters.');
    } else {
      setMessage('Registration successful! Welcome, ' + name);
    }
  };

  return (
    <div className="form-box">
      <h2>Register</h2>
      <InputField
        label="Full Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your full name"
      />
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
      <button onClick={handleRegister}>Register</button>
      {message && <p className="message">{message}</p>}
      <p className="switch-text">
        Already have an account?{' '}
        <span onClick={onSwitch}>Login here</span>
      </p>
    </div>
  );
}

export default RegisterForm;