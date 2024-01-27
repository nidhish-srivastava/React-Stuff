import React,{useState} from 'react'

function RandomColorGenerator() {
    const [color,setColor] = useState("#fff")
    const getRgb = () => Math.floor(Math.random()*256)

    const rgbToHex = (r,g,b) => "#" + [r,g,b].map(x=>
      {
        const hex = x.toString(16)
        return hex.length===1 ? '0'+hex : hex // 4 digit answers bhi aanege if we dont use this condition
        // hex numbers are of length 1(15 -> F) till 0-15 decimal numbers,
      }
        ).join("")   // This means that no spaces,one after another

    
    const handleGenerate = () =>{
        // const color = {
        //     r:getRgb(),
        //     g:getRgb(),
        //     b:getRgb()
        // }
        setColor(rgbToHex(getRgb(),getRgb(),getRgb()))
    }
  return (
    <>
    <div style={{backgroundColor:color}}  className="random">
    Color hex : {color}
        <button onClick={handleGenerate}>Next</button>
    </div>
    </>
  )
}

export default RandomColorGenerator