import React, { useCallback, useEffect, useRef, useState } from 'react'


function Timer(){
  const [count,setCount] = useState(0)
  const [toolTipShown,setToolTipShown] = useState(false)

  // CAn be used when we fetch,if we dont know if the service gets back to us before our componennt unmounts

  //* By using this trapping,we can ensure that we set the state only when the component is Mounted

  //* But this is not the best case to solve this,we use clear Interval in this case
  // useEffect(()=>{
  //   let isMounted = true
  //   setInterval(()=>{
  //     if(isMounted){
  //       setCount((prev)=>{
  //         console.log(`Current count ${prev}`);
  //         return prev+1
  //       })
  //     }
  //   },1000)
  //   return()=>{
  //     isMounted = false
  //   }
  // },[])

  useEffect(()=>{
    let inteval = setInterval(()=>setCount((prev)=>prev+1),1000)
    return ()=> clearInterval(inteval)
  },[])

  const toolTipPopperRef = useRef()
  const onMouseOver = useCallback(()=>setToolTipShown(true),[])
  const onMouseOut = useCallback(()=>setToolTipShown(false),[])

  useEffect(()=>{
    console.log("Add event listener");
    toolTipPopperRef.current?.addEventListener('mouseover',onMouseOver)
    toolTipPopperRef.current?.addEventListener('mouseout',onMouseOut)
    const ref = toolTipPopperRef.current
    ref?.removeEventListener("mouseover",onMouseOver)
    ref?.removeEventListener("mouseout",onMouseOut)
  },[onMouseOut,onMouseOver])
  return(
    <div>
      Timer : {count}
      <div ref={toolTipPopperRef}>ToolTip Popper</div>
      {toolTipShown && <div>{count}</div>}
      </div>
  )
}


function App() 
{
  const [index,setIndex] = useState(0)
  const [enteredInputValue,setEnteredInputValue] = useState("")
  const inpurRef = useRef()
  const updateIndex = useCallback(()=>{
    () => setIndex(e=>e+1)
  },[index])
  const changeHandler = () =>{
    let value = inpurRef.current.value
    setEnteredInputValue(value)
  }

  useEffect(()=>{
    console.log("asdas");
  },[])
  return(
    <div>
      {enteredInputValue}
      <input type="text" ref={inpurRef} name='input' onChange={changeHandler} />
      <button onClick={updateIndex}>{index}</button>
      <Timer/>
    </div>
  )
}

export default App
