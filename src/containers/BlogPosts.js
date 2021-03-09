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
      <div id="blog" className="w-100 d-table bg-light-red">
        <div className="blog-container mx-auto mt-5">
          <h1>Blog Posts</h1>
          {this.state.fetchedPosts.map(b => <BlogPost blog={b}></BlogPost>)}
        </div>
      </div>
    )
  }
}