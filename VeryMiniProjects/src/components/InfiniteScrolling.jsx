import React,{useState,useEffect} from 'react'

function InfiniteScrolling() {
    const [data,setData] = useState([])
    const [page,setPage] = useState(1)
    const [state,setState] = useState(true)
    const [state2,setState2] = useState(false)

    const getData = async () =>{
        setState(true)
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`)
            const data = await response.json()
            // console.log(data)
            //  *  setData(data)  // In this we will get the new data on scroll,we wont be able to scrol up to the old one
            setData((prev)=>[...prev,...data])
            setState(false)   // Data load hogya,dont load
        }
        catch(err){
            setState(false)  // Error aagya so stop load
            console.log(err)
        }
    }

    const infinteScollHandler = async () =>{
        /*
        *console.log("scoll height:",document.documentElement.scrollHeight)  // Height of the entire document in pixels
        *console.log("inner height:",window.innerHeight)  // inner height of the window
        *console.log("scroll top:",document.documentElement.scrollTop)   // Number of pixels that the documnet is scrolled vertically
        */

        // Scroll top + Inner Height = Scroll Height(This means our scrollbar has touched the bottom)

          try {   // This means that we have touched bottom,load another page
            if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
                setState2(true)  // Jb tk nya page nhi aaya,uske pehle loader dikha do
              setPage((prev)=>prev+1)
            }
            
          } catch (error) {
            setState2(false)
            console.log(error)
          }
    }
    


    useEffect(()=>{
         getData()
    },[page])   // Jb page number change ho toh usse reflect kr dena

    // Now we will play with scroll stuff, to trigger infinte scrolling
    useEffect(()=>{
        window.addEventListener("scroll",infinteScollHandler)
        // Adding a cleanup function
        return()=>window.removeEventListener("scroll",infinteScollHandler)
    },[])
  return (
    <React.Fragment>
        {state && <div className='spinner'></div>}   {/*This is for top of the page */}
    <main>
        {/* <h1 className='text-4xl grid place-items-center my-5'>List of Cards</h1> */}
        <h1>List of Cards</h1>
        <div>
            {data.map((currEle,index)=>{
                const {body,title,id} = currEle
               return(
                <div>
                <h1><span>{id}</span>.{title}</h1>
                <p>{body}</p>
                </div>
               )
            })}
        </div>
        {/* This is for loading for next page */}
        {/* MAKING TWO STATES FOR LOADING,COZ ek use krenge toh 2 loader dikhenge when we open the page */}
        {state2 && <div className='spinner'></div>}    
    </main>
    </React.Fragment>
  )
}

export default InfiniteScrolling
