import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const storedUserData = localStorage.getItem(username);

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (userData.password === password) {
        alert('Login successful');
      } else {
        alert('Incorrect password');
      }
    } else {
      alert('User not found');
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
