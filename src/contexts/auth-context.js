import { createContext, useEffect, useContext, useState } from 'react';

const initialState = {
  username: JSON.parse(localStorage.getItem('username'))
};

const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
  const [username, setUserName] = useState(initialState.username || '');
  const [auth, setAuth] = useState(initialState.username ? true : false);

  useEffect(() => {
    if (auth) {
      localStorage.setItem('username', JSON.stringify(username));
    } else {
      localStorage.removeItem('username');
    }
  }, [auth, username]);

  const value = {
    username,
    setUserName,
    setAuth,
    auth
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export default AuthProvider;
export { useAuth };
