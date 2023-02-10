import React from 'react'
import CatFactory from './components/CatFactory'
import { cats } from './utils/catData'

import './style.css'

const Factory = () => {
  return (
    <main>
      {cats.map((cat) => (
        <CatFactory key={cat.breed} {...cat} />
      ))}
    </main>
  )
}

export default Factory
