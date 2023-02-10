import React from 'react'
import { CatBreed } from '../utils/types'

const Cat: React.FC<CatBreed> = ({ breed }) => {
  return (
    <div>
      <h3>Cat</h3>
      <h2>{breed}</h2>
    </div>
  )
}

export default Cat
