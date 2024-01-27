import React, { useState,Suspense, Children } from 'react'
import './App.css'
import { useContext } from 'react'
import ContextRendering from './ContextRendering'
import { CountContext } from './ContextRenderPart2'
import ContextRendering2 from './ContextRenderPart2'
// import MyComponent from './MyComponent'
// * OPTMIZATION 1
  //* THis component is a heavy component since it has big json file,so we will lazy load it
  const MyComponent = React.lazy(()=>import("./MyComponent"))  //* To do lazy loading,we need to use Suspense component
  //* We put the component which will be heavy inside Suspense,so that it doesnt hinder the other componnets,it will lazy load itself
  //* Use case-> When we have a pageg which has so many widgets,it will lazy load,other small components will be shown

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          INcrease
        </button>
        <Suspense fallback = {<p>This is loading</p>} >  {/*INside fallback,we give any react component */}
          <MyComponent count = {count} />
        </Suspense>

        <ContextRendering/>
        
        {/* Using Same element rendering technique */}

        <ContextRendering2>
          <ChildA/>
        </ContextRendering2>
      </div>
    </>
  )
}

export default App


function ChildA(){
  console.log("child a renders");
  return(
      <div>
          CHild A renders
          <ChildB/>
      </div>
  )
}



function ChildB(){
  console.log("child b renders");
  return(
      <div>
          Child B renders
          <ChildC/>
      </div>
  )
}

function ChildC(){
  const counter = useContext(CountContext)
  console.log("child c renders");
  return(
      <div>
          CHild C renders
         count :  {counter}
      </div>
  )
}
