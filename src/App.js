import React, {useEffect} from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';
import './App.css';



import { eventSelector, getEvents } from './features/event/EventSlice';
import WithAuth from './features/User/WithAuth';
import AdminAuth from './features/User/AdminAuth';
// Static
import Menu from './features/menu/Menu';
import Home from './features/home/Home';
import About from './features/about/About';
import Contact from './features/contact/Contact';
import Music from './features/music/Music';
import Error from './features/error/Error';
import Footer from './features/footer/Footer';

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
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, shopSelector } from './features/shop/ShopSlice';
function App() {  
  
  
  const shopStatus = useSelector(shopSelector).status
  const eventStatus = useSelector(eventSelector).status
  const dispatch = useDispatch()

  useEffect(() => {
    if (shopStatus === 'idle') {
      dispatch(getProducts())
    }
  }, [dispatch, shopStatus])
  
  useEffect(() => {
    
    if (eventStatus === 'idle') {
      dispatch(getEvents())
    }
  }, [dispatch, eventStatus])
  
  
  return (
    <div className="app-container">
      <Router>
        <div className="App">
            <Menu />  
            <Switch>
              <Route exact path="/" component={WithAuth(Home)}/>
              {/* Protected Routes */}
              <Route exact path="/shop/products/new" component={AdminAuth(ProductForm)}/>
              <Route exact path="/shop/products/:id/edit" component={AdminAuth(ProductForm)}/>
              <Route exact path="/events/new" component={AdminAuth(EventForm)}/>
              <Route exact path="/events/:id/edit" component={AdminAuth(EventForm)}/>
  
              {/* Static */}
              <Route exact path="/about" component={WithAuth(About)}/>
              <Route exact path="/contact" component={WithAuth(Contact)}/>
              <Route exact path="/music" component={WithAuth(Music)}/>
  
              {/* Event */}
              <Route exact path="/events" component={WithAuth(EventContainer)}/>
              <Route exact path="/events/:id" component={WithAuth(ShowEvent)}/>
  
              {/* User */}
              <Route exact path="/signup" component={WithAuth(Signup)} />
              <Route exact path="/login" component={WithAuth(Login)} />
              <Route exact path="/dashboard" component={WithAuth(Dashboard)} />
  
              {/* Shop */}
              <Route exact path="/shop" component={WithAuth(ShopContainer)} />
              <Route exact path="/shop/products/:id" component={WithAuth(ShowProduct)} />
              <Route component={Error} />
  
            </Switch>()
          <Footer />
        
        </div>
      </Router>
    </div>
  );

}

export default App;
