import React from 'react'
import Project from '../components/project'
import planegame from '../assets/planegame.png'
import memix from '../assets/memix.png'
import recipefreak from '../assets/recipefreak.png'
import mapmate from '../assets/mapmate.png'
import {Carousel} from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';
export default class Projects extends React.Component {
  state = {
    projects: [
      {
        id: 1,
        name: "Map-Mate",
        logline: "A web application where users can create, collaborate, and share customized, geolocational maps",
        descriptions: "React - Redux - Thunk - Semantic UI - Mapbox - Ruby on Rails API - Google and Facebook OAuth - PostgreSQL database", 
        url: "https://map-mate-frontend.herokuapp.com/public-maps", 
        github:"https://github.com/nicklevenson/maps-frontend", 
        blog: "https://dev.to/nicklevenson/utilizing-mapbox-to-build-a-map-making-site-with-react-redux-and-rails-1im1", 
        video:"https://vimeo.com/526993359", 
        img: mapmate
      },
      {
        id: 2,
        name: "Plane Game",
        logline: "An in browser game which simulates the physics of throwing a paper plane at a target",
        descriptions: "JavaScript - Ruby on Rails API - PostgreSQL database - Responsive vanilla CSS", 
        url: "https://nicklevenson.github.io/planegame/", 
        github:"https://github.com/nicklevenson/planegame", 
        blog: "https://dev.to/nicklevenson/game-building-with-javascript-4j7a", 
        video:"https://vimeo.com/513994621", 
        img: planegame
      },
      {
        id: 3,
        name: "MeMix", 
        logline: "A social application giving users the ability to curate and share multimedia content via personalized mixes",
        descriptions: "Ruby on Rails - PostgreSQL database - Integrates 4 content apis - Custom Web Scraper - OAuth, Nokogiri, Bcrypt, Httparty, and ActionText - Bootstrap and CSS.", 
        url: "https://memix.herokuapp.com/", 
        github:"https://github.com/nicklevenson/me-mix-3", 
        blog: "https://dev.to/nicklevenson/building-a-multimedia-content-sharing-website-with-rails-1gce", 
        video:"https://vimeo.com/513995198", 
        img: memix
      },
      {
        id: 4,
        name: "Recipe Freak",
        logline: "A social application allowing users to create and share their recipes, and add ingredients to grocery lists",
        descriptions: "Ruby, Sinatra, and a PostgreSQL database - MVC fundamentals - Bcrypt - Vanilla CSS and JavaScript", 
        url: "http://recipe-freak.herokuapp.com", 
        github:"https://github.com/nicklevenson/recipe_freak", 
        blog: "https://dev.to/nicklevenson/my-first-web-application-25lj", 
        video:"https://vimeo.com/513995538", 
        img: recipefreak
      }
    ]
  }

  handleSlide = () =>{
    console.log("hello")
  }
 
  render() {
    return (
      
        <div id="projects" className="w-100 vh-100 bg-real-dark projects-container d-table" >
          <div className="d-table-cell align-middle">
          <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut" offset={200} >
            
          <h1>Projects</h1>
          
          <i>Click a project for details</i>
          <div className="w-100  d-table mx-auto">
          
            <div className="d-table-cell">

            
              {/* <div className="d-inline-block "> */}
                <Carousel interval={null} className=" bg-grey-blue car">
                  {this.state.projects.map(p => 
                  
                    <Carousel.Item ><Project key={p.url} project={p} selectedItem={this.state.selectedItem}/></Carousel.Item>
                  )}
                </Carousel>
              </div>
            {/* </div> */}
          </div>
          </ScrollAnimation>
          </div>
        </div>
  
    )
  }
}