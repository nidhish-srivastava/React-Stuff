import React from 'react'
import { Link } from 'react-router-dom'

const MainContainer = () => {
  return (
    <main className='main-container'>
         <div id="cards">
        <Link to='/infinite-scrolling'>
        <div class="card">Infinte Scrolling</div>
        </Link>
        <Link to='/button-pagination'>
        <div class="card">Simple Button Pagination</div>
        </Link>
        <Link to='/modal'>
        <div class="card">Modal</div>
        </Link>
        <Link to='/random-color-gen'>
        <div class="card">Random Color Generator</div>
        </Link>
        <Link to='/password-gen'>
        <div class="card">Password Generator</div>
        </Link>
        <Link to='/slider' >
        <div class="card">
          Slider
        </div>
        </Link>
        <Link to='/carousel2' >
        <div class="card">
          Carousel
        </div>
        </Link>
        <Link to='/carousel' >
        <div class="card">
          Carousel Part2
        </div>
        </Link>
        <Link to={`/checkbox`}>
        <div className="card">
          CheckBox
        </div>
        </Link>
        <Link to={`/dropdown`}>
        <div className="card">
          DropDown
          </div></Link>
          <Link to={`/radio-btn`}>
          <div className="card">
            Radio Button
          </div>
          </Link>
          <Link to={`/throttle`} >
            <div className="card">
          Throttle
            </div>
          </Link>
       
    </div>
    </main>
  )
}

export default MainContainer