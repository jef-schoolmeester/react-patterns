import React from 'react'

import { counter } from '../counter'

const RedButton = () => {
  return <button onClick={counter.increment}>Increment red</button>
}

export default RedButton
