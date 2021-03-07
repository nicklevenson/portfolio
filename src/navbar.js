import React from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
export default function NavBar(){
  return (
    <div className="container-lg navbar">
      <h1 className="navbar-brand">Nick Levenson</h1>
      <div className="nav float-end">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/projects" className="nav-link">Projects</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </div>
    </div>
   )
}