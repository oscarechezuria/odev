import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './route/About'
import Projects from './route/Projects'

const router = createBrowserRouter([
  {
    path: "/",
    element: <About />
  },
  {
    path: "/projects",
    element: <Projects/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
