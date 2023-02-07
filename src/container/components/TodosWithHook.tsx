import React, { useState } from 'react'

import useTodo from '../hooks/useTodo'

const TodosWithHook = () => {
  const { todos, addTodo, deleteTodo } = useTodo()

  const [todoName, setTodoName] = useState<string>()

  const handleAddTodo = () => {
    if (!todoName) return
    addTodo(todoName)
    setTodoName('')
  }
  return (
    <>
      <div>
        <input
          type="text"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo} style={{ display: 'flex', alignItems: 'center' }}>
            <p>{todo}</p>
            <button onClick={() => deleteTodo(todo)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodosWithHook
