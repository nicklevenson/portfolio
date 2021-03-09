import React from 'react'
import { Link } from "react-scroll";
import github from "./assets/github-dark.png"
import linkedin from "./assets/linkedin.png"
import dev from "./assets/dev.png"
export default function NavBar(){
  
  return (
      <div className="navigation bg-white w-100 px-5" >
        <div className="header">
          <div className="title d-inline-block">NICK LEVENSON </div>
          <div className="social-links d-inline-block">
            <a><img src={github} className="nav-icon "></img></a>
            <a><img src={linkedin} className="nav-icon "></img></a>
            <a><img src={dev} className="nav-icon "></img></a>
          </div>
        </div>
        <div className="nav-links">
          <Link
            className="page-links"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >Home</Link>
          <Link
            className="page-links"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-110}
            duration={500}
          
          >Projects</Link>
          <Link
            className="page-links"
            activeClass="active"
            to="blog"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >Blog</Link>
          <a className="page-links">Resume</a>
          <Link
            className="page-links"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >Contact</Link>
        </div>
    </div>
   )
}