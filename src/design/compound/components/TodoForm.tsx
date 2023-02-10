import React, { useState } from 'react'
import { Todo } from '../utils/types'

interface Props {
  addTodo: (todo: Todo) => void
}

const TodoForm: React.FC<Props> = ({ addTodo }) => {
  const [todoName, setTodoName] = useState<string>('')

  const handleAddTodo = () => {
    const uid = `${Date.now}-${todoName}`
    addTodo({ id: uid, name: todoName, state: 'pending' })
    setTodoName('')
  }

  return (
    <div>
      <input
        type="tel"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add todo</button>
    </div>
  )
}

export default TodoForm
