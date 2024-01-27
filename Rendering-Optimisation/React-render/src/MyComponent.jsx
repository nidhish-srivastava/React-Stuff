import React,{useCallback, useEffect, useMemo} from 'react'
import largeFile from './db.json'

function MyComponent({count}) {
    //* OPTIMIATION 2
//* If we click on count,then it re renders MyComponent(since count is passed as props,this is not good for performace)
//* we will use useMemo

//* This is nothing but for loop from i=0 to n,time complexity : O(n),goes to each element,add its length
function getLength(largeFile){
    console.log("I am calculating");
    let count = 0
    for(let i = 0;i<largeFile.length;i++){
        count++
    }
    return count
}

    const total = useMemo(()=>getLength(largeFile),[])

    //* THIRD OPTIMISATION(MOST IMPORTANT)
//* Due to change in prop(count),component will render,which triggers this event listener,which is not good
    window.addEventListener('load',()=>{  //* if we go to sources,check global listeners,we can see the event being triggered
        console.log("loaded");
    })
    
    //* solution 1
    useEffect(()=>{  //* but still the event will be registered 2 times(not more than that though),which is still not good enough
        window.addEventListener('load',()=>{
            console.log("loaded");
        })
    },[])
    
    //* solution 2
    const handleWindowOnLoad = useCallback(()=>{ //* pass this inside the function which was being executed inside useEffect
        console.log("loaded");
    })

    useEffect(()=>{  
        window.addEventListener("load",handleWindowOnLoad)
        // when the component unmounts,cleanup function
        return()=>removeEventListener("load",handleWindowOnLoad)
    },[handleWindowOnLoad])
    //*NOW THE GLOBAL LISTENER WILL REGISTER ITSELF ONLY ONE TIME(not two)

  return (
    <div>
       {total} is the length
       <br />
       count : {count}
    </div>
  )
}

export default MyComponent