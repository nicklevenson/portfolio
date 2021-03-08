import React from 'react'
import Project from '../components/project'
import planegame from '../assets/planegame.png'
import memix from '../assets/memix.png'
import recipefreak from '../assets/recipefreak.png'
export default class Projects extends React.Component {
  state = {
    projects: [
      {
        name: "Plane Game!",
        logline: "An in browser game which simulates the physics of throwing a paper plane at a target and keeps track of scores",
        description: "Utilizes JavaScript for frontend interactions, fetch requests to the backend, and game engine. Uses a Ruby on Rails API as the backend for game stats with a PostgreSQL database. Responsive vanilla CSS for styling.", 
        url: "https://nicklevenson.github.io/planegame/", 
        github:"https://github.com/nicklevenson/planegame", 
        blog: "https://dev.to/nicklevenson/game-building-with-javascript-4j7a", 
        video:"https://vimeo.com/513994621", 
        img: planegame
      },
      {
        name: "MeMix", 
        logline: "A social application giving users the ability to curate and share multimedia content via personalized mixes",
        description: "Developed with Ruby on Rails to manage a complex MVC and a PostgreSQL database. Integrates 4 different apis (Spotify, OMDB, Google Books, the MET), and a custom web scraper (Poetry Foundation) to pull data for users to curate. Makes use of OAuth, Nokogiri, Bcrypt, Httparty, and ActionText. Uses Bootstrap and CSS for the frontend.", 
        url: "https://memix.herokuapp.com/", 
        github:"https://github.com/nicklevenson/me-mix-3", 
        blog: "https://dev.to/nicklevenson/building-a-multimedia-content-sharing-website-with-rails-1gce", 
        video:"https://vimeo.com/513995198", 
        img: memix
      },
      {
        name: "Recipe Freak",
        logline: "A social application allowing users to create and share their recipes, and add ingredients to grocery lists",
        description: "", 
        url: "", 
        github:"", 
        blog: "", 
        video:"", 
        img: recipefreak
      }
    ]
  }

 
  render() {
    return (

      <div id="projects" className="mx-auto col-12 d-table vh-100">
        <h1>Projects</h1>
        <div className="row w-100">
          <div className="col-12 d-inline-block">
            {this.state.projects.map(p => <Project project={p}/>)}
          </div>
        </div>
      </div>
    )
  }
}