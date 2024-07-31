import React, { useState, useEffect } from 'react';
import Task from './Task';
import SearchFilter from './SearchFilter';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const randomAssignees = ['John', 'Jane', 'Mike', 'Lisa'];
    const generateRandomDate = (days) => {
      let date = new Date();
      date.setDate(date.getDate() + Math.floor(Math.random() * days));
      return date.toLocaleDateString();
    };
    const tasksArray = [];
    for (let i = 1; i <= 10; i++) {
      const isPending = i <= 6;
      tasksArray.push({
        description: `Task ${i}`,
        assignee: randomAssignees[Math.floor(Math.random() * randomAssignees.length)],
        deadline: isPending ? generateRandomDate(30) : null,
        status: isPending ? 'Pending' : 'Completed',
      });
    }
    setTasks(tasksArray);
    setFilteredTasks(tasksArray);
  }, []);

  const toggleStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = updatedTasks[index].status === 'Pending' ? 'Completed' : 'Pending';
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <SearchFilter tasks={tasks} setFilteredTasks={setFilteredTasks} />
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Task Description</th>
            <th>Assignee</th>
            <th>Deadline</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <Task key={index} task={task} index={index} toggleStatus={toggleStatus} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;

