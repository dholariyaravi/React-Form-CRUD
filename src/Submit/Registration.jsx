import React, { useState } from 'react';

function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // Validate input (you can add more validation logic here)
    if (username.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    // Store registration data in localStorage
    const userData = {
      username: username,
      password: password,
    };
    localStorage.setItem(username, JSON.stringify(userData));

    alert('Registration successful');
  };

  return (
    <div>
      <h2>Registration</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
}

export default Registration;
