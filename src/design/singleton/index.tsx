import React from 'react'
import BlueButton from './components/BlueButton'
import Counter from './components/Counter'
import RedButton from './components/RedButton'

const Singleton = () => {
  return (
    <main>
      <h1>Singleton pattern</h1>
      <p>Description text</p>
      <section>
        <h2>Example</h2>
        <Counter />
        <BlueButton />
        <RedButton />
      </section>
    </main>
  )
}

export default Singleton
