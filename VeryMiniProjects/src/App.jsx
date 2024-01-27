import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import React from "react"
import InfiniteScrolling from "./components/InfiniteScrolling"
import Modal from "./components/Modal"
import PasswordGen from "./components/PasswordGen"
import RandomColorGenerator from "./components/RandomColorGenerator"
import SimpleButtonPagination from "./components/SimpleButtonPagination"
import MainContainer from "./components/MainContainer"
import Slider from "./components/Slider"
import { Carousel } from "./components/Carousel"
import Carousel2 from "./components/Carousel2"
import RadioButton from "./components/RadioButton"
import CheckBox from './components/CheckBox'
import DropDown from "./components/DropDown"
import Throttle from "./components/Throttle"
import s from '../src/assets/1.jpg'
import t from '../src/assets/2.jpg'
import u from '../src/assets/3.jpg'

function App() {

  const images = [s,t,u]
 return (    
    <Router>
      <Link to={`/`} className="logo">List of Mini Projects</Link>
      <Routes>
        <Route path="/" element={<MainContainer/>} />
        <Route path="/throttle" element = {<Throttle/>} />
        <Route path="/slider" element={<Slider images={images} />} />
        <Route path="/modal" element={<Modal/>}/>
        <Route path="/infinite-scrolling" element={<InfiniteScrolling/>}/>
        <Route path="/button-pagination" element={<SimpleButtonPagination/>}/>
        <Route path="/password-gen" element={<PasswordGen/>}/>
        <Route path="/random-color-gen" element={<RandomColorGenerator/>}/>
        <Route path="/carousel" element={<Carousel/>}/>
        <Route path="/carousel2" element={<Carousel2/>}/>
        <Route path="/radio-btn" element = {<RadioButton/>}  />
        <Route path="/dropdown" element = {<DropDown/>}  />
        <Route path="/checkbox" element = {<CheckBox/>} />
      </Routes>
      
    </Router>
 )
} 
export default App