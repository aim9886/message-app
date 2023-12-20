// Here’s a simple example of a uncontrolled form in React

import React, { useRef } from 'react';

function UnControlledForm() {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Access form values directly through refs
    const nameValue = nameInputRef.current.value;
    const emailValue = emailInputRef.current.value;

    // Do something with the form values, e.g., send them to a server
    console.log('Name:', nameValue);
    console.log('Email:', emailValue);

    // You can also reset the form fields if needed
    nameInputRef.current.value = '';
    emailInputRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={nameInputRef}
        placeholder="Name"
      />
      <input
        type="email"
        ref={emailInputRef}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UnControlledForm