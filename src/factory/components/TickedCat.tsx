import React from 'react'
import { CatBreed } from '../utils/types'

const TickedCat: React.FC<CatBreed> = ({ breed }) => {
  return (
    <div className="tickedBackground">
      <h3>Ticked</h3>
      <h2>{breed}</h2>
    </div>
  )
}

export default TickedCat
