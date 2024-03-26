import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Practice from './practice/hook/Form';
import { BrowserRouter } from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './content/Dashboard';
import Home from './practice/Router/Home';
import Route1 from './practice/Router/Route1';
import Route2 from './practice/Router/Route2';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/route-1",
    element: <Route1 />,
  },
  {
    path: "/route-2",
    element: <Route2 />,
  },
]);



root.render(
  // Strict mode will render components 2 times, we can also remove it
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App/>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: repwortWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
