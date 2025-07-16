// CardDemo.js
import React from 'react';
import Card from './Card';

const CardDemo = () => {
  return (
    <div>
      <Card>
        <h2>News</h2>
      </Card>
      <Card>
        <p>Today’s weather is sunny.</p>
      </Card>
    </div>
  );
};

export default CardDemo;
