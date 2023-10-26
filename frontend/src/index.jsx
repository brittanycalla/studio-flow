import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Root from './routes/Root';
import Dashboard from './routes/Dashboard'
import Layout from './components/Layout';
import ErrorPage from './routes/Error-Page';
import Landing from './routes/Landing';
import SignUp from './routes/Sign-Up';
import Login from './routes/Login';
import Shoots from './routes/Shoots';
import Items from './routes/Items';
import reportWebVitals from './reportWebVitals';
import Logout from './routes/Logout';
import ShootDetails from './routes/ShootDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "logout",
        element: <Logout />
      },
      {
        path: "signup",
        element: <SignUp />
      },
      {
        path: "app",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Dashboard />
          },
          {
            path: "shoots",
            element: <Shoots />
          },
          {
            path: "shoots/:id",
            element: <ShootDetails />
          },
          {
            path: "items",
            element: <Items />
          }
        ],
      },
    ],
  },
  {
    
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
