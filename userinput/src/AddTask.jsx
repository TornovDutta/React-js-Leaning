import React, { useRef, useState } from 'react';
import "./addtask.css";
function AddTask({tasks,setTasks}) {
  const taskRef = useRef(null);
  const [status, setStatus] = useState(false);

  const handleStatus = (e) => {
    setStatus(e.target.value === "true");
  };

  const reset = () => {
    taskRef.current.value = "";
    setStatus(false);
  };

  const submit = (e) => {
    e.preventDefault();

    const taskData = {
     id :Math.floor(1000 + Math.random() * 9000),
      task: taskRef.current.value,
      status: status,
    };

    setTasks([...tasks,taskData]);
    

    reset();
  };

  return (
    <section className="addtask">
      <form onSubmit={submit}>
        <input
          type="text"
          ref={taskRef}
          placeholder="Enter a task"
        />

        <select value={status} onChange={handleStatus}>
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>

        <button type="button" onClick={reset}>Reset</button>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default AddTask;
