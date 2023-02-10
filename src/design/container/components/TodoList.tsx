import React from 'react'

interface Props {
  todos: Array<string>
  deleteTodo: (name: string) => void
}

const TodosList: React.FC<Props> = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo} style={{ display: 'flex', alignItems: 'center' }}>
          <p>{todo}</p>
          <button onClick={() => deleteTodo(todo)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TodosList
