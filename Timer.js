// Timer.js
import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Timer</h2>
      <p>Component open for: {seconds} seconds</p>
    </div>
  );
};

export default Timer;
