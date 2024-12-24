import React from 'react'
import Mufasa from "../assets/mufasa.png"
import "./components.css"
function Welcome() {
  return (
    <div className='Welcome-container'>
        <div className='head'>
            <div className='head-li'>
                <h1>#1 in Movies Today</h1>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Play</button>
                
            </div>
            
            <img src={Mufasa} alt="" />
        </div>
        
    </div>
  )
}

export default Welcome