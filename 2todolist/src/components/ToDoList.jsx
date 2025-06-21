import React from 'react';
import TaskItem from './TaskItem';


export default function TodoList({ tasks, setTasks }) {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </div>
  );
}