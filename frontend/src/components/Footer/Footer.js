import "./Footer.css";
import git from "./git.png";
import linked from "./linked.png"
import React from "react";


function Footer(){



    return(
        <>
        
        <div className="footer">
            <h1>About Us</h1>
        <ul className="about-us">
              <div>
              <h1>Jeffrey Z. Li</h1>
              <div className="logos">
              <li><a href='https://github.com/jefzli21'><img src={git}/></a></li>
              <li><a href='https://www.linkedin.com/in/jefzli21/'><img src={linked}/></a></li>
              </div>
              </div>
              <div>
                
              <h1>Bo Zhong</h1>
              <div className="logos">
              <li><a href='https://github.com/bob-skywalker'><img src={git}/></a></li>
              <li><a href='https://www.linkedin.com/in/bo-zhong-bb4a4b13a/'><img src={linked}/></a></li>
              </div>
              </div>
              <div>
                
              <h1>Taowei Li</h1>
              <div className="logos">
              <li><a href='https://github.com/TaoweiLi'><img src={git}/></a></li>
              <li><a href='https://www.linkedin.com/in/taoweili/'><img src={linked}/></a></li>
              </div>
              </div>
              <div >
              <h1>Tianshu Xiao</h1>
              <div className="logos">
              <li><a href='https://github.com/Tians97'><img src={git}/></a></li>
              <li><a href='https://www.linkedin.com/in/tianshuxiao/'><img src={linked}/></a></li>
              </div>
              </div>
            </ul>
            <p>@Project-Sticky</p>

        </div>
        
        </>
    )

}



export default Footer;