import React, { useState } from "react";

// import "./style.css";

const HowToPlay = () => {
  const [showRules, setShowRules] = useState(false);

  const toggleRules = () => {
    setShowRules(!showRules);
  };

  return (
    <div>
      <button className="flat-black-button" onClick={toggleRules}>
        How to Play
      </button>
      {showRules ? (
        <div>
          <p className="flat-black-button-content">
            To get under way, click 'Start'. Once you have started the quiz,
            type an answer into the box and either hit enter or click the submit
            button. If you are right, it will fill in the correct slot in the
            table. Keep entering more answers until you've successfully
            completed the quiz - or the timer runs out. If you do not want to
            play any more, just hit the 'Give up!' button. You can then reveal
            the answers you missed - or have another go.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default HowToPlay;



// This component displays a "How to Play" button and shows the game instructions
//  when the button is clicked.

// Let's break down the code:

// We use the useState hook to create a state variable showRules and its setter function setShowRules,
//  initialized to false. This state toggles the display of the game instructions
//   when the button is clicked.
// The toggleRules function is called when the "How to Play" button is clicked,
//  which toggles the showRules state using setShowRules.
// The return statement displays the "How to Play" button using a button element,
//  which has a class name of "flat-black-button". It also conditionally displays
//   the game instructions if showRules is true.
// We display the game instructions using a paragraph element, which has a class name
//  of "flat-black-button-content".
// Finally, we export the HowToPlay component as the default export of the module.
// You can use this component in other parts of the application where the "How to Play" button is needed.
//  When the button is clicked, the game instructions will be displayed or hidden based on the
//   current state of showRules.