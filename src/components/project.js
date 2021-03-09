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
       
          <Card className="" style={{ width: '25em', maxWidth: "75vw", margin: "auto" }}>
              <a href={this.project.url} target="_blank">
                <Card.Img src={this.project.img}></Card.Img>
                <h2>{this.project.name}</h2>
              </a>
              <Card.Text>
                <i>{this.project.logline}</i>
              </Card.Text>

              <Accordion>
                <Accordion.Toggle as={Card.Text} eventKey="1">
                  <h5 className="text-center dropdown" activeClass="pannel-toggle">Technologies Used ▽</h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">

                    <p>{this.project.descriptions}</p>
                  
                </Accordion.Collapse>
              </Accordion>
     
                  <Card.Footer className="mt-auto">
                    <div className="d-inline-block p-2"><a href={this.project.url} target="_blank">Website</a></div>
                    <div className="d-inline-block p-2"><a href={this.project.video} target="_blank">Video Demo</a></div>
                    <div className="d-inline-block p-2"><a href={this.project.blog} target="_blank">Blog Post</a></div>
                    <div className="d-inline-block p-2"><a href={this.project.github} target="_blank">Github</a></div>
                  </Card.Footer>
                
                
              
          
      
          </Card>
     
    </div>
    )
  }
}