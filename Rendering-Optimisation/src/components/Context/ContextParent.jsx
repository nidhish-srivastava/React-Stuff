import React, { createContext } from 'react'
import { useState } from 'react'
import ChildA, { MemoizedChildA } from './ContextChild';

export const CountContext = createContext()

function ContextParent() {
    const [count,setCount] = useState(0)
    const CountProvider = CountContext.Provider
    console.log("Context Render");
  return (
    <div>
        <button onClick={()=>setCount(e=>e+1)}>Count : {count}</button>
        <CountProvider value={{count}}>
        {/* <ChildA/> */}
        <MemoizedChildA/>
        </CountProvider>
    </div>
  )
}

export default ContextParent