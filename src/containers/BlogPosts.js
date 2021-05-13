import React from 'react'
import BlogPost from '../components/BlogPost.js'
import ScrollAnimation from 'react-animate-on-scroll';
export default class BlogPosts extends React.Component {
  state = {
    fetchedPosts: []
  }
  componentDidMount() {
    fetch(`https://dev.to/api/articles?username=nicklevenson`)
    .then(resp => resp.json())
    .then(json => {
      this.setState({fetchedPosts: json.splice(0, 6)});
    })
  }
  render(){
    return(
      <div id="blog" className=" w-100 d-table vh-100 bg-light-red">
        
        <div className="blog-container mx-auto d-table-cell align-middle pb-5">
          <ScrollAnimation animateIn="animate__bounceInLeft"><h1>Blog Posts</h1></ScrollAnimation>
          {this.state.fetchedPosts.map(b => <BlogPost blog={b}></BlogPost>)}
        </div>
      </div>
    )
  }
}