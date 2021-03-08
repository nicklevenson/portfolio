import React from 'react'
import {Card, Button} from 'react-bootstrap'
export default class Project extends React.Component {
  project = this.props.project
  
  render() {
    console.log(this.project.img)
    return(
      <div className="">
        <br/>
        <Card className="bg-darkish text-white"style={{ width: '60em', margin: "auto" }}>

        <Card.Body>
          <h2>{this.project.name}</h2>
          <Card.Text>
            <i>{this.project.logline}</i>
          </Card.Text>
          <Card.Text>
            <ul>{this.project.descriptions}</ul>
          </Card.Text>
        </Card.Body>
        <div class="iframe-container m-5">
          <iframe className="iframe" src={this.project.video} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          {/* <img class="project-image"src={this.project.img}></img> */}
        </div>
      </Card>
    </div>
    )
  }
}