// TaskList.js
import React from 'react';

const tasks = [
  { id: 1, title: 'Buy groceries', completed: true },
  { id: 2, title: 'Finish assignment', completed: false },
  { id: 3, title: 'Walk the dog', completed: true },
];

const TaskList = () => {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong> <br />
            Status: {task.completed ? '✅ Done' : '❌ Pending'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
