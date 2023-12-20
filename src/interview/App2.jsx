import React, { useState } from 'react';

function App2() {
  // Step 3: Create a state variable for age
  const [age, setAge] = useState('');

  // Step 5: Use conditional rendering to display output
  const renderOutput = () => {
    if (age === '') {
      return null; // Output is initially empty
    } else if (parseInt(age) > 18) {
      return <p>Welcome</p>;
    } else {
      return <p>Exit</p>;
    }
  };

  return (
    <div className="App">
      <h1>Age Checker</h1>
      {/* Step 4: Create an input field */}
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      {/* Step 5: Display output */}
      {renderOutput()}
    </div>
  );
}

export default App2;


// The parseInt function is used to convert a string into an integer (whole number) in JavaScript.
// In the provided code, it's used to ensure that the value entered in the input field is treated
//  as an integer when comparing it to the age conditions (greater than, less than, or equal to 18).


// By using parseInt, you convert the string representation of the age into an actual integer,
//  ensuring that the numerical conditions work as expected. For instance, parseInt("18")
//   returns the integer 18, which can be correctly compared with the conditions.







