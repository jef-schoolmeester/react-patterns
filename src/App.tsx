import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './root'
import Proxy from './proxy'
import Singleton from './singleton'
import Provider from './provider'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
    },
    {
      path: '/singleton',
      element: <Singleton />,
    },
    {
      path: '/proxy',
      element: <Proxy />,
    },
    {
      path: '/provider',
      element: <Provider />,
    },
  ])
  return <RouterProvider router={router} />
}

export default App
