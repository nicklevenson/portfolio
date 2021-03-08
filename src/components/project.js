import React from 'react'
import {Card, Button} from 'react-bootstrap'
export default class Project extends React.Component {
  project = this.props.project
  
  render() {
    console.log(this.project.img)
    return(
      <Card style={{ width: '18rem' }}>
      <Card.Img src={this.project.img}/>
      <Card.Body>
        <Card.Title>{this.project.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )
  }
}