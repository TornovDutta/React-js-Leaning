import React from 'react'
import { useState } from 'react'
function Arrays() {
    const arr=["apple"," banana"," orange"];
    const [stateArr,setStateArr]=useState(arr);
    const [input,setInput]=useState("");
    function handleAdd(){
        if(input.trim=="")return; 
        setStateArr([...stateArr,input]);
        setInput("");
    }
    function handleSub(){
        setStateArr(stateArr.slice(0,-1));
    }
  return (
    <>
    <input value={input} type="text" onChange={(e)=>{
        setInput(e.target.value)
    }}></input>
    <button onClick={handleAdd}>Add</button>
    {stateArr}
    <button onClick={handleSub}> sub</button>
    </>
  )
}

export default Arrays
