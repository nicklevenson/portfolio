import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Projects from './containers/projects.js'
import Switch from 'react-bootstrap/esm/Switch';
import Home from './home';


class App extends React.Component{
  render() {
    return (
      <div className="app mx-auto">
        <Switch>
          <Route exact path="/portfolio" component={Home}/>
          <Route exact path="/portfolio/projects" component={Projects}/>
        </Switch> 
      </div>
    );
  }
}

export default App;
