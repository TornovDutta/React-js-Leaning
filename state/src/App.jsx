import React from 'react'
import { useState } from 'react'
import Arrays from './Arrays';
function App() {
  
  const [count, setCount]=useState(0);
  return (
    <div>
      <button onClick={()=>{
        setCount(count+1)
      }}>add</button>
      {count}
      <button onClick={()=>{
        setCount(count-1)
      }}>sub</button>
      <Arrays/>
    </div>
  )
}

export default App
