import { useState, useEffect } from 'react';

function Timer() {
  const { seconds, setSeconds } = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((prev) => prev + 1);
      console.log('타이머 작동 중');
    }, 1000);

    return () => {
      clearInterval(timerId);
      console.log('타이머 종료');
    };
  }, []);

  return (
    <div style={{ border: '2px solid red', padding: '20px' }}>
      <h2>타이머: {seconds}초</h2>
    </div>
  );
}

export default Timer;
