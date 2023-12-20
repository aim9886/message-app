// Program by using useRef, useState, useEffect

import React, { useState, useEffect, useRef } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef();

  // useEffect to start the timer when the component mounts
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h1>Simple Timer</h1>
      <p>Seconds Elapsed: {seconds}</p>
    </div>
  );
}

export default Timer;



// In this code:

// We import useState, useEffect, and useRef from React.
// We define a functional component named Timer.
// We use useState to manage the seconds state, which starts at 0.
// We use useRef to create a reference called intervalRef to store the interval ID.
// Inside the useEffect hook, we start an interval that increments the seconds state every second.
//  We also return a cleanup function to clear the interval when the component unmounts.
// In the JSX, we display the number of seconds elapsed.
// This example demonstrates how to create a simple timer using only useState, useEffect,
//  and useRef in a functional component. The timer starts automatically when the component mounts
//   and stops when the component unmounts.






