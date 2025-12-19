import React, { useState } from 'react'
import './App.css';
import Count from "./Count";
import Array  from './Array';
function App() {
  const [count,setCount]=useState(0);
  const [arr,setArr]=useState([
    {"id":1,"name":"Tornov"},
    {"id":2,"name":"Ben"}
  ])
  const [name,setName]=useState("");
  const [show,hide]=useState(true)

  function handleAdd(){
    setArr([
    ...arr,
    {
      id: arr.length + 1,
      name: name
    }
  ]);
  setName('');
  }
  function handleSub(){
    if(arr.length==0)return;
    setArr(arr.slice(0,arr.length-1));
  }
  return (
    <div className="App">
      {show && (
        <Count count={count} setCount={setCount}/>
      )}

      <hr />
      {!show && <Array arr={arr} setArr={setArr} name={name} setName={setName} handleAdd={handleAdd} handleSub={handleSub}/>}
  <button onClick={()=>hide(!show)}>change</button>

    </div>
  )
}

export default App
