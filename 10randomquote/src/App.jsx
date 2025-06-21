
import './App.css'

import React, { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.quotable.io/random');
      const data = await res.json();
      setQuote({ text: data.content, author: data.author });
    } catch (err) {
      setQuote({ text: 'Failed to fetch quote.', author: 'Error' });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-app">
      <h1>💬 Random Quote Generator</h1>
      <div className="quote-box">
        {loading ? (
          <p className="quote">Loading...</p>
        ) : (
          <>
            <p className="quote">“{quote.text}”</p>
            <p className="author">— {quote.author}</p>
            <button className="btn" onClick={fetchQuote}>New Quote</button>
          </>
        )}
      </div>
    </div>
  );
}


export default App
