import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter } from 'react-router-dom'

import Singleton from './singleton'

import './index.css'

const router = createHashRouter([
  {
    path: '/singleton',
    element: <Singleton />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode></React.StrictMode>
)
