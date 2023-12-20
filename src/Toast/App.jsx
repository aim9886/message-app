import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './Signup';
import Login from './Login';

const App = () => {
  return (
    <div>
      <Signup />
      <Login />
      <ToastContainer />
    </div>
  );
};

export default App;
