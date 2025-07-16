import React, { useContext } from 'react';
import { ThemeContext } from './Themecontext';

const Header = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <header style={{ padding: '10px' }}>
      <h1>My Themed App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
};

export default Header;
