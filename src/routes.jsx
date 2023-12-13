import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Contact from './pages/contact'
import Home from './pages/home'
import ErrorPage from './pages/errorPage'
import HOC from './components/HOC'

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    //errorElement: <ErrorPage/>,
  },
  {
    path: "/contact",
    element: <HOC Component={Contact} />,
    //errorElement: <ErrorPage/>,
  }
])

export default AppRouter
