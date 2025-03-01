import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.tsx'
import Resist from './Resist/Resist.tsx'
import Names from './Names/Names.tsx'
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
        path: "occupant/",
        element: <Resist />,
        // loader: teamLoader,
      },
      {
        path: "resist/",
        element: <Resist />,
      },
      {
        path: "names/",
        element: <Names />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
