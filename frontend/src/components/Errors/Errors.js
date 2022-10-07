import React from 'react'
import NavBar from '../NavBar/NavBar'
import "./Errors.css"
import Logo from "../../assets/sticky_logo.png"

export default function Errors() {
    return (
            <div className='error-container'>
                <h1>Error 404</h1>
                <p>Page not Found</p>
                <img src={Logo}></img>
                <a href='/'>
                    Click Here to Return Home
                </a>
            </div>
            
    )
}
