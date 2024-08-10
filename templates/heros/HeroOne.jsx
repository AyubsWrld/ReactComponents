import React from 'react' ; 
import './Hero.css'

export default function Hero(){
  return(
  <>
      <div className="hero-container">

        <h3 className="hero-three">
          Gone are the days of storage problems 
        </h3>

        <div className='row-two'>
          <h1 className="hero-header">
            Graphite
          </h1>
  
          <div className="button-container">
  
            <button id = "explore">
              Explore
            </button>
  
            <button id="order">
              Order Now
            </button>
          </div>
        </div>
      </div>
  </>
  )
} ; 
