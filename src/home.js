import React from 'react'
import railsImage from './assets/rails.png'
import jsImage from './assets/js.png'
import reactImage from './assets/react.png'
import reduxImage from './assets/redux.png'
export default class Home extends React.Component {
  render() {
    return (
      <div className="d-table">
        <div className="container py-auto col-12 vh-100 bg-real-dark text-white d-table-cell align-middle" id="home">
          <div className="row m-5 my-auto">
            <div className="col-12 text-center">
              <h1>Full Stack Web Developer</h1>
              <i>Strong full-stack developer specializing in Rails, JavaScript, and React. With experience in the film industry and a deep passion for music and philosophy, I bring creative problem solving skills, a strong work ethic, fresh ideas, and a desire to build projects that have a meaningful impact on society. Future employers will benefit from my ability to learn quickly, create things swiftly and with care, as well as deep dive into bugs to solve the problem at hand. </i>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 text-center">
              <h2>My Stack</h2>
              <br/>
              <span className="m-5"><img src={railsImage} height="100"></img></span>
              <span className="m-5"><img src={jsImage} height="100"></img></span>
              <span className="m-5"><img src={reactImage} height="100"></img></span>
              <span className="m-5"><img src={reduxImage} height="100"></img></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}