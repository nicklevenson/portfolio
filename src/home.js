import React from 'react'
import railsImage from './assets/rails.png'
import jsImage from './assets/js.png'
import reactImage from './assets/react.png'
import reduxImage from './assets/redux.png'
// import meImage from './assets/me.jpeg'
export default class Home extends React.Component {
  render() {
    return (
      <div className=" w-100 d-table vh-100" id="home">
        <div className="py-auto h-100 bg-real-dark d-table-cell text-white align-middle">
          <div className="jumbotron bg-dark m-auto ">
            {/* <div className="col-12 text-center my-auto">
              <img src={meImage} class="prof-img"></img>
            </div> */}
          
            <div className="col-12 text-center ">
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
          <div className="my-5">
            <div className="col-12 text-center">
              <h2>My Stack Includes</h2>
              
              <img src={railsImage} className="tech-stack"></img>
              <img src={jsImage} className="tech-stack"></img>
              <img src={reactImage} className="tech-stack"></img>
              <img src={reduxImage} className="tech-stack"></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}