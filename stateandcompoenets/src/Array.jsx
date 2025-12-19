import React from 'react'

function Array({arr,setArr,name,setName,handleAdd,handleSub}) {
  return (
    <div className="Array">
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
    </div>
  )
}

export default Array
