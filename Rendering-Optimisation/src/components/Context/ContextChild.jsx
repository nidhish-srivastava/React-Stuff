import React, { memo, useContext } from 'react'
import { CountContext } from './ContextParent';

function ChildA() {
    console.log("Child A render");
  return (
    <div>
        ChildA
        <ChildB/>
    </div>
  )
}

export default ChildA

export const MemoizedChildA = memo(ChildA)

export const ChildB = () =>{
    console.log("Child B render");
    return(
        <div>
            Child B
            <ChildC/>
        </div>
    )
}

export const ChildC = () =>{
    const {count}  = useContext(CountContext)
    console.log("Child C render");
    return(
        <div>
            Child C
            {count}
        </div>
    )
}