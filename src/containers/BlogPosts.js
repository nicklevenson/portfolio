import React from 'react'
import BlogPost from '../components/BlogPost.js'

export default class BlogPosts extends React.Component {
  state = {
    fetchedPosts: []
  }
  componentDidMount() {
    fetch(`https://dev.to/api/articles?username=nicklevenson`)
    .then(resp => resp.json())
    .then(json => {
      this.setState({fetchedPosts: json});
    })
  }
  render(){
    return(
      <div id="blog" className="w-100 d-table bg-real-dark text-white">
        <div className="blog-container jumbotron bg-dark mx-auto">
          <h1>Blog Posts</h1>
          {this.state.fetchedPosts.map(b => <BlogPost blog={b}></BlogPost>)}
        </div>
      </div>
    )
  }
}