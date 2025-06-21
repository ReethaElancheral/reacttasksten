import React, { useState } from 'react';


export default function TaskForm({ setTasks }) {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium');

const handleSubmit = (e) => {
  e.preventDefault();
  const today = new Date().toISOString().split('T')[0];
  if (!title || !dueDate || dueDate < today) {
    return alert("Enter valid data and don't choose past dates.");
  }

  const newTask = {
    id: Date.now(),
    title,
    dueDate,
    priority,
    completed: false,
  };

  setTasks((prev) => [newTask, ...prev]);
  setTitle('');
  setDueDate('');
  setPriority('medium');
};

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}
