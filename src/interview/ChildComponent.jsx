// How to Pass data from Child to Parent => Interview Question

import React from 'react';

function ChildComponent({ sendDataToParent }) {
  const handleClick = () => {
    const data = 'Hello from Child!';
    sendDataToParent(data);
  };

  return (
    <div>
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
}

export default ChildComponent;


/////////////////////////////////////////////////////////////////////////////////////

// How to Pass data from Parent to Child


// import React from 'react';

// function ChildComponent({ dataFromParent }) {
//   return (
//     <div>
//       <h1>Data from Parent: {dataFromParent}</h1>
//     </div>
//   );
// }

// export default ChildComponent;

