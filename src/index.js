import React from 'react';
import ReactDOM from 'react-dom';
import store from './app/store';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { Toaster } from 'react-hot-toast'
import { getProducts } from './features/shop/ShopSlice';
import { getEvents } from './features/event/EventSlice';


store.dispatch(getProducts())
store.dispatch(getEvents())



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster />
      <App />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
