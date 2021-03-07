import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Projects from './containers/projects.js'
import Switch from 'react-bootstrap/esm/Switch';
import Home from './home';
import NavBar from './navbar';


class App extends React.Component{
  render() {
    return (
        <div className="mx-auto container h-100">
          <NavBar/>
          <div className="row h-100">
            <Switch className="pl-0">
              <Route exact path="/portfolio" component={Home}/>
              <Route exact path="/portfolio/projects" component={Projects}/>
            </Switch> 
          </div>
        </div>
    );
  }
}

export default App;
