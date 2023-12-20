import React, { useState, useEffect } from 'react';

function Timestamp() {
  const [timestamp, setTimestamp] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(new Date().toLocaleString());
    }, 1000);

    // Clean-up function
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Current Timestamp:</h1>
      <p>{timestamp}</p>
    </div>
  );
}

export default Timestamp;
