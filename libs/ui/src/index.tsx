'use client'
import { useState } from 'react'

export function Button() {
  const [value, setValue] = useState(0)

  return <button onClick={() => setValue(value + 1)}>click me {value}</button>
}
