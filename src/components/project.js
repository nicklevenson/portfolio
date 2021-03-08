import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'

export default class Project extends React.Component {
  project = this.props.project
  
  render() {
    console.log(this.project.img)
    return(
      <div className="d-inline-block p-5">
        <br/>
       
          <Card className="bg-darkish text-white"style={{ width: '25em', maxWidth: "75vw", margin: "auto" }}>
            <Card.Img src={this.project.img}></Card.Img>
           
              
              <h2>{this.project.name}</h2>
              <Card.Text>
                <i>{this.project.logline}</i>
              </Card.Text>

              <Accordion>
                <Accordion.Toggle as={Card.Text} eventKey="1">
                  <h5 className="text-center">Technologies Used ▽</h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    {this.project.descriptions}
                  </Card.Body>
                </Accordion.Collapse>
                <div class="">
                <a>Website</a>
                <a>Video Demo</a>
                <a>Blog Post</a>
                <a>Github</a>
                </div>
              </Accordion>
     
            <div class="iframe-container">
              {/* <iframe className="iframe" src={this.project.video} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}
        
            </div>
      
          </Card>
     
    </div>
    )
  }
}