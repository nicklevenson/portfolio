import React from 'react'
import './App.css';
import Projects from './containers/projects.js'
import Home from './components/home.js';
import NavBar from './navbar';
import Contact from './components/contact.js'
import BlogPosts from './containers/BlogPosts.js'

class App extends React.Component{
  render() {
    return (
        <div className="p-0">
          <NavBar/>
          <div className="">
            <Home />
            <Projects />
            <BlogPosts />
            <Contact />
        
          </div>
        </div>
    );
  }
}

export default App;
