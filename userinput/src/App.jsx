import React, {  useState } from 'react';
import './App.css';


import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx"

function App() {
  const [tasks,setTasks]=useState([]);
  return (
    <div className="App">
      <Header />

      <main className="main-content">
        <AddTask tasks={tasks} setTasks={setTasks}/>
        <TaskList tasks={tasks}/>
      </main>

      <Footer />
    </div>
  );
}

export default App;
