import React, { useState } from 'react';
import './App.css'

function App() {
 
const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(0);

  return (
    <div className="counter-app">
      <h1>🔢 Counter App</h1>
      <div className="counter-display">{count}</div>

      <div className="controls">
        <button className="btn" onClick={increment}>+ Increment</button>
        <button className="btn" onClick={decrement}>- Decrement</button>
        <button className="btn" onClick={reset}>⟳ Reset</button>
      </div>

      <div className="step-control">
        <label>Step:</label>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          min="1"
        />
      </div>
    </div>
  );
}

export default App
