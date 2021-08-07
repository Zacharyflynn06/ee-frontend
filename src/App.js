import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';
import NavBar from './features/navbar/NavBar';
import Home from './features/home/Home';
import About from './features/about/About';
import Contact from './features/contact/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>

        <NavBar/>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>

          

        </Switch>
      </Router>
    </div>
  );
}

export default App;
