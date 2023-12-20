// Create react form by calling only 1 state object with only 2 input fields (Username and password)
// and after login it should go to the next page with success data.

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check login credentials (replace this with your actual authentication logic)
    if (formData.username === 'Hemanth Kumar' && formData.password === '12345678') {
      // Successful login, navigate to success page
      navigate('/success');
      console.log('Form submitted:', formData);

    } else {
      // Failed login
      setLoginError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      {loginError && <p style={{ color: 'red' }}>Invalid username or password</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
