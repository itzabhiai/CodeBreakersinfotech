import React, { useState, useEffect } from 'react';
import AdminLink from './AdminLink/AdminLink';
import './Admin.css';
import { toast } from 'react-toastify';

export const Admin = () => {
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('loggedIn') === 'true'
  );

  const handleLogin = () => {
    const validEmail = 'admin@codebreakers.com';
    const validPassword = 'admin@4323';

    if (email === validEmail && password === validPassword) {
      // Save login information to localStorage
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('email', email);
      setLoggedIn(true);
    } else {
      toast.error('Invalid email or password');
    }
  };

  const handleLogout = () => {
    // Clear login information from localStorage and reset state
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('email');
    setLoggedIn(false);
  };

  useEffect(() => {
    // Check localStorage for logged-in status on component mount
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    if (isLoggedIn) {
      setLoggedIn(true);
    }
  }, []);

  if (!loggedIn) {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <h2>Admin Login</h2>
        <div className="adminlogin">
          <input
            className="admininput"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="admininput"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="adminbtn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button className='delete' onClick={handleLogout}>Logout</button>
      <AdminLink />
      {/* Render other admin components here */}
    </div>
  );
};
