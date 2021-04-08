import { useState, useCallback } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  const plus = useCallback(() => setCount((t) => t + 1), [setCount])
  const minus = useCallback(() => setCount((t) => t - 1), [setCount])

  return (
    <div className='counter'>
      <div className='time'>{count}</div>
      <div className='controls'>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    </div>
  )
}
