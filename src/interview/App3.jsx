import React, { useState } from 'react';

function App3() {
  const [age, setAge] = useState(''); // State variable to store age

  // Function to handle age input change
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  // Function to render output based on age
  const renderOutput = () => {
    if (age === '') {
      return null; // No output when age is not entered
    } else if (parseInt(age) > 18) {
      return <p>Welcome</p>;
    } else if (parseInt(age) < 18) {
      return <p>Exit</p>;
    } else {
      return <p>Stay</p>;
    }
  };

  return (
    <div className="App">
      <h1>Age Checker</h1>
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={handleAgeChange} // Call handleAgeChange on input change
      />
      {/* Display output */}
      {renderOutput()}
    </div>
  );
}

export default App3;


{/* else if (parseInt(age) === 18) {
    return <p>Stay</p>;} you can use this type also for third condition i.e stay in place of else statement */}
