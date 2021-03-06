import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import Projects from './containers/projects'
import NavBar from './components/navbar';
class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar/>
          <Route exact path="/projects" component={Projects}/>
        </Router>
      </div>
    );
  }
}

export default App;
