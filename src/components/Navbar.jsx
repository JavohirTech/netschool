import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import '../styles_umar.css'
import Logo from '../assets/logo.png'

const Navbar = ()=>{

    const [show, setShow] = useState(true)

    const navItems = [
        {name: 'Home', url: '/'},
        {name: 'About', url: '/about'},
        {name: 'Courses', url: '/courses'},
        {name: 'Pages', url: '/pages'}, 
        {name: 'Blog', url: '/blog'},
        {name: 'Contact', url: '/contact'},
    ]
    return(
        <>
            <nav className="navbar">
                <img src={Logo} alt="There are location of logo" width="200px" />

                <ul className="navbar_ul" style={{display: show ? "block" : "none"}}>
                {navItems.map((navItem)=>{
                    return(
                        <li><Link to={navItem.url}>{navItem.name}</Link></li>
                    )
                })}
                </ul>

                
                <div className="navbar_right_icons">
                    <i className="fas fa-search"></i>
                    <i className="fas fa-user"></i>
                    <i className="fas fa-bars" onClick={()=>setShow((s)=>!s)}></i>
                </div>
            </nav>
        </>
    )
}

export default Navbar