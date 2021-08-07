import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
 } from 'react-router-dom';
import NavBar from './NavBar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Route path="/">
          {/* some component here */}
        </Route>
        <Route>
          {/* some component here */}
        </Route>

      </Router>
    </div>
  );
}

export default App;
