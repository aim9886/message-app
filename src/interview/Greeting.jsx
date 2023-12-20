import React, { Component } from 'react';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false, // Initially, the user is not logged in
    };
  }

  render() {
    // Check the isLoggedIn state to determine the message to display
    if (this.state.isLoggedIn) {
      return <p>Welcome, User!</p>;
    } else {
      return <p>Please log in to continue.</p>;
    }
  }
}

export default Greeting;

// O/P: if we write false in isLoggedIn: it will show output as please log in to continue
// and if we write true in isLoggedIn: it will show output as welcome, user.
