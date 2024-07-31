import React, { useState } from 'react';

const SearchFilter = ({ tasks, setFilteredTasks }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = tasks.filter(task => 
      task.description.toLowerCase().includes(query) ||
      task.assignee.toLowerCase().includes(query) ||
      task.status.toLowerCase().includes(query)
    );
    setFilteredTasks(filtered);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search tasks..." 
        value={searchQuery} 
        onChange={handleSearch} 
      />
    </div>
  );
};

export default SearchFilter;

