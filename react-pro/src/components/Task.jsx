// src/components/Task.jsx
import React from 'react';

const Task = ({ task, index, toggleStatus }) => (
  <li>
    {index + 1}. {task.description} | {task.assignee} | {task.status === 'Pending' ? task.deadline : ''} | {task.status} 
    <button onClick={() => toggleStatus(index)}>Toggle Status</button>
  </li>
);

export default Task;
