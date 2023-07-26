import { useState } from "react";

export const useCounter = function (count) {
  const [counter, setCounter] = useState(count);

  function updateCount() {
    setCounter(counter + 1);
  }

  function resetCount() {
    setCounter(0);
  }

  return {
    counter,
    updateCount,
    resetCount,
  };
};
