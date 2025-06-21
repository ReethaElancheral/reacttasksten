import React, { useState } from 'react';
import './App.css'



function App() {
  const [color, setColor] = useState('#3498db');

  return (
    <div className="color-picker-app">
      <h1>🎨 Color Picker Tool</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>{color}</p>
      </div>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="color-input"
      />
    </div>
  );
}


export default App
