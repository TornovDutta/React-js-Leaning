import React from 'react';
import "./tasklist.css";
function TaskList({ tasks }) {
  return (
    <section className="tasklist">
      {tasks.length === 0 ? (
        <p className="empty">No tasks added yet.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="task-card">
              <div className="task-info">
                <h4>{task.task}</h4>
                <span
                  className={`status ${task.status ? "done" : "pending"}`}
                >
                  {task.status ? "Completed" : "Pending"}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default TaskList;
