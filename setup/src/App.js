import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])
  const submitHendler = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <section className='container'>
        <form onClick={submitHendler}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </form>
      </section>
      <section className='color'></section>
    </>
  )
}

export default App
