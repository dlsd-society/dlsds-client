import React, { createContext, useState, useContext, useEffect } from 'react';

const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("userToken");
    const storedUser = localStorage.getItem("user");

    if (storedToken) {
      setUserToken(storedToken);
      setIsUserLoggedIn(true);
    }
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (token, userData) => {
    localStorage.setItem("userToken", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUserToken(token);
    setUser(userData);
    setIsUserLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("user");
    setUserToken(null);
    setUser(null);
    setIsUserLoggedIn(false);
  };

  return (
    <UserAuthContext.Provider value={{ isUserLoggedIn, userToken, user, login, logout }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => useContext(UserAuthContext);