import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }: {expiryTimestamp: Date}) {
  const {
    seconds,
    minutes,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  const padTime = String(minutes * 60 + seconds).padStart(2,'0');
  const timeOver = (minutes===0 && seconds===0);
  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
        <span>{timeOver ? 'finished!' : padTime}</span>
      </div>
    </div>
  );
}

function GameTimer() {
  const time = new Date();
  const timeLimit = 90;
  time.setSeconds(time.getSeconds() + timeLimit);
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

export default GameTimer;