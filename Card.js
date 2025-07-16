// Card.js
import React from 'react';

const Card = ({ children }) => {
  return (
    <div style={{ border: '2px solid black', padding: '10px', margin: '10px' }}>
      {children}
    </div>
  );
};

export default Card;
