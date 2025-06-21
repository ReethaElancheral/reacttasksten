import React, { useState, useEffect } from 'react';

import './App.css'

function App() {
  const [notes, setNotes] = useState(() => {
    const stored = localStorage.getItem('notes');
    return stored ? JSON.parse(stored) : [];
  });

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    const newNote = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleString(),
    };
    setNotes([newNote, ...notes]);
    setTitle('');
    setContent('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };


  return (
    <div className="notes-app">
      <h1>📝 Notes App</h1>

      <form onSubmit={addNote} className="note-form">
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your note..."
          rows="4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit" className="btn">Add Note</button>
      </form>

      <div className="note-list">
        {notes.map((note) => (
          <div key={note.id} className="note-card">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <div className="note-footer">
              <span>{note.date}</span>
              <button className="btn small" onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
