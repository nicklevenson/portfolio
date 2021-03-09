import React from 'react'
import { Card } from 'react-bootstrap'

export default class BlogPost extends React.Component{
  render() {
    return(
      <div className="blog-post">
        <a href={this.props.blog.url} target="_blank"><h2>{this.props.blog.title}</h2></a>
      </div>
    )
  
  }
}