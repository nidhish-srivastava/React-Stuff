import React, { useState } from 'react'

function AccesingStateDuringRendering() {
    const [trend,setTrend] = useState("")
    const [count,setCount] = useState(0)
    const [prevCount,setPrevCount] = useState(count)
    if(prevCount!=count){
        setPrevCount(count)
        setTrend(
            count > prevCount ? "increasing" : "decreasing"
        )
    }
  return (
    <div>
        {count}
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        {trend}
    </div>
  )
}

export default AccesingStateDuringRendering