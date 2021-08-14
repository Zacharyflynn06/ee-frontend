import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';
import './App.css';
// import NavBar from './features/navbar/NavBar';

// Static
import Home from './features/home/Home';
import About from './features/about/About';
import Contact from './features/contact/Contact';
import Music from './features/music/Music';
import ErrorPage from './features/error/Error';

// Event
import EventContainer from './features/event/EventsContainer';
import EventForm from './features/event/EventForm';
// User

import Signup from './features/User/Signup';
import Login from './features/User/Login';
import Dashboard from './features/User/Dashboard';

// Shop
import ShopContainer from './features/shop/ShopContainer';
import ProductForm from './features/shop/ProductForm';
import ShowProduct from './features/shop/ShowProduct';

function App() {  


  
  return (
    <div className="app">
      {console.log("re-render")}
      <Router>

        <Switch>
          <Route exact path="/" component={Home}/>
          {/* Protected Routes */}
          <Route exact path="/shop/products/new" component={ProductForm}/>
          <Route exact path="/shop/products/:id/edit" component={ProductForm}/>
          <Route exact path="/events/new" component={EventForm}/>
          <Route exact path="/events/:id/edit" component={EventForm}/>

          {/* Static */}
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/music" component={Music}/>

          {/* Event */}
          <Route exact path="/events" component={EventContainer}/>

          {/* User */}
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />

          {/* Shop */}
          {/* <Route exact path="/shop/products/:id" render={(routeProps) => {
            return <ShowProduct {...routeProps}/>
          }} /> */}
          <Route exact path="/shop" component={ShopContainer} />
          <Route exact path="/shop/products/:id" component={ShowProduct} />
          <Route component={ErrorPage} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
