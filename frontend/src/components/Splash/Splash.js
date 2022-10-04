import React, { useState } from 'react'
import './Splash.css'
import video from '../../assets/videoBg.mp4'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useRef, useEffect } from 'react';







const Splash = () => {
  const [isActive, setActive] = useState('false');
  const handleToggle = () => {
    setActive(!isActive)
  }

  
  return (
    <>
      <div className='splash-container'>
        <section className='showcase active'>
          <header>
            <h2 className='logo'>Project Sticky</h2>
            <div className='toggle active'></div>
          </header>
          <video src={video} muted loop autoPlay></video>
            <div className='overlay'></div>
            <div className='text'>
              <h2>Never Stop To</h2>
              <h3>Exploring The World</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <a href='#'>Explore</a>
            </div>
            <ul className='social'>
              <li><a href='#'><img src="https://i.ibb.co/x7P24fL/facebook.png"/></a></li>
              <li><a href='#'><img src="https://i.ibb.co/Wnxq2Nq/twitter.png"/></a></li>
              <li><a href='#'><img src="https://i.ibb.co/ySwtH4B/instagram.png"/></a></li>
            </ul>
        </section>
        <div className='menu'>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Sign Up</a></li>
            <li><a href='#'>Sign In</a></li>
            <li><a href='#'>Project Sticky?</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Splash