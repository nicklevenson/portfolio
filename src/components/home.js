import React from 'react'
import railsImage from '../assets/rails.png'
import jsImage from '../assets/js.png'
import reactImage from '../assets/react.png'
import reduxImage from '../assets/redux.png'
import bootstrapImage from '../assets/bootstrap.png'
// import meImage from './assets/me.jpeg'
export default class Home extends React.Component {
  render() {
    return (
      <div className="w-100 d-table vh-100 bg-white" id="home">
        <div className="py-auto h-100 d-table-cell align-middle ">
          <div className="box m-auto">
            {/* <div className="col-12 text-center my-auto">
              <img src={meImage} class="prof-img"></img>
            </div> */}
          
            <div className="col-12 text-center bio">
              {/* <img src={meImage} class="prof-img"></img> */}
              <h1>Hello, I'm Nick!</h1>
              <i>I'm a strong full-stack developer open to new opportunities.
                Future employers will benefit from my ability to learn quickly, create applications swiftly and with care, as well as deep dive into bugs to solve the problem at hand. 
                I bring a desire to build projects that have a focus on clarity, usability, and utility. 
              </i>
              <br/><br/>
              <i>I have a passion for recording and writing music, taking up wood working projects, playing games, and philosophizing life. I love coding because it is a perfect balance of creativity and logical problem solving.</i>
              <br/><br/>
              
            </div>
          </div>
          <div className="my-5">
            <div className="col-12 text-center">
              <h3 >My Stack</h3>
              <div className="stack">
                <i className="p-3">Ruby on Rails</i>
                <i className="p-3">JavaScript</i>
                <i className="p-3">React</i>
                <i className="p-3">Redux</i>
                
              </div>
              {/* <img src={railsImage} className="tech-stack"></img>
              <img src={jsImage} className="tech-stack"></img>
              <img src={reactImage} className="tech-stack"></img>
              <img src={reduxImage} className="tech-stack"></img>
              <img src={bootstrapImage} className="tech-stack"></img> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}