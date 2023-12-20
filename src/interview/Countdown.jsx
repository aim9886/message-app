// Function based Component

import React, { useState, useEffect, useRef } from 'react';

function Countdown() {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inputTime, setInputTime] = useState('');
  const timerRef = useRef(null);

  const handleInputChange = (event) => {
    setInputTime(event.target.value);
  };

  const handleStart = () => {
    if (!isRunning) {
      const newTimeRemaining = parseInt(inputTime, 10) * 60;
      setTimeRemaining(newTimeRemaining);
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setTimeRemaining(0);
    setIsRunning(false);
    setInputTime('');
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        if (timeRemaining > 0) {
          setTimeRemaining(timeRemaining - 1);
        } else {
          clearInterval(timerRef.current);
          setIsRunning(false);
        }
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => {
      // Cleanup timer when the component unmounts
      clearInterval(timerRef.current);
    };
  }, [isRunning, timeRemaining]);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>{formatTime(timeRemaining)}</p>
      {isRunning ? (
        <button onClick={handleStop}>Stop</button>
      ) : (
        <div>
          <input
            type="number"
            placeholder="Enter minutes"
            value={inputTime}
            onChange={handleInputChange}
          />
          <button onClick={handleStart}>Start</button>
        </div>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Countdown;
