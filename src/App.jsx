import { useCounter } from './useCounter';
import { setValueInLocalStorage, getValueFromLocalStorage } from './utils';
import './App.css';

function App() {
  const { counter, updateCount, resetCount, setCount } = useCounter(0);

  function saveProgress() {
    setValueInLocalStorage('progress', counter);
  }

  function RetrieveProgress() {
    const currentVal = getValueFromLocalStorage('progress', 0);
    setCount(currentVal);
  }

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
        <a href="/#" className="main-end-button" onClick={saveProgress}>
          Save Progress
        </a>
        <a href="/#" className="main-end-button" onClick={RetrieveProgress}>
          Retrieve Previous Progress
        </a>
      </section>
    </main>
  );
}

export default App;
