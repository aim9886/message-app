// Program by using useRef, useState, useEffect

import React, { useState, useEffect, useRef } from 'react';

function App4() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();

  // useEffect to start the automatic incrementing when the component mounts
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  // Function to manually increment the count
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>Automatic Increment: {count}</p>
      <button onClick={incrementCount}>Increment Manually</button>
    </div>
  );
}

export default App4;



// In this code:

// We import useState, useEffect, and useRef from React.
// We define a functional component named App.
// We use useState to manage the count state, which starts at 0.
// We use useRef to create a reference called intervalRef to store the interval ID.
// Inside the useEffect hook, we start an interval that automatically increments
//  the count every second. We also return a cleanup function to clear the interval when
//   the component unmounts.
// We define a function incrementCount to manually increment the count when the button is clicked.
// In the JSX, we display the current count and provide a button to manually increment it.
// This example demonstrates how to use useState, useEffect, and useRef in a functional
//  component to manage state, handle side effects, and create references.