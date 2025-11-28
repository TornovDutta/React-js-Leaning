import React from 'react'
import { useState } from 'react'
function App() {
  const arr=["apple ","banana ","orange"]
  const [count, setCount]=useState(arr);
  return (
    <div>
      <button onClick={()=>
        setCount([...count," lichi"])
      }>add</button>
      {count}
      <button onClick={()=>
        setCount(count.slice(0,-1))
      }>sub</button>
    </div>
  )
}

export default App
