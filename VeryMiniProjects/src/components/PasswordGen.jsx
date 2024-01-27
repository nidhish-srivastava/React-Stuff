import React,{useState} from 'react'

function PasswordGen() {
  const [show,setShow] = useState(false)
  const [password,setPassword] = useState("")
  
// We can generate OTP in the same way
  const length = 16
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()"
  const generatePassword = () =>{
    setShow(true)
    let pass = ""
    for(let i = 0;i<length;i++){  // i is not being used in our logic,we just want the logic to repeat
      let random = Math.floor(Math.random()*chars.length)
      // pass += chars.substring(random,random+1)  // By this way we get the letter which is pointed by random only,only one letter we get,
      pass += chars[random]
    }
    return setPassword(pass)
  }
  const handler = () =>{
    navigator.clipboard.writeText(password)
    alert('Password copied')

  }
  return (
    <div>

    
     
    
    <div className='flex items-center justify-center h-2/3'>
    {!show &&  <button onClick={generatePassword}>Create Password</button>}
   {show && (
    <div>   
  <div>Your Password : <b>{password}</b></div>
  <button onClick={handler}>Copy it</button>
   </div>
   )}
    </div>
    </div>
  )
}
export default PasswordGen