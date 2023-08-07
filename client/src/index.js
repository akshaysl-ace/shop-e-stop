import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './assets/styles/index.css';
import './assets/styles/bootstrap.custom.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([(
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomeScreen />
      },
      {
        path: '/products/:id',
        element: <ProductScreen />
      }
    ]
  }
)]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
