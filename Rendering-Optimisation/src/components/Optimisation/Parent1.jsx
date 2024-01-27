import React, { useState } from 'react'
import Child1, { MemoizedChildOne } from './Child1'

//* Problem we face-> 
/*
  PArent 1 and child1 are in the render phase,but Parent 1 is passed to the commit phase since Child 1 has no updates for DOM
  SO child1 is having unecessary render(it shud not even render itself,every time we increase the count)
*/


function Parent1({children,newCount}) {
    const [counter,setCounter]=  useState(0)
    console.log("Parent render");
  return (
    <div>
        Parent1
        <h2>Props ka count from dad : {newCount}</h2>
        <button onClick={()=>setCounter(e=>e+1)}>Count-{counter}</button>
        {/* <Child1/> */}
        {/* <MemoizedChildOne/> We wont use this method,rather than we use children prop */}
        {children}
    </div>
  )
}

export default Parent1