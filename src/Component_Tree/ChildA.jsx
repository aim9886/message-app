// ChildA.js
import React from 'react';
import Grandchild from './Grandchild';

const ChildA = () => {
  return (
    <div>
      <h3>Child A Component</h3>
      <Grandchild />
    </div>
  );
};

export default ChildA;
