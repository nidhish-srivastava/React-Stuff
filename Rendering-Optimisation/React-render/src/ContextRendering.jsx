import React, { createContext, useContext, useState } from 'react'

export const CountContext = createContext()

//* PROBLEM  : any change in parent component triggers re rende in all the child components(which aint event changing,this is very bad)
function ContextRendering() {
    const [counter,setCounter] = useState(0)
  return (
    <div>
       <button onClick={()=>setCounter(e=>e+1)} >Increase</button>
       <CountContext.Provider value={counter}>
        {/* <ChildA/> */}
        <MemoizedChildA/>  {/* It will check if the child a component mein kuch change hua ki nhi,(since no change,it wont re render,so b will also be not re rendered) */}
       </CountContext.Provider>
    </div>
  )
}

export default ContextRendering


function ChildA(){
    console.log("child a renders");
    return(
        <div>
            CHild A renders
            <ChildB/>
        </div>
    )
}

export const MemoizedChildA = React.memo(ChildA) //* rendering behaviour is optimised

function ChildB(){
    console.log("child b renders");
    return(
        <div>
            Child B renders
            <ChildC/>
        </div>
    )
}

function ChildC(){
    const counter = useContext(CountContext)
    console.log("child c renders");
    return(
        <div>
            CHild C renders
           count :  {counter}
        </div>
    )
}