import React from 'react'

import Todos from './containers/Todos'

import TodosWithHook from './components/TodosWithHook'

const Container = () => {
  return (
    <main>
      <h1>Container</h1>
      <Todos />
      <h2>With hook:</h2>
      <TodosWithHook />
    </main>
  )
}

export default Container
