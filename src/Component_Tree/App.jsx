// App.js
import React from 'react';
import Parent from './Parent';

const App = () => {
  return (
    <div>
      <h1>App Component</h1>
      <Parent />
    </div>
  );
};

export default App;


// In this example:

// App is the root component.
// It renders the Parent component.
// Parent component renders two child components, ChildA and ChildB.
// ChildA further renders a Grandchild component.
// This structure forms a component tree where each component can have its own state and props.
//  Data can be passed down the tree through props,
//   and events can be communicated up the tree through callbacks.
//   Understanding this tree structure is fundamental to managing state, props,
//   and the overall flow of data in a React application.
