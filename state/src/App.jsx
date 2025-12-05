import React from 'react'
import { useState } from 'react'
import Arrays from './Arrays';
import { useActionState } from 'react';
import Count from './Count';
function App() {
  const [show,setShow]=useState(true);
  const[count,setCount]=useState(0);
  const arr=["apple"," banana"," orange"];
      const [stateArr,setStateArr]=useState(arr);
  return (
    <div>
      {!show && <Count count={count} setCount={setCount}/>}
      {show && <Arrays stateArr={stateArr} setStateArr={setStateArr}/>}
      <button onClick={()=>
        setShow(!show)
      }> change</button>
    </div>
  )
}

export default App
