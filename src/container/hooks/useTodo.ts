import { useState } from 'react'

const useTodo = () => {
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

  return {
    todos,
    addTodo,
    deleteTodo,
  }
}

export default useTodo
