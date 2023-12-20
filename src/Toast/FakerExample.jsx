import React from 'react';
import faker from 'faker';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FakerExample = () => {
  const generateFakeUser = () => {
    // Generate fake user data using faker
    const fakeUser = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
    };

    // Show toast with fake user data
    toast.info(
      `Generated Fake User:
      Name: ${fakeUser.name}
      Email: ${fakeUser.email}
      Address: ${fakeUser.address}`,
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
  };

  return (
    <div>
      <h2>Faker Example</h2>
      <button type="button" onClick={generateFakeUser}>
        Generate Fake User
      </button>
      <ToastContainer />
    </div>
  );
};

export default FakerExample;
