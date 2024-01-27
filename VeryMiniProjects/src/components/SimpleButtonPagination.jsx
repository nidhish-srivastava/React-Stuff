import React, { useEffect, useState } from 'react'
import axios from 'axios'

function SimpleButtonPagination() {
    const [data,setData] = useState([])
    const [currentPageNumber,setCurrentPageNumber] = useState(1)
    const [postPerPage,setPostPerPage] = useState(10)

    const getData = async() =>{
        const response = await axios.get('http://jsonplaceholder.typicode.com/posts')
        console.log(response.data)
        setData(response.data)
    }

    useEffect(()=>{
        getData()
    },[])

    
    //* Current Post Array,this logic is for which data to be present on that page
    const indexOfLastPost = currentPageNumber*postPerPage  //* Ex- We are on page 2,20 posts are there,so indexOfLast element will 2*20
    const indexOfFirstPost = indexOfLastPost-postPerPage
    const currentPagePostsArray = data.slice(indexOfFirstPost,indexOfLastPost)  // So that we are  maintained and referring to that 

    const paginate=(e) =>{  // Whatever we clicked,that will be the input,so we move to that page only
       setCurrentPageNumber(e)
    }
  return (
    <React.Fragment>
        {/* {data.map((currEle)=>{ */}
        {currentPagePostsArray.map((currEle)=>{  // Not using index of map method,coz if we navigate to new page,it again starts from 1
            let {id,title,body} = currEle
            return(
            <div key={id}>
                <h3>{id} .  {body}</h3>  
            </div>)
        })}
        <Pagination postPerPage={postPerPage} totalPosts={data.length} paginate={paginate}/>
    </React.Fragment>
  )
}

export default SimpleButtonPagination


//* PAGINATION COMPONENT
const Pagination = ({postPerPage,totalPosts,paginate}) =>{
    let NumberOfPagesArray = []
    //* Famous logic,simply calculating,how many pages will be formed
    for(let i = 1; i<=Math.ceil(totalPosts/postPerPage);i++){
        NumberOfPagesArray.push(i)
    }

   return(
    <React.Fragment>
        {NumberOfPagesArray.map((e,i)=>{
            {/*We making function for onClick,not using some variable coz we need to talk to parent from child,telling our page number,
               so that in paren,we will update the pageNumber to whatever the input we are giving from child,which is,where we click*/}
            return(
                <button onClick={()=>paginate(e)} key={i}>{e}</button> 
            )
        })}
    </React.Fragment>
   )
}