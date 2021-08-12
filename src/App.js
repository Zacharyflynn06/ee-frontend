import React, {useEffect} from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
import { selectEvents } from './features/event/EventSlice';
import { getEvents } from './features/event/EventSlice';
// User

import Signup from './features/User/Signup';
import Login from './features/User/Login';
import Dashboard from './features/User/Dashboard';

// Shop
import ShopContainer from './features/shop/ShopContainer';
import { getProducts } from "./features/shop/ShopSlice"
import ShowProduct from './features/shop/ShowProduct';
import { selectProducts } from './features/shop/ShopSlice';
import { useSelector } from 'react-redux';
import AddProduct from './features/shop/AddProduct';

function App() {  
  
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  const events = useSelector(selectEvents)

  useEffect(() => {
    
    dispatch(getProducts())
  }, [dispatch])

  
  useEffect(() => {
    
    dispatch(getEvents())
  }, [dispatch])


  return (
    <div className="app">
      {console.log("re-render")}
      <Router>

        <Switch>
          <Route exact path="/" component={Home}/>
          {/* Protected Routes */}
          <Route exact path="/shop/products/new" component={AddProduct}/>

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
