import React from 'react'
import { Link } from "react-scroll";
import github from "./assets/github-dark.png"
import linkedin from "./assets/linkedin.png"
import dev from "./assets/dev.png"
export default function NavBar(){
  
  return (
    <div className="navbar w-100 navbar-expand-lg sticky-top bg-white">
      
        <div className="navbar-brand nav">NICK LEVENSON</div>
          <a ><img src={github} className="nav-icon nav-item"></img></a>
          <a > <img src={linkedin} className="nav-icon nav-item"></img></a>
          <a > <img src={dev} className="nav-icon nav-item"></img></a>
    
     
      <Link
        className="nav-item"
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >Home</Link>
       <Link
        className="nav-item"
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >Projects</Link>
      <Link
        className="nav-item"
        activeClass="active"
        to="blog"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >Blog</Link>
      <a className="nav-item">Resume</a>
      <Link
        className="p-1 nav-item"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >Contact</Link>

    </div>
   )
}