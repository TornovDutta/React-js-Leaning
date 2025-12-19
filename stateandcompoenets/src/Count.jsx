import React from 'react'

function Count({count,setCount}) {
  return (
    <div className="Count">
        
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>Add</button>
          <button onClick={() => setCount(count - 1)}>Sub</button>
        
    </div>
  )
}

export default Count
