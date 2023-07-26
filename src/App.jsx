// import { useState } from "react";
import { useCounter } from "./useCounter";
import "./App.css";

function App() {
  const { counter, updateCount, resetCount } = useCounter(0);
  return (
    <main className="main">
      <section className="main-top">
        <h3 className="main-top-counter">{counter}</h3>
        <a
          className="main-top-count-button"
          href="#"
          rel="noopener noreferrer"
          onClick={updateCount}
        >
          +
        </a>
      </section>
      <section className="main-end">
        <a href="/#" className="main-end-button" onClick={resetCount}>
          Reset
        </a>
        <a href="/#" className="main-end-button">
          Save Zikr
        </a>
        <a href="/#" className="main-end-button">
          Saved Zikr
        </a>
      </section>
    </main>
  );
}

export default App;
