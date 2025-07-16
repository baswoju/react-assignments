import React, { useContext } from 'react';
import { ThemeContext } from './Themecontext';
import { UserContext } from './Usercontext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  return (
    <footer style={{ marginTop: '20px' }}>
      <p>Current Theme: {theme}</p>
      <p>User Email: {user.email || 'Not logged in'}</p>
    </footer>
  );
};

export default Footer;
