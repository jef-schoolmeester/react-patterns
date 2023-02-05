import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './root'
import Singleton from './singleton'

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
  ])
  return <RouterProvider router={router} />
}

export default App
