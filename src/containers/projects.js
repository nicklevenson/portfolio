import React from 'react'
import Project from '../components/project'
import planegame from '../assets/planegame.png'
import memix from '../assets/memix.png'
import recipefreak from '../assets/recipefreak.png'
export default class Projects extends React.Component {
  state = {
    projects: [
      {
        name: "Plane Game",
        logline: "An in browser game which simulates the physics of throwing a paper plane at a target and keeps track of scores",
        descriptions: "JavaScript - Ruby on Rails API - PostgreSQL database - Responsive vanilla CSS", 
        url: "https://nicklevenson.github.io/planegame/", 
        github:"https://github.com/nicklevenson/planegame", 
        blog: "https://dev.to/nicklevenson/game-building-with-javascript-4j7a", 
        video:"https://player.vimeo.com/video/513994621", 
        img: planegame
      },
      {
        name: "MeMix", 
        logline: "A social application giving users the ability to curate and share multimedia content via personalized mixes",
        descriptions: "Ruby on Rails - PostgreSQL database - Integrates 4 different apis (Spotify, OMDB, Google Books, the MET) - Custom web scraper (Poetry Foundation) - OAuth, Nokogiri, Bcrypt, Httparty, and ActionText - Bootstrap and CSS.", 
        url: "https://memix.herokuapp.com/", 
        github:"https://github.com/nicklevenson/me-mix-3", 
        blog: "https://dev.to/nicklevenson/building-a-multimedia-content-sharing-website-with-rails-1gce", 
        video:"https://player.vimeo.com/video/513995198", 
        img: memix
      },
      {
        name: "Recipe Freak",
        logline: "A social application allowing users to create and share their recipes, and add ingredients to grocery lists",
        descriptions: "", 
        url: "", 
        github:"", 
        blog: "", 
        video:"https://player.vimeo.com/video/513995538", 
        img: recipefreak
      }
    ]
  }

 
  render() {
    return (

      <div id="projects" className=" w-100 d-table vh-100 bg-real-dark text-white">
        <br/>
        <h1>Projects</h1>
        <div className="">
          <div className="d-inline-block">
            {this.state.projects.map(p => <Project project={p}/>)}
          </div>
        </div>
      </div>
    )
  }
}