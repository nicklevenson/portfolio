import React from 'react'
import railsImage from './assets/rails.png'
import jsImage from './assets/js.png'
import reactImage from './assets/react.png'
import reduxImage from './assets/redux.png'
import meImage from './assets/me.jpeg'
export default class Home extends React.Component {
  render() {
    return (
      <div className=" w-100 d-table vh-100" id="home">
        <div className="container py-auto col-12  vh-100 bg-real-dark text-white d-table-cell align-middle">
          <div className="row m-5 my-auto jumbotron bg-darkish">
            <div className="col-12 text-centert my-auto">
              {/* <img src={meImage} class="prof-img"></img> */}
            </div>
          
            <div className="col-12 text-center">
              {/* <img src={meImage} class="prof-img"></img> */}
              <h1>Hello, I'm Nick!</h1>
              <i>I'm a strong full-stack developer specializing in Rails, 
                JavaScript, and React. 
                With experience in the film 
                industry and a deep passion for music and philosophy, 
                I bring creative problem solving skills, a strong work ethic, 
                fresh ideas, and a desire to build projects that have a meaningful 
                impact on society. Future employers will benefit from my ability to 
                learn quickly, create things swiftly and with care, as well as deep dive 
                into bugs to solve the problem at hand. </i>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 text-center">
              <h2>My Stack Includes</h2>
              
              <div className="m-5 d-inline-block"><img src={railsImage} width="100"></img></div>
              <div className="m-5 d-inline-block"><img src={jsImage} width="100"></img></div>
              <div className="m-5 d-inline-block"><img src={reactImage} width="100"></img></div>
              <div className="m-5 d-inline-block"><img src={reduxImage} width="100"></img></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}