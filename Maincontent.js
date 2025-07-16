import React, { useContext, useState } from 'react';
import { UserContext } from './Usercontext';

const MainContent = () => {
  const { user, login, logout } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  if (user.isLoggedIn) {
    return (
      <div>
        <h2>Hello, {user.name}!</h2>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(name, email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default MainContent;
