import React from 'react';

export default function Showtask({ taskList, setTaskList, task, setTask }) {

  const handleClean = () => {
    setTaskList([]);
  };
  const handleUpdate=(selectedTask)=>{
    setTask(selectedTask);
  }

  const handleDelete = (id) => {
    setTaskList(taskList.filter((t) => t.id !== id));
  };

  return (
    <div className="showtask">
      <div className="head">
        <span>Todo</span>
        <span>{taskList.length}</span>
        <button onClick={handleClean}>Clear All</button>
      </div>

      <div className="list">
        <ul>
          {taskList.map((task) => (
            <div className="contains" key={task.id}>
              <li>{task.name}</li>
              <li>{task.date}</li>

              <span className="edit"  onClick={() => handleUpdate(task)}>Edit</span>
              <span
                className="delete"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
