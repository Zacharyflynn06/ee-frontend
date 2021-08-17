import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';
import './App.css';

import WithAuth from './features/User/WithAuth';
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
import ShowEvent from './features/event/ShowEvent';
// User

import Signup from './features/User/Signup';
import Login from './features/User/Login';
import Dashboard from './features/User/Dashboard';

// Shop
import ShopContainer from './features/shop/ShopContainer';
import ProductForm from './features/shop/ProductForm';
import ShowProduct from './features/shop/ShowProduct';
import NavBar from './features/navbar/NavBar';
function App() {  


  
  return (
    <div className="app">
      {console.log("re-render")}
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          {/* Protected Routes */}
          <Route exact path="/shop/products/new" component={WithAuth(ProductForm)}/>
          <Route exact path="/shop/products/:id/edit" component={ProductForm}/>
          <Route exact path="/events/new" component={WithAuth(EventForm)}/>

          <Route exact path="/events/:id/edit" component={WithAuth(EventForm)}/>

          {/* Static */}
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/music" component={Music}/>

          {/* Event */}
          <Route exact path="/events" component={EventContainer}/>
          <Route exact path="/events/:id" component={ShowEvent}/>

          {/* User */}
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={WithAuth(Dashboard)} />

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
