import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { Home } from './screens/Home'
import { About } from './screens/About'
import { ContactPage } from './screens/Contact'
import { School } from './screens/School'
// subjects
import { Math } from "./screens/School/Math";
import { Languages } from "./screens/School/Languages";
import { Science } from "./screens/School/Science";
import { History } from "./screens/School/History";

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
    },
    {
      path: '/about/contact',
      element: <ContactPage />
    },
    {
      path: '/school',
      element: <School />,
    },
    {
      path: '/school/math',
      element: <Math />,
    },
    {
      path: '/school/science',
      element: <Science />,
    },
    {
      path: '/school/history',
      element: <History />,
    },
    {
      path: '/school/languages',
      element: <Languages />,
    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
   </React.StrictMode>,
)
