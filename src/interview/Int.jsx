// Props Program

import React from 'react'

function Int (props) {
    const message = props.message||'Default Message';
  return (
    <div>
        <h1>{message}</h1>
    </div>
  )
}

export default Int

// O/P: Default Message



// For example, if you were to use this component in another React component like this:


// import React from 'react';
// import Int from './Int';

// function App() {
//   return (
//     <div>
//       <Int message="Hello, World!" />
//       <Int />
//     </div>
//   );
// }

// export default App;

// The output in the browser would be:


// Hello, World!
// Default Message

// The first <Int> component receives the prop message with the value "Hello, World!"
// and displays it. The second <Int> component doesn't receive a message prop,
// so it displays the default message "Default Message."


// The output of this component depends on how it is used in your application.
// When you use this component and pass a message prop,
// it will display the value of that prop in an <h1> element.
// If you don't pass a message prop, it will display the default message, which is "Default Message."