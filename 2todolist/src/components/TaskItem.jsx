

export default function TaskItem({ task, setTasks }) {
  const toggleComplete = () => {
    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = () => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <div>
        <strong>{task.title}</strong> <br />
        <span>{task.dueDate}</span> | <span className={`priority-${task.priority}`}>{task.priority}</span>
      </div>
      <div>
        <button onClick={toggleComplete}>{task.completed ? 'Undo' : 'Done'}</button>
        <button onClick={deleteTask}>Delete</button>
      </div>
    </div>
  );
}
