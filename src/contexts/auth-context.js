import { createContext, useEffect, useContext, useState } from 'react';

const initialState = {
  username: JSON.parse(localStorage.getItem('username')) || null
};

const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(initialState.username);

  useEffect(() => {
    if (username) {
      localStorage.setItem('username', JSON.stringify(username));
    }
  }, [username]);

  const value = {
    username,
    setUsername
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
