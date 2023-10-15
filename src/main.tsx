import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Home from './screens/Home/'
import About from './screens/About/index.tsx'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
   </React.StrictMode>,
)
