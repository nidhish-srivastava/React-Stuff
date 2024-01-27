// QUESTION 2 : USING THIS ARRAY OF OBJECTS,create dropdown of country,when we click on country,it display anpther dropdown,of its cities

import React, { useState } from 'react'

const DropDown = () => {
    const [country,setCountry]  = useState(null)  //  This will be set to 0,1 or 2 act option selected,this will be used as index further
    const countries = [
        {
          name : "India" , value : "IN" , cities : ["delhi","mumbai"]
        },
        {
          name : "Pakistan" , value : "PAK",cities : ["Islamabad","Lahore"]
        },
        {
          name : "USA" , value : "US" , cities : ["NYC" , "California"]
        }
      ]
      console.log(country);
  return (
    <div>
        <select value={country} onChange={(e)=>setCountry(e.target.value)}> 
            <option>Choose country</option>
            {countries.map((e,i)=>{  // the value of option tag determines the value of select tag,its default value is its content,here we are setting the value to index,so that we use that index further
                return(
                    <option value={i} > 
                        {e.name}
                    </option>
                )
            })}
        </select>
        <select>
            {countries[country]?.cities.map((e,i)=>{
                return(
                    <option value="">{e}</option>
                )
            })}
        </select>
    </div>
  )
}

export default DropDown