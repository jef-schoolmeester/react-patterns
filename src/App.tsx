import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './root'
import Proxy from './design/proxy'
import Singleton from './design/singleton'
import Provider from './design/provider'
import Container from './design/container'
import Observer from './design/observer'
import HigherOrderComponent from './design/hoc'
import Factory from './design/factory'

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
    {
      path: '/container',
      element: <Container />,
    },
    {
      path: '/observer',
      element: <Observer />,
    },
    {
      path: '/hoc',
      element: <HigherOrderComponent />,
    },
    {
      path: '/factory',
      element: <Factory />,
    },
  ])
  return <RouterProvider router={router} />
}

export default App
