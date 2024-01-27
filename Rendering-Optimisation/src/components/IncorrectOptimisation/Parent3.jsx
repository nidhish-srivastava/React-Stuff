import { useState } from "react";
import { MemoizedChildThree } from "./Child3";

export const Parent3 = () =>{
    const [count,setCount] = useState(0)
    const [object,_] = useState({name : "Nidhish"})
    const [name,setName] = useState("Vishwas")

    console.log("Parent Three render");

    return(
        <div>
            <button onClick={()=>setCount(e=>e+1)}>Count : {count}</button>
            <button onClick={()=>setName("CodeEvolution")}>Change name</button>
            <MemoizedChildThree name = {name}>
                Hello
                {/* {object.name}
                //* Problem -->  Having objects and functions as part of component can nullify the React.memo optimisation with Children props
                //* TO overcome this,we use useMemo
                */}
                {/* Now if we enclose the hello inside html tag,it will re render the child  */}
            </MemoizedChildThree>
        </div>
    )
}