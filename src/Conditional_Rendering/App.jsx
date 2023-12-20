import React, { useState, createContext, useContext } from 'react';

// Create an authentication context
const AuthContext = createContext();

// A component to provide authentication context values
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Simulating a login action
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Simulating a logout action
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// A component that requires authentication
const PrivateComponent = () => {
  const authContext = useContext(AuthContext);

  return (
    <div>
      {authContext.isAuthenticated ? (
        <p>Welcome to the private component! You are authenticated.</p>
      ) : (
        <p>You need to log in to access this component.</p>
      )}
    </div>
  );
};

// A component representing the main application
const App = () => {
  return (
    <AuthProvider>
      <div>
        <h1>Conditional Rendering with Authentication</h1>

        {/* Components rendered based on authentication status */}
        <PrivateComponent />

        {/* Button to simulate login/logout */}
        <AuthContext.Consumer>
          {({ isAuthenticated, login, logout }) => (
            <div>
              {isAuthenticated ? (
                <button onClick={logout}>Logout</button>
              ) : (
                <button onClick={login}>Login</button>
              )}
            </div>
          )}
        </AuthContext.Consumer>
      </div>
    </AuthProvider>
  );
};

export default App;



// In this example:

// 1) The AuthProvider component provides the authentication context,
//  including the isAuthenticated state and functions to simulate login and logout actions.
// 2) The PrivateComponent component uses the useContext hook to access the authentication context
//  and conditionally renders different content based on the isAuthenticated state.
// 3) The main App component renders the PrivateComponent and
//  buttons to simulate login and logout actions.

// When you run this example, you'll see that the content of the PrivateComponent
//  is conditionally rendered based on whether the user is authenticated or not.
//   The login and logout buttons also trigger changes in the authentication state,
//    causing the UI to update accordingly. This is a common pattern in real-world applications
//     for displaying different parts of the UI based on the user's authentication status.







