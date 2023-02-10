import React, { useState } from 'react'

import { counter } from '../counter'

const Counter = () => {
  const [count, setCount] = useState<number>()
  return (
    <div>
      <button onClick={() => setCount(counter.getCount())}>Update</button>
      <p>Count is: {count}</p>
    </div>
  )
}

export default Counter
