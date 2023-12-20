// Q) Component A needs to talk to components B and C, so it sends a message,
//  indicated by the red line, to App using "props". App then passes that message down to B and C
//   using their own "props".


// import "./App.css";

import React, { useState } from "react";

function App2() {
  return (
    <div>
      <A />
    </div>
  );
}

function A() {
  const [showB, setShowB] = useState(false);
  const [showC, setShowC] = useState(false);
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
    setShowB(true);
    setShowC(true);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleInputChange} />
      {showB && <B text={text} />}
      {showC && <C text={text} />}
    </div>
  );
}

function B(props) {
  const { text } = props;
  return <h1>Component B - {text.toUpperCase()}</h1>;
}

function C(props) {
  const { text } = props;
  return <h1>Component C - {text.toLowerCase()}</h1>;
}

export default App2;


// In this example, the A component has three state variables: showB, showC, and text.
//  When the input field value changes, the handleInputChange function is called and based on the
//   input field value, the text state variable is updated and showB and showC state variables
//    are set to true.

// The B and C components are functional components that receive the text prop
//  as input and render the text in different ways – B component renders the text in uppercase,
//   while C component renders the text in lowercase.

// The && operator is used to conditionally render the components based on their respective state
//  variables.