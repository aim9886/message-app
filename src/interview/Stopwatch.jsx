// Function Based Component

// Creating a stopwatch with start, pause, and reset features in React.js involves managing state
//  and using JavaScript's setInterval and clearInterval functions.
//   Here's a simple example of how you can implement this:

import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTimeElapsed(prevTime => prevTime + 1);
      }, 100);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeElapsed(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time Elapsed: {timeElapsed} seconds</p>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handlePause} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Stopwatch;


// In this function-based component:

// We use the useState hook to manage the isRunning and timeElapsed states.
// We use the useEffect hook to start and stop the timer based on the isRunning state.
// Inside the useEffect, we also handle cleanup by clearing the timer when the component unmounts
//  or when isRunning changes to false.
// The handleStart, handlePause, and handleReset functions update the state to control
//  the stopwatch's behavior.
// The buttons for starting, pausing, and resetting the stopwatch are rendered with
//  their respective click handlers, and they disable/enable based on the isRunning state.
// This is a function-based version of the stopwatch component with the same functionality
//  as the class-based one.
