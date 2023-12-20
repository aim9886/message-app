// Parent.js
import React from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

const Parent = () => {
  return (
    <div>
      <h2>Parent Component</h2>
      <ChildA />
      <ChildB />
    </div>
  );
};

export default Parent;
