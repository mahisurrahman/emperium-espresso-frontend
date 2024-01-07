import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Layout from './layout/mainLayout/Layout';
import AddCoffee from './pages/addCoffee/AddCoffee';
import UpdateCoffee from './pages/updateCoffee/UpdateCoffee';
import ViewCoffee from './pages/viewCoffee/ViewCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('http://localhost:5000/coffees'),
      },
      {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "updateCoffee",
        element: <UpdateCoffee></UpdateCoffee>,
      },
      {
        path: "viewCoffee",
        element: <ViewCoffee></ViewCoffee>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)