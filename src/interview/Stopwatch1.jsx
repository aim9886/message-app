// Class Based Component

// Creating a stopwatch with start, pause, and reset features in React.js involves managing state
//  and using JavaScript's setInterval and clearInterval functions.
//   Here's a simple example of how you can implement this:

import React, { Component } from 'react';

class Stopwatch1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      timeElapsed: 0,
    };
    this.timer = null;
  }

  handleStart = () => {
    if (!this.state.isRunning) {
      this.setState({ isRunning: true });
      this.timer = setInterval(() => {
        this.setState({ timeElapsed: this.state.timeElapsed + 1 });
      }, 100);
    }
  };

  handlePause = () => {
    if (this.state.isRunning) {
      this.setState({ isRunning: false });
      clearInterval(this.timer);
    }
  };

  handleReset = () => {
    this.setState({
      isRunning: false,
      timeElapsed: 0,
    });
    clearInterval(this.timer);
  };

  render() {
    const { isRunning, timeElapsed } = this.state;
    return (
      <div>
        <h1>Stopwatch</h1>
        <p>Time Elapsed: {timeElapsed} seconds</p>
        <button onClick={this.handleStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={this.handlePause} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch1;



// In this code:

// We initialize the component state with isRunning set to false (the stopwatch is not running)
//  and timeElapsed set to 0 seconds.
// We use the setInterval function to update the timeElapsed state every second when the
//  stopwatch is running. We store the timer ID in the this.timer property.
// The handleStart function starts the stopwatch by setting isRunning to true and starting the timer.
// The handlePause function pauses the stopwatch by setting isRunning to false and clearing the timer.
// The handleReset function resets the stopwatch by setting isRunning to false and timeElapsed to 0,
//  and also clearing the timer.
// We render buttons for starting, pausing, and resetting the stopwatch,
//  and disable them based on the isRunning state.
// You can use this Stopwatch component in your React application to have a simple stopwatch with start,
//  pause, and reset functionality.









