import React from 'react'

export default class Projects extends React.Component {
  state = {
    projects: [
      {
        name: "Plane Game!", 
        description: "", 
        url: "", 
        github:"", 
        blog: "", 
        video:"", 
        img: ""
      },
      {
        name: "MeMix", 
        description: "", 
        url: "", 
        github:"", 
        blog: "", 
        video:"", 
        img: ""
      },
      {
        name: "Recipe Freak", 
        description: "", 
        url: "", 
        github:"", 
        blog: "", 
        video:"", 
        img: ""
      }
    ]
  }
  render() {
    return (

      <div id="projects" className="mx-auto col-12 d-table vh-100">
        <h1>Projects</h1>
        
      </div>
    )
  }
}