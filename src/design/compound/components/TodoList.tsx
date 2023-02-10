import React, { useState } from 'react'
import { Todo } from '../utils/types'
import CompletedFlyOut from './CompletedFlyOut'
import PendingFlyOut from './PendingFlyOut'
import TodoForm from './TodoForm'

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const completeTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, state: 'finished' } : todo
      )
    )
  }

  return (
    <div>
      <TodoForm addTodo={(todo) => setTodos([...todos, todo])} />
      <section>
        <h2>Pending</h2>
        {todos
          .filter((todo) => todo.state === 'pending')
          .map((todo) => (
            <div key={todo.id}>
              {todo.name}
              <PendingFlyOut
                todoId={todo.id}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
              />
            </div>
          ))}
      </section>
      <section>
        <h2>Finished</h2>
        {todos
          .filter((todo) => todo.state === 'finished')
          .map((todo) => (
            <div key={todo.id}>
              {todo.name}
              <CompletedFlyOut todoId={todo.id} deleteTodo={deleteTodo} />
            </div>
          ))}
      </section>
    </div>
  )
}

export default TodoList
