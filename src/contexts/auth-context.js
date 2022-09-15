import { createContext, useEffect, useContext, useState } from 'react';

const initialState = {
  username: JSON.parse(localStorage.getItem('username')) || null
};

const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
  const [username, setUserName] = useState(initialState.username);
  const [auth, setAuth] = useState(initialState.username !== null);

  useEffect(() => {
    if (auth) {
      localStorage.setItem('username', JSON.stringify(username));
    }
  }, [auth]);

  const value = {
    username,
    setUserName,
    setAuth
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
