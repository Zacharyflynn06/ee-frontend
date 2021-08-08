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
import Music from './features/music/Music';
import StoreContainer from './features/store/StoreContainer';
import EventContainer from './features/event/EventContainer';

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
          <Route exact path="/music" component={Music}/>
          <Route exact path="/store" component={StoreContainer}/>
          <Route exact path="/events" component={EventContainer}/>


          

        </Switch>
      </Router>
    </div>
  );
}

export default App;
