import React, { useState } from 'react'
import Parent1 from './Parent1'
import Child1 from './Child1'

function GrandParentOne() {
    const [newCount,setNewCount] = useState(0)
    console.log("grandparentOne render");

    // * Since we knwo that parent and child are passed inside jsx,if we change the state,the setter function triggers a render,it will render parent and child component  everytime
  return (
    <div>
        <h2>GrandParentOne count : {newCount}</h2>
        <button onClick={()=>setNewCount(e=>e+1)}>New Count</button>
        <Parent1 newCount = {newCount}>
            <Child1/>
        </Parent1>
    </div>
  )
}

export default GrandParentOne