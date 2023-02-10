import React from 'react'
import { CatBreed } from '../utils/types'

const SolidCat: React.FC<CatBreed> = ({ breed }) => {
  return (
    <div className="solidBackground">
      <h3>SOLID</h3>
      <h2>{breed}</h2>
    </div>
  )
}

export default SolidCat
