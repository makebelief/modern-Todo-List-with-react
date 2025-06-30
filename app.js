import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setTask('');
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={task}
        placeholder="Enter a task..."
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: '10px', width: '70%' }}
      />
      <button onClick={handleAdd} style={{ padding: '10px' }}>Add</button>

      <ul style={{ textAlign: 'left', padding: '0' }}>
        {tasks.map((t) => (
          <li key={t.id} style={{ listStyle: 'none', margin: '10px 0', display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleComplete(t.id)}
              style={{ marginRight: '10px' }}
            />
            <span style={{
              textDecoration: t.completed ? 'line-through' : 'none',
              flexGrow: 1
            }}>
              {t.text}
            </span>
            <button onClick={() => handleDelete(t.id)} style={{ marginLeft: '10px' }}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
