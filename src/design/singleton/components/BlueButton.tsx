import React from 'react'

import { counter } from '../counter'

const BlueButton = () => {
  return <button onClick={counter.increment}>Increment blue</button>
}

export default BlueButton
