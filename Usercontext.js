import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: '', email: '', isLoggedIn: false });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser?.isLoggedIn) setUser(savedUser);
  }, []);

  const login = (name, email) => {
    const newUser = { name, email, isLoggedIn: true };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    const resetUser = { name: '', email: '', isLoggedIn: false };
    setUser(resetUser);
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
