import React from 'react'
import Mufasa from "../assets/mufasa.png"
import "./components.css"
function Welcome() {
  return (
    <div className='Welcome-container'>
        <div className='head'>
            <div className='head-li'>
                <h2>#1 in Movies Today</h2>
                <h1 className='h1'>Mufasa</h1>
                <h3>Mufasa, a cub lost and alone, meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey of a group of misfits searching for their destiny.</h3>
                <div className='btn-sec'>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-error">Stream Now!</button>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btnn-fix"><p>All Episode</p></button>
                </div>
            </div>
            
            <img src={Mufasa} alt="" />
        </div>
        
    </div>
  )
}

export default Welcome