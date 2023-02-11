import React, { useRef, useState } from 'react'

import { counter } from '../utils/counter'

const Counter = () => {
  const [count, setCount] = useState<number>()
  const counterRef = useRef(counter)
  return (
    <div>
      <button onClick={() => setCount(counter.getCount())}>Update</button>
      <p>Count is: {count}</p>
      <p>{counterRef.current.getCount()}</p>
      <p>{counterRef.current.count}</p>
    </div>
  )
}

export default Counter
