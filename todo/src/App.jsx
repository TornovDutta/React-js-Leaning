import React, { useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Addtask from './components/Addtask';
import Showtask from './components/Showtask';

function App() {
  const [taskList,setTaskList]=useState(JSON.parse(localStorage.getItem("tasklist"))||[]);
  const [task,setTask]=useState({});
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App">
      <Header/>
      <Addtask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
      <Showtask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
    </div>
  );
}

export default App;
