import React, { useState } from 'react';
import './App.css';

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
    setTasks(tasks.map((t) => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h2>🌟 My To-Do List</h2>
        <div className="input-group">
          <input
            type="text"
            value={task}
            placeholder="What do you need to do?"
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleAdd}>Add</button>
        </div>

        <ul className="task-list">
          {tasks.map((t) => (
            <li key={t.id} className={t.completed ? 'completed' : ''}>
              <label>
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleComplete(t.id)}
                />
                <span>{t.text}</span>
              </label>
              <button className="delete-btn" onClick={() => handleDelete(t.id)}>🗑️</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
