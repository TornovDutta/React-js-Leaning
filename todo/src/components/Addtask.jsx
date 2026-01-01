import React from 'react';

export default function Addtask({ taskList, setTaskList, task, setTask }) {

  const handleChange = (e) => {
    setTask({ ...task, name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.name.trim()) return;

    const date = new Date();
    const newTask = {
      id: task.id ? task.id : Date.now(),
      name: task.name,
      date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    };


    if (task.id) {
      setTaskList(
        taskList.map((t) =>
          t.id === task.id ? newTask : t
        )
      );
    }

    else {
      setTaskList([...taskList, newTask]);
    }

    setTask({ id: "", name: "", date: "" });
  };

  return (
    <div className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a task"
          value={task.name}
          onChange={handleChange}
        />

        <button type="submit">
          {task.id ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}
