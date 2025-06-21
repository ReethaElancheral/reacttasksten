import React, { useState, useEffect } from 'react';
import TodoList from './components/ToDoList';
import TaskForm from './components/TaskForm';
import Filters from './components/Filters';
import ThemeToggle from './components/ThemeToggle';
import { loadTasks, saveTasks } from './utils/storage';
import './App.css'

export default function App() {
  const [tasks, setTasks] = useState(loadTasks());
  const [filter, setFilter] = useState('all');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div className="app-container">
      <h1>To-Do List App</h1>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <TaskForm setTasks={setTasks} />
      <Filters setFilter={setFilter} />
      <TodoList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
}
