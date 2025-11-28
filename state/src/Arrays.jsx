import React from 'react'
import { useState } from 'react'
function Arrays() {
    const arr=["apple"," banana"," orange"];
    const [stateArr,setStateArr]=useState(arr);
    const [input,setInput]=useState("");
    function add(){
        if(input.trim=="")return; 
        setStateArr([...stateArr,input]);
        setInput("");
    }
    function sub(){
        setStateArr(stateArr.slice(0,-1));
    }
  return (
    <>
    <input value={input} type="text" onChange={(e)=>{
        setInput(e.target.value)
    }}></input>
    <button onClick={add}>Add</button>
    {stateArr}
    <button onClick={sub}> sub</button>
    </>
  )
}

export default Arrays
