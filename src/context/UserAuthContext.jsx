// UserAuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import BASE_URL from '../config/config';

const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 👈 new

  useEffect(() => {
    const storedToken = localStorage.getItem("userToken");

    if (storedToken) {
      setUserToken(storedToken);

      fetch(`${BASE_URL}/user/profile`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.user) {
            setUser(data.user);
            setIsUserLoggedIn(true);
            localStorage.setItem("user", JSON.stringify(data.user));
          } else {
            logout();
          }
        })
        .catch(() => logout())
        .finally(() => setLoading(false)); // 👈 finish loading
    } else {
      setLoading(false); // 👈 finish loading if no token
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
    <UserAuthContext.Provider
      value={{ isUserLoggedIn, userToken, user, login, logout, loading }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => useContext(UserAuthContext);
