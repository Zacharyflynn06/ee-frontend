import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
 } from 'react-router-dom';
import NavBar from './features/NavBar/NavBar';
import Home from './features/home/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          {/* some component here */}
        </Route>

      </Router>
    </div>
  );
}

export default App;
