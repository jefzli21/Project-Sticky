import React, { useState } from 'react'
import './Splash.css'
import video from '../../assets/notepad.mp4'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';


const styles = {
  toggle1: 'toggle',
  toggle2: 'toggle active',
  showcase1: 'showcase',
  showcase2: 'showcase active',
};




const Splash = () => {
  const[changed,setChange] = useState(false);

  const openMenu = (open) => {
    setChange(c => !c);
  } 
  

  
  return (
    <>
      <div className='splash-container'>
        <section className={`${styles.showcase1} ${changed ? styles.showcase2: ''} `}>
          <header>
            <h2 className='logo'>Project Sticky</h2>
            <div className={``}></div>
          </header>
          <video src={video} muted loop autoPlay></video>
            <div className='overlay'></div>
            <div className='text'>
              <h2>Stay organized</h2>
              <h3>and connected</h3>
              <p>Bring your team’s work together in one shared space. Choose the project view that suits your style, and collaborate no matter where you are.</p>
              <Link onClick={openMenu}><a href='#'>Explore</a></Link>
            </div>
            <ul className='social'>
              <li><a href='#'><img src="https://i.ibb.co/x7P24fL/facebook.png"/></a></li>
              <li><a href='#'><img src="https://i.ibb.co/Wnxq2Nq/twitter.png"/></a></li>
              <li><a href='#'><img src="https://i.ibb.co/ySwtH4B/instagram.png"/></a></li>
            </ul>
        </section>
        <div className='menu'>
          <ul>
            <Link to='/home'  style={{textDecoration:'none'}}><li><a href='#'>Home</a></li></Link>
            <Link to='/signup' style={{textDecoration:'none'}}><li><a href='#'>Sign Up</a></li></Link>
            <Link to='/login' style={{textDecoration:'none'}}><li><a href='#'>Sign In</a></li></Link>
            <Link to='/home' style={{textDecoration:'none'}}><li><a href='#'>Project Sticky?</a></li></Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Splash