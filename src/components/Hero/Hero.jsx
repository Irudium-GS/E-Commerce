import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>SPICES ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>A dash of spice, <br/> a spoonful of tradition,<br /> and a taste that lingers forever!</p>
                    
                </div>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="arrow icon" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="hero image" />
        </div>
    </div>
  )
}
