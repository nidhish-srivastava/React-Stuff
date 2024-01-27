import React, { useState } from 'react'


function ReRenderingUniqueCase() {
  return (
    <div>
        <Parent/>
    </div>
  )
}

export default ReRenderingUniqueCase


function Parent(){
    console.log("Parent component");
    const [counter,setCounter] = useState(0)
    return(
        <>
        <button onClick={()=>setCounter(e=>e+1)}>Count {counter}</button>
        <button onClick={()=>setCounter(0)}>Count 0</button>
        <button onClick={()=>setCounter(5)}>Count 5</button>
            <Child/>
        </>
    )
}

function Child(){
    console.log("child component");
    return(
        <h2>I am child</h2>
    )
}