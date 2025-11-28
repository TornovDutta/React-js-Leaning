import React from 'react'
import { useState } from 'react'
import Arrays from './Arrays';
import { useActionState } from 'react';
import Count from './Count';
function App() {
  const [show,setShow]=useState(true);
  
  const [count, setCount]=useState(0);
  return (
    <div>
      {!show && <Count/>}
      <br></br>
      {show && <Arrays/>}
      <button onClick={()=>
        setShow(!show)
      }> change</button>
    </div>
  )
}

export default App
