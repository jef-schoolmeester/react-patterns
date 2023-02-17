import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Root = lazy(() => import('./root'))
const Proxy = lazy(() => import('./design/proxy'))
const Singleton = lazy(() => import('./design/singleton'))
const Provider = lazy(() => import('./design/provider'))
const Container = lazy(() => import('./design/container'))
const Observer = lazy(() => import('./design/observer'))
const HigherOrderComponent = lazy(() => import('./design/hoc'))
const Factory = lazy(() => import('./design/factory'))
const Compound = lazy(() => import('./design/compound'))
const DynamicImport = lazy(() => import('./performance/dynamicImport'))
const VisibilityImport = lazy(() => import('./performance/visibilityImport'))
const InteractionImport = lazy(() => import('./performance/interactionImport'))

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
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
