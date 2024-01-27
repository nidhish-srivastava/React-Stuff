import React from 'react'
import { useState } from 'react'

function Throttle() {
    const [count,setCount] = useState(0)
    const [apiCalled,setApiCalled]=  useState(false)
    const throttle = (fn,time)=>{
        if(apiCalled) return
        setApiCalled(true)
        setTimeout(()=>{
            fn()
            setApiCalled(false)
        },time)
    }

    const sendEmail = () =>{
        throttle(()=>{
            setCount(e=>e+1)
            console.log("sending email");
        },1000)
    }
  return (
    <div>
        <button onClick={sendEmail}>Send Email
        </button>
        Email sent {count} times
    </div>
  )
}

export default Throttle