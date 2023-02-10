import React from 'react'
import { CatBreed } from '../utils/types'

const SpottedCat: React.FC<CatBreed> = ({ breed }) => {
  return (
    <div className="spottedBackground">
      <h3>Spotted</h3>
      <h2>{breed}</h2>
    </div>
  )
}

export default SpottedCat
