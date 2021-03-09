import React from 'react'
import { Link } from "react-scroll";
import github from "./assets/github-dark.png"
import linkedin from "./assets/linkedin.png"
import dev from "./assets/dev.png"
export default function NavBar(){
  
  return (
    <div className="navbar-container sticky-top bg-white">
      <div className="float-start">
        <h1 className="title pt-3">NICK LEVENSON</h1>
        <a><img src={github} className="nav-icon"></img></a>
        <a><img src={linkedin} className="nav-icon"></img></a>
        <a><img src={dev} className="nav-icon"></img></a>
      </div>
      <div className="p-1">
      <Link
        className="nav-item"
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}
      >Home</Link>
       <Link
        className="nav-item"
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}
      >Projects</Link>
      <Link
        className="nav-item"
        activeClass="active"
        to="blog"
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}
      >Blog</Link>
      <a className="nav-item">Resume</a>
      <Link
        className="p-1 nav-item"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}
      >Contact</Link>
      </div>
    </div>
   )
}