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
import Compound from './design/compound'
import DynamicImport from './performance/dynamicImport'
import VisibilityImport from './performance/visibilityImport'
import InteractionImport from './performance/interactionImport'

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
    {
      path: '/compound',
      element: <Compound />,
    },
    {
      path: '/performance/dynamic-import',
      element: <DynamicImport />,
    },
    {
      path: '/performance/visibility-import',
      element: <VisibilityImport />,
    },
    {
      path: '/performance/interaction-import',
      element: <InteractionImport />,
    },
  ])
  return <RouterProvider router={router} />
}

export default App
