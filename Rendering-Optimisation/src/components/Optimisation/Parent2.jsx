import { useState } from "react"
import Child2, { MemoizedChildTwo } from "./Child2";

function Parent2() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState("Vishwas")
    console.log("Parent2 render");
  return (
    <div>
        <button onClick={()=>setCount(e=>e+1)}>Count : {count}</button>
        <button onClick={()=>setName("CodeEvolution")}>Change name</button>
        {/* <Child2 name = {name}/> */}
        <MemoizedChildTwo name={name} />
    </div>
  )
}

export default Parent2