import { useState } from "react";
import AccesingStateDuringRendering from "./AccesingStateDuringRendering";

const initialiser = () =>{
  return(
    {id : 0,name : "Nidhish"},
    {id : 1,name : "Nidhish2"},
    {id : 2,name : "Nidhish3"}
  )
}

function App() {
  // const [initial,setInitial] = useState(initialiser()) //* This was initialiser function is called on every render(so if it expensive,then bad performance)
  const [initial,setInitial] = useState(initialiser) //* It is called once only then after its return value is used
  
  const [counter,setCounter] = useState(0)
const increment = () =>{
  // setCounter(prev=>prev+1)
  console.log(counter); // we dont get the udpated value since setState is async,in next render we will get the value
  //* If we want to access the value,store it in a variable
  let value = counter+1
  setCounter(value)
}

  //* We shud clear our timeout in react when we are in useEffect(since it is a side process)
  //* If we are triggering a timeout on some event like onCLick,then no need to clear it

  return (
    <div>
      <button onClick={()=>console.log("click1")}>Inline</button>
      {counter}
      <button onClick={increment}>Increment</button>
      <h3>Animate on count</h3>
      {/* It wont translate since the it aint mounted on dom on evry render,but if we give key prop,it tells react that it is new so mount it every time,this was we can animate it every time it is mounted in dom */}
      <button key={counter}>{counter}</button>
      
      <AccesingStateDuringRendering/>
      </div>
  )
}

export default App