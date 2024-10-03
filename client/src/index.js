import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './assets/styles/index.css';
import './assets/styles/bootstrap.custom.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import store from './data/store';
import { Provider } from 'react-redux';
import CartScreen from './screens/CartScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index path='/' element={<HomeScreen />} />
      <Route path='/products/:id' element={<ProductScreen />} />
      <Route path='/cart' element={<CartScreen />} />
    </Route>
  )
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

reportWebVitals();
