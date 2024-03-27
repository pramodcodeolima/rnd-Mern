import React from 'react'
import { useState } from 'react'

export default function Content() {
  const [count, setCount] = useState(0)

  const increment = () =>{
    setCount(count + 1)
  }

  const decrement = () =>{
    setCount(count - 1)
  }

  return (
    <div className='content'>
      <div>
        <p>The Count is {count} </p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

