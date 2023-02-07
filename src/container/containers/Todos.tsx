import React, { useState } from 'react'

import TodosList from '../components/TodoList'
import NewTodoForm from '../components/NewTodoForm'

const Todos = () => {
  const [todos, setTodos] = useState<string[]>([])

  const addTodo = (todo: string) => {
    if (todos.includes(todo)) {
      alert(`Todo "${todo}" allready exists`)
      return
    }
    setTodos(todos.concat([todo]))
  }

  const deleteTodo = (todo: string) => {
    setTodos(todos.filter((_) => _ !== todo))
  }

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <TodosList todos={todos} deleteTodo={deleteTodo} />
    </>
  )
}

export default Todos
