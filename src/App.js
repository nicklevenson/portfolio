import React from 'react'
import './App.css';
import Projects from './containers/projects.js'
import Home from './home';
import NavBar from './navbar';
import Contact from './components/contact.js'


class App extends React.Component{
  render() {
    return (
        <div className="p-0">
          <NavBar/>
          <div className="">
            <Home />
            <Projects />
            <Contact />
          </div>
        </div>
    );
  }
}

export default App;
