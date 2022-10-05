import React, { useState } from 'react'
import './Splash.css'
import video from '../../assets/notepad.mp4'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import git from "./assets/git.png"
import linked from "./assets/linked.png"


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
          <video id="vid" src={video} muted loop autoPlay></video>
            <div className='overlay'></div>
            <div className='text'>
              <h2>Stay organized</h2>
              <h3>and connected</h3>
              <p>Bring your team’s work together in one shared space. Choose the project view that suits your style, and collaborate no matter where you are.</p>
              <Link onClick={openMenu}><a href='#'>Explore</a></Link>
            </div>
            <ul className='social'>
              <div>

              <h1>Jeffrey Z. Li</h1>
              <li><a href='https://github.com/jefzli21'><img src={git}/></a></li>
              <li><a href='https://www.linkedin.com/in/jefzli21/'><img src={linked}/></a></li>
              </div>
              <div>
              <h1>Bo Zhong</h1>
              <li><a href='https://github.com/bob-skywalker'><img src={git}/></a></li>
              <li><a href='https://www.linkedin.com/in/bo-zhong-bb4a4b13a/'><img src={linked}/></a></li>
              </div>
              <div>
              <h1>Taowei Li</h1>
              <li><a href='https://github.com/TaoweiLi'><img src={git}/></a></li>
              <li><a href='https://www.linkedin.com/in/taoweili/'><img src={linked}/></a></li>
              </div>
              <div>
              <h1>Tianshu Xiao</h1>
              <li><a href='https://github.com/Tians97'><img src={git}/></a></li>
              <li><a href='https://www.linkedin.com/in/tianshuxiao/'><img src={linked}/></a></li>
              </div>
            </ul>
        </section>
        <div className='menu'>
          <ul>
            <Link to='/home'  style={{textDecoration:'none'}}><li><a href='#'>Home</a></li></Link>
            <Link to='/signup' style={{textDecoration:'none'}}><li><a href='#'>Sign Up</a></li></Link>
            <Link to='/login' style={{textDecoration:'none'}}><li><a href='#'>Sign In</a></li></Link>
            <li><a href='https://github.com/Tians97/Project-Sticky'>Project Sticky?</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Splash