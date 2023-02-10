import React from 'react'

import { CatFactProps } from '../utils/types'
import withCatFact from '../hocs/withCatFact'

const CatFact: React.FC<CatFactProps> = ({ fact, style = 'basic' }) => {
  return (
    <div>
      {style === 'fancy' && <h1>Fancy text</h1>}
      <p>{fact}</p>
    </div>
  )
}

export default withCatFact(CatFact)
