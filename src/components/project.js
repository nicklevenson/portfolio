import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'

export default class Project extends React.Component {
  project = this.props.project
  
  render() {
    console.log(this.project.img)
    return(
      <div className="d-inline-block p-2 card-container">
        <br/>
       
          <Card className="" style={{ width: '100%', maxWidth: "75vw", margin: "auto" }}>
              {/* <a href={this.project.url} target="_blank"> */}
                
              {/* </a> */}
          

              <Accordion>
                <Accordion.Toggle as={Card.Text} eventKey="1">
                  <div className="dropdown">
                    <Card.Img src={this.project.img}></Card.Img>
                    <h4 className="text-center m-0 p-2" activeClass="pannel-toggle">{this.project.name}▽</h4>
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <div className="m-3">
                      <Card.Text>
                        <p><i>{this.project.logline}</i></p>
                      </Card.Text>
                      <hr/>
                      <p>{this.project.descriptions}</p>
                    </div>
                </Accordion.Collapse>
              </Accordion>
     
                  <Card.Footer className="mt-auto">
                    <div className="d-inline-block p-1"><a href={this.project.url} target="_blank">Website</a></div>
                    <div className="d-inline-block p-1"><a href={this.project.video} target="_blank">Video Demo</a></div>
                    <div className="d-inline-block p-1"><a href={this.project.blog} target="_blank">Blog Post</a></div>
                    <div className="d-inline-block p-1"><a href={this.project.github} target="_blank">Github</a></div>
                  </Card.Footer>
                
                
              
          
      
          </Card>
     
    </div>
    )
  }
}