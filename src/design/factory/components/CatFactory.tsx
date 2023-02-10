import React from 'react'
import { CatBreed } from '../utils/types'

import Cat from './Cat'
import SolidCat from './SolidCat'
import SpottedCat from './SpottedCat'
import TickedCat from './TickedCat'

const CatFactory: React.FC<CatBreed> = (props) => {
  switch (props.pattern) {
    case 'Solid':
      return <SolidCat {...props} />
    case 'Spotted':
      return <SpottedCat {...props} />
    case 'Ticked':
      return <TickedCat {...props} />
    default:
      return <Cat {...props} />
  }
}

export default CatFactory
