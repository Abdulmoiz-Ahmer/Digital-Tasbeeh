import { useState } from 'react';
import play from './utils';

export const useCounter = function (count) {
  const [counter, setCounter] = useState(count);

  function setCount(count) {
    play('/start.mp3');

    setCounter(count);
  }

  function updateCount() {
    play('/start.mp3');
    setCounter(counter + 1);
  }

  function resetCount() {
    play('/stop.mp3');
    setCounter(0);
  }

  return {
    counter,
    updateCount,
    resetCount,
    setCount,
  };
};
