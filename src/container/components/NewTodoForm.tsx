import React, { useState } from 'react'

interface Props {
  addTodo: (todo: string) => void
}

const NewTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [todoName, setTodoName] = useState<string>()

  const handleAddTodo = () => {
    if (!todoName) return
    addTodo(todoName)
    setTodoName('')
  }

  return (
    <div>
      <input
        type="text"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  )
}

export default NewTodoForm
