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
            <a href="https://github.com/nicklevenson" target="_blank"><img src={github} className="nav-icon "></img></a>
            <a href="https://www.linkedin.com/in/nicholas-levenson-b3a927b2/" target="_blank"><img src={linkedin} className="nav-icon "></img></a>
            <a href="https://dev.to/nicklevenson" target="_blank"><img src={dev} className="nav-icon "></img></a>
          </div>
        </div>
        <div className="nav-links">
          <Link
            className="page-links"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-110}
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
            offset={-50}
            duration={500}
          >Blog</Link>
          <a className="page-links" href="https://drive.google.com/file/d/1VtdmiVI1MZ87CUXHHTYwLQtYoZtMh5C0/view?usp=sharing" target="_blank">Resume</a>
          <Link
            className="page-links"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >Contact</Link>
        </div>
    </div>
   )
}