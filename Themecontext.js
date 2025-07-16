import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const themeStyles = {
    backgroundColor: theme === 'light' ? '#fff' : '#121212',
    color: theme === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    transition: 'all 0.3s ease',
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};
