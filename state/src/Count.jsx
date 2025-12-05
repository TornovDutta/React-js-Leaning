import React, { useState } from 'react'

function Count({count,setCount}) {
  return (
    <div>
      <button onClick={()=>
        setCount(count+1)
      }> add</button>

      {count}
      <button onClick={()=>
        setCount(count-1)
      }> sub</button>
    </div>
  )
}

export default Count
