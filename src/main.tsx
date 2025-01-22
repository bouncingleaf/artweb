import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.tsx'
import Occupant from './Occupant/Occupant.tsx'
import Home from './Home/Home.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "occupant",
        element: <Occupant />,
        // loader: teamLoader,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
