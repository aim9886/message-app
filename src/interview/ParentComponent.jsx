// How to Pass data from Child to Parent => Interview Question

import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [dataFromChild, setDataFromChild] = useState('');

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <div>
      <h1>Data from Child: {dataFromChild}</h1>
      <ChildComponent sendDataToParent={handleDataFromChild} />
    </div>
  );
}

export default ParentComponent;


//////////////////////////////////////////////////////////////////////////////////////

// How to Pass data from Parent to Child

// import React from 'react';
// import ChildComponent from './ChildComponent';

// function ParentComponent() {
//   const data = 'Hello from Parent!';

//   return (
//     <div>
//       <ChildComponent dataFromParent={data} />
//     </div>
//   );
// }

// export default ParentComponent;

