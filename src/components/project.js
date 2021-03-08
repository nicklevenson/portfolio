import React from 'react'
import {Card, Button} from 'react-bootstrap'
export default class Project extends React.Component {
  project = this.props.project
  
  render() {
    console.log(this.project.img)
    return(
      <div className="d-inline-block m-3">
        <Card style={{ width: '25em' }}>
        <div class="iframe-container">
          {/* <iframe src="https://player.vimeo.com/video/513994621" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}
          <img class="project-image"src={this.project.img}></img>
        </div>
        <Card.Body>
          <Card.Title>{this.project.name}</Card.Title>
          <Card.Text>
            {this.project.logline}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
    )
  }
}