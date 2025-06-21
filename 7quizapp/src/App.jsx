import React, { useState } from 'react';
import './App.css'

function App() {
 const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
    answer: 'Paris'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Mars'
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    options: ['William Wordsworth', 'William Shakespeare', 'John Keats', 'Jane Austen'],
    answer: 'William Shakespeare'
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'],
    answer: 'Pacific'
  },
  {
    question: 'Which language is used to style web pages?',
    options: ['HTML', 'JQuery', 'CSS', 'XML'],
    answer: 'CSS'
  }
];


 const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === quizData[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < quizData.length) {
      setCurrent(next);
    } else {
      setShowScore(true);
    }
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-app">
      <h1>🎯 Quiz App</h1>
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score} / {quizData.length}</h2>
          <button className="btn" onClick={restart}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <h3>{quizData[current].question}</h3>
          <div className="option-group">
            {quizData[current].options.map((option, idx) => (
              <button
                key={idx}
                className="btn option"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App
