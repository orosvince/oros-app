import React from 'react';

const Task = ({ task, index, toggleStatus }) => (
  <tr>
    <td>{index + 1}</td>
    <td>{task.description}</td>
    <td>{task.assignee}</td>
    <td>{task.deadline}</td>
    <td>
      {task.status}
      <button onClick={() => toggleStatus(index)}>Toggle Status</button>
    </td>
  </tr>
);

export default Task;
