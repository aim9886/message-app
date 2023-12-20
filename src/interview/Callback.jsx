import React, { useState } from 'react'

//child
const Callback = ({ getColor }) => {
    const [activecolor, setActiveColor] = useState();

    const handleChange = (e) => {
        const { value } = e.target;
        setActiveColor(value);
        getColor(value);
    };
  return (
    <div className='button'>
    <input
    type='text'
    id='input'
    aria-label='input'
    onChange={handleChange}
    value={activecolor}
    />
    </div>
  );
};

export default Callback;