import React, { useState } from 'react'

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
        <div>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>Add</button>
          <button onClick={() => setCount(count - 1)}>Sub</button>
        </div>
      )}

      <hr />
      {!show && (
  <>
    <ul>
      {arr.map(element => (
        <li key={element.id}>{element.name}</li>
      ))}
    </ul>

    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <button onClick={handleAdd}>Add</button>
    <button onClick={handleSub}>Sub</button>
  </>
  )}
  <button onClick={()=>hide(!show)}>change</button>

    </div>
  )
}

export default App
