import React from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
export default function NavBar(){
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </div>
   )
}