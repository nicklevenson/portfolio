import React from 'react'
import './App.css';
import Projects from './containers/projects.js'
import Home from './home';
import NavBar from './navbar';


class App extends React.Component{
  render() {
    return (
        <div className="mx-auto container h-100">
          <NavBar/>
          <div className="row h-100">
            <Home />
            <Projects />
          </div>
        </div>
    );
  }
}

export default App;
