import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FakerExample from './FakerExample';

const App1 = () => {
  return (
    <div>
      <FakerExample />
      <ToastContainer />
    </div>
  );
};

export default App1;
