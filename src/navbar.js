import React from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
export default function NavBar(){
  return (
    <div className="navbar navbar-light">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/projects" className="nav-link">Projects</NavLink>
      <NavLink to="/projects" className="nav-link">Contact</NavLink>
    </div>
   )
}