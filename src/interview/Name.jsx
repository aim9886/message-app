// Props Program

import React from 'react'

function Greeting (props) {
    if(props.name) {
        return <h1>Hello, {props.name}!</h1>
    } else {
        return <h1>Hello, Stranger!</h1>
    }
}

function Name () {
  return (
    <div>
        <Greeting name="John"/>
        <Greeting/>
    </div>
  )
}

export default Name


//O/P: Hello, John!
//     Hello, Stranger!


// The first <Greeting> component displays "Hello, John!"
// because it receives the name prop with the value "John."
// The second <Greeting> component displays "Hello, Stranger!"
// because it doesn't receive the name prop,
// and the conditional rendering in the Greeting component defaults to "Hello, Stranger!"
// when props.name is not provided.


// This program is a React application with two functional components: Greeting and Name.
// The Greeting component takes a props object as input and conditionally displays a
// greeting message based on whether the props.name property is provided or not.
// The Name component renders two instances of the Greeting component,
// passing different props to each one.

// Here's a breakdown of the code:

// import React from 'react': This line imports the React library,
// which is necessary for creating React components and using JSX syntax.

// The Greeting component is defined as a functional component that takes props as its input.

// Inside the Greeting component, there is a conditional check using if (props.name) to determine
// if the props.name property is provided. If props.name is provided,
// it returns an <h1> element displaying a personalized greeting.
// If props.name is not provided, it returns a generic "Hello, Stranger!" message.

// The Name component is defined and returns a JSX structure. Inside the Name component,
// there are two instances of the Greeting component:

// The first instance of Greeting has the name prop set to "John,"
// so it will display the message "Hello, John!"
// The second instance of Greeting does not have the name prop provided,
// so it will display the default message "Hello, Stranger!"
// Finally, the Name component is exported as the default export of this module,
// making it available for use in other parts of the application.