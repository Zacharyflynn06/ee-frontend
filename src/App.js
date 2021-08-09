import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';
// import NavBar from './features/navbar/NavBar';
import Home from './features/home/Home';
import About from './features/about/About';
import Contact from './features/contact/Contact';
import Music from './features/music/Music';
import ShopContainer from './features/shop/ShopContainer';
import EventContainer from './features/event/eventsContainer';
import Signup from './features/Users/signup';
import Login from './features/Users/Login';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/music" component={Music}/>
          <Route exact path="/shop" component={ShopContainer}/>
          <Route exact path="/events" component={EventContainer}/>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
