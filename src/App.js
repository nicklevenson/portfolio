import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Projects from './containers/projects'
import NavBar from './navbar';
class App extends React.Component{
  render() {
    return (
      <div className="App">
          <NavBar/>
          <Route exact path="/projects" component={Projects}/>
      </div>
    );
  }
}

export default App;
