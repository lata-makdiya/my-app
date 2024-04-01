import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Practice from './practice/hook/Form';
import Home from './practice/Router/Home';
import Route1 from './practice/Router/Route1';
import Route2 from './practice/Router/Route2';
import Dashboard from './practice/Router/Dashboard';
import User from './practice/Router/User';
import { BrowserRouter, HashRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Practice from './practice/Practice';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="users" element={<User />} />
    </Route>
  )
);

root.render(
  // Strict mode will render components 2 times, we can also remove it
  <React.StrictMode>

    {/* <BrowserRouter> */}
    {/* <HashRouter> */}
    {/* <App /> */}
    {/* </HashRouter> */}
    {/* </BrowserRouter> */}

    {/* <RouterProvider router={router} /> */}

    <Practice />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: repwortWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
