// Class based Component

import React, { Component } from 'react';

class CountdownTimer extends Component {
  constructor() {
    super();
    this.state = {
      timeRemaining: 0,
      isRunning: false,
      inputTime: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      inputTime: event.target.value,
    });
  };

  handleStart = () => {
    if (!this.state.isRunning) {
      const timeRemaining = parseInt(this.state.inputTime, 10) * 60;
      this.setState({
        timeRemaining,
        isRunning: true,
      });

      this.timer = setInterval(this.updateTime, 1000);
    }
  };

  handleStop = () => {
    if (this.state.isRunning) {
      clearInterval(this.timer);
      this.setState({
        isRunning: false,
      });
    }
  };

  handleReset = () => {
    clearInterval(this.timer);
    this.setState({
      timeRemaining: 0,
      isRunning: false,
      inputTime: '',
    });
  };

  updateTime = () => {
    if (this.state.timeRemaining > 0) {
      this.setState({
        timeRemaining: this.state.timeRemaining - 1,
      });
    } else {
      clearInterval(this.timer);
      this.setState({
        isRunning: false,
      });
    }
  };

  formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  render() {
    const { timeRemaining, isRunning, inputTime } = this.state;

    return (
      <div>
        <h1>Countdown Timer</h1>
        <p>{this.formatTime(timeRemaining)}</p>
        {isRunning ? (
          <button onClick={this.handleStop}>Stop</button>
        ) : (
          <div>
            <input
              type="number"
              placeholder="Enter minutes"
              value={inputTime}
              onChange={this.handleInputChange}
            />
            <button onClick={this.handleStart}>Start</button>
          </div>
        )}
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default CountdownTimer;
