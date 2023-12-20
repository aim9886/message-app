// ContentPage.jsx
import React from 'react';
import styles from './ContentPage.module.css';

const ContentPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.contentTitle}>Content Page</h2>
        <p className={styles.successMessage}>Logged in successfully!</p>
      </div>
    </div>
  );
};

export default ContentPage;



