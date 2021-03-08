import React from 'react'
import { Link } from "react-scroll";
export default function NavBar(){
  return (
    <div className="navbar sticky-top bg-white">
      <h2 className="">Nick Levenson</h2>
      <div className="nav float-end">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Home</Link>
       <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-60}
        duration={500}
      >Projects</Link>
      </div>
    </div>
   )
}