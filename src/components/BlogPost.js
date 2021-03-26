import React from 'react'
import { Card } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';
export default class BlogPost extends React.Component{
  render() {
    return(
      <ScrollAnimation animateIn="animate__bounceInLeft" offset={200} >
      <div className="blog-post">
        <a href={this.props.blog.url} target="_blank"><h2>{this.props.blog.title}</h2></a>
      </div>
      </ScrollAnimation>
    )
  
  }
}