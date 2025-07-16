// Users.js
import React, { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hiddenEmails, setHiddenEmails] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const toggleEmail = (id) => {
    setHiddenEmails((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.id} style={{ border: '1px solid #ccc', margin: '8px', padding: '10px' }}>
          <h3>{user.name}</h3>
          {hiddenEmails[user.id] ? null : <p>Email: {user.email}</p>}
          <button onClick={() => toggleEmail(user.id)}>
            {hiddenEmails[user.id] ? 'Show Email' : 'Hide Email'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Users;
