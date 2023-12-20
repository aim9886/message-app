// LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.username.trim() !== '' && loginData.password.trim() !== '') {
      navigate('/content');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.formTitle}>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <label className={styles.formLabel}>Username:</label>
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            className={styles.formInput}
            required
          />
          <label className={styles.formLabel}>Password:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            className={styles.formInput}
            required
          />
          <button type="submit" className={styles.formButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
