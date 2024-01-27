import React, { createContext, useContext, useState } from 'react'

export const CountContext = createContext()

function ContextRendering2({children}) {
    const [counter,setCounter] = useState(0)
  return (
    <div>
       <button onClick={()=>setCounter(e=>e+1)} >Increase</button>
       <CountContext.Provider value={counter}>
        {children}
       </CountContext.Provider>
    </div>
  )
}

export default ContextRendering2


