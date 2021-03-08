import React from 'react'
import './App.css';
import Projects from './containers/projects.js'
import Home from './home';
import NavBar from './navbar';


class App extends React.Component{
  render() {
    return (
        <div className="container-fluid p-0">
          <NavBar/>
          <div className="row">
            <Home />
            <Projects />
          </div>
        </div>
    );
  }
}

export default App;
