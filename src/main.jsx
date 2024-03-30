import React from 'react'
import ReactDOM from 'react-dom/client'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'
import Layout from './Layout';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:"/home",
        element: <Home/>
      },
      {
        path:"/search",
        element: <Search/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
