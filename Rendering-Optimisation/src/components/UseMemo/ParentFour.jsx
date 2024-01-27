import React, { useCallback, useMemo, useState } from 'react'
import Child4, { MemoizedChildFour } from './Child4';

function ParentFour() {
    const [count,setCount] = useState(0)
    const person = {
        fname : "Bruce",
        lname : "Wayne"
    }
    const memoizedPerson=  useMemo(()=>person,[])

    const handleClick = () =>{
    }

    const memoizedHandleClick = useCallback(handleClick,[])
    console.log("Parent 4");
  return (
    <div>
        <button onClick={()=>setCount(e=>e+1)}>Count : {count} </button>
        <MemoizedChildFour memoizedPerson = {memoizedPerson} memoizedHandleClick={memoizedHandleClick} />
    </div>
  )
}

export default ParentFour