import React, { useState, useMemo } from 'react';

const ExampleComponent = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');

  // Using useMemo to memoize the result of the computation
  const squaredNumber = useMemo(() => {
    console.log('Computing squared number...');
    return number * number;
  }, [number]); // Dependency array - recompute if 'number' changes

  return (
    <div>
      <h2>Example Component</h2>
      <p>
        <label>
          Enter a number:
          <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
        </label>
      </p>
      <p>
        <label>
          Enter some text:
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </label>
      </p>
      <p>Squared number: {squaredNumber}</p>
    </div>
  );
};

export default ExampleComponent;
